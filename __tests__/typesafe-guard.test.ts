const { applyJevGuard, guardSocialTopics, askSystemOne } = require('../netlify/functions/lib/typesafe-guard');

type Verdict = { crime?: number; disaster?: number; govPr?: number; communityUtility?: number };

const answersFor = (v: Verdict) => ({
  crime: { type: 'noul', noul: v.crime ?? 0.02 },
  disaster: { type: 'noul', noul: v.disaster ?? 0.02 },
  govPr: { type: 'noul', noul: v.govPr ?? 0.05 },
  communityUtility: { type: 'score', score: v.communityUtility ?? 1, confidence: 0.9 },
});

// Answers keyed by the title sent in `state`, mirroring one API call per item.
const mockJev = (byTitle: Record<string, Verdict>) => {
  global.fetch = jest.fn(async (_url: string, init: { body: string }) => {
    const { state } = JSON.parse(init.body);
    return { ok: true, json: async () => ({ answers: answersFor(byTitle[state.title] || {}) }) };
  }) as any;
};

const feed = (n: number) => ({ source: 'Medio', title: `Nota ${n}`, url: `https://medio.mx/${n}`, description: 'd' });
const curatedItem = (n: number) => ({ title_es: `Nota ${n}`, summary_es: 's', url: `https://medio.mx/${n}`, source: 'Medio' });

describe('applyJevGuard', () => {
  afterEach(() => (global.fetch as jest.Mock)?.mockRestore?.());

  it('is a no-op without an API key', async () => {
    global.fetch = jest.fn() as any;
    const curated = { news: [curatedItem(1)], trending: [] };
    expect(await applyJevGuard(undefined, curated, [feed(1)])).toBe(curated);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('drops crime/disaster news, caps gov PR at one, and trending gov PR entirely', async () => {
    mockJev({
      'Nota 2': { crime: 0.92 },
      'Nota 3': { disaster: 0.81 },
      'Nota 4': { govPr: 0.9 },
      'Nota 5': { govPr: 0.88 },
      'Nota 6': { govPr: 0.6 },
    });
    const feedItems = [1, 2, 3, 4, 5, 6].map(feed);
    const result = await applyJevGuard('ts-key', {
      news: [1, 2, 3, 4, 5].map(curatedItem),
      trending: [curatedItem(6)],
    }, feedItems);
    expect(result.news.map((n: { url: string }) => n.url)).toEqual(['https://medio.mx/1', 'https://medio.mx/4']);
    expect(result.trending).toHaveLength(0);
  });

  it('judges the ORIGINAL feed text, not the rewritten title', async () => {
    mockJev({ 'Nota 1': { crime: 0.95 } });
    const result = await applyJevGuard('ts-key', {
      news: [{ ...curatedItem(1), title_es: 'Un titular limpio' }],
      trending: [],
    }, [feed(1)]);
    expect(result.news).toHaveLength(0);
  });

  it('moves the 3 most community-useful published items to the front', async () => {
    mockJev({ 'Nota 5': { communityUtility: 3 }, 'Nota 7': { communityUtility: 2.6 }, 'Nota 9': { communityUtility: 3 } });
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = await applyJevGuard('ts-key', { news: ids.map(curatedItem), trending: [] }, ids.map(feed));
    // Nota 9 is outside the 8 published slots, so it cannot be promoted.
    expect(result.news.slice(0, 3).map((n: { title_es: string }) => n.title_es)).toEqual(['Nota 5', 'Nota 7', 'Nota 1']);
    expect(result.news).toHaveLength(9);
  });

  it('keeps an item with the regex-only verdict when its Jev call fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 401, text: async () => 'bad key' }) as any;
    const curated = { news: [curatedItem(1)], trending: [curatedItem(2)] };
    const result = await applyJevGuard('ts-key', curated, [feed(1), feed(2)]);
    expect(result.news).toHaveLength(1);
    expect(result.trending).toHaveLength(1);
  });
});

describe('guardSocialTopics', () => {
  afterEach(() => (global.fetch as jest.Mock)?.mockRestore?.());

  it('drops social topics that are government PR', async () => {
    mockJev({ 'Nota 2': { govPr: 0.7 } });
    const topics = [curatedItem(1), curatedItem(2)];
    const kept = await guardSocialTopics('ts-key', topics);
    expect(kept.map((t: { url: string }) => t.url)).toEqual(['https://medio.mx/1']);
  });
});

describe('askSystemOne', () => {
  afterEach(() => (global.fetch as jest.Mock)?.mockRestore?.());

  it('retries on 429 and sends jev-latest with bearer auth', async () => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({ ok: false, status: 429, text: async () => '' })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ answers: { q: { type: 'noul', noul: 0.1 } } }) }) as any;
    const answers = await askSystemOne('ts-key', 'hola', { q: { type: 'noul', instructions: 'x?' } });
    expect(answers.q.noul).toBe(0.1);
    const [url, init] = (global.fetch as jest.Mock).mock.calls[1];
    expect(url).toBe('https://api.typesafe.ai/v1/systemone');
    expect(init.headers.Authorization).toBe('Bearer ts-key');
    expect(JSON.parse(init.body).model).toBe('jev-latest');
  });
});
