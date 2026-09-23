import handler from '@/pages/api/home-services/match';
import { interpretMatch, buildMatchQuestions } from '@/lib/home-services-match';
import { selectProviders, type HomeServiceProvider } from '@/lib/home-services-providers';
import { CATEGORY_KEYS } from '@/lib/home-services-categories';
import { toProvider } from '@/lib/home-services-fetch';

const categoryAnswer = (choice: string, probabilities: Record<string, number>, confidence: number) => ({
  category: { choice, probabilities, confidence },
  urgency: { score: 0.4 },
});

describe('interpretMatch', () => {
  it('returns the category when Jev is confident', () => {
    const r = interpretMatch(categoryAnswer('plumbing', { plumbing: 0.9, waterproofing: 0.08, none: 0.02 }, 0.8));
    expect(r).toEqual({ category: 'plumbing', alternatives: [], urgent: false });
  });

  it('offers alternatives instead of guessing when unsure', () => {
    const r = interpretMatch(categoryAnswer('masonry', { masonry: 0.4, waterproofing: 0.35, painting: 0.2, none: 0.05 }, 0.3));
    expect(r.category).toBeNull();
    expect(r.alternatives).toEqual(['masonry', 'waterproofing', 'painting']);
  });

  it('never returns "none" as a category and flags urgency', () => {
    const r = interpretMatch({ ...categoryAnswer('none', { none: 0.9, plumbing: 0.1 }, 0.9), urgency: { score: 1.9 } });
    expect(r.category).toBeNull();
    expect(r.alternatives).toEqual([]);
    expect(r.urgent).toBe(true);
  });

  it('asks Jev over every category plus a no-match option', () => {
    expect(Object.keys(buildMatchQuestions().category.criteria)).toEqual([...CATEGORY_KEYS, 'none']);
  });
});

describe('POST /api/home-services/match', () => {
  const env = process.env.TYPESAFE_API_KEY;
  beforeEach(() => { process.env.TYPESAFE_API_KEY = 'ts-key'; });
  afterEach(() => {
    process.env.TYPESAFE_API_KEY = env;
    (global.fetch as jest.Mock)?.mockRestore?.();
  });

  // Minimal Next req/res; a unique IP per call keeps the rate limiter out of the way.
  const call = async (body: unknown, method: 'POST' | 'GET' = 'POST') => {
    const res = {
      statusCode: 200, body: undefined as unknown, headers: {} as Record<string, unknown>,
      setHeader(k: string, v: unknown) { this.headers[k] = v; return this; },
      status(code: number) { this.statusCode = code; return this; },
      json(data: unknown) { this.body = data; return this; },
    };
    const req = { method, body, url: '/api/home-services/match', headers: { 'x-forwarded-for': `10.0.0.${Math.random()}` } };
    await handler(req as any, res as any);
    return res;
  };

  it('routes a problem description through Jev', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ answers: { ...categoryAnswer('locksmith', { locksmith: 0.97, none: 0.03 }, 0.95), urgency: { score: 2 } } }),
    }) as any;
    const res = await call({ problem: 'Me quedé afuera de mi casa sin llaves' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ category: 'locksmith', alternatives: [], urgent: true });
    expect(JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body).state).toEqual({ problem: 'Me quedé afuera de mi casa sin llaves' });
  });

  it('rejects invalid input and other methods', async () => {
    expect((await call({ problem: 'x' })).statusCode).toBe(400);
    expect((await call({ problem: 'a'.repeat(501) })).statusCode).toBe(400);
    expect((await call({}, 'GET')).statusCode).toBe(405);
  });

  it('reports 503 without a key and 502 when Jev fails', async () => {
    delete process.env.TYPESAFE_API_KEY;
    expect((await call({ problem: 'fuga de agua' })).statusCode).toBe(503);
    process.env.TYPESAFE_API_KEY = 'ts-key';
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 401, text: async () => '' }) as any;
    expect((await call({ problem: 'fuga de agua' })).statusCode).toBe(502);
  });
});

describe('selectProviders', () => {
  const p = (id: string, category: string, offersEmergency = false) => ({ id, category, offersEmergency } as HomeServiceProvider);
  const providers = [p('a', 'plumbing'), p('b', 'plumbing', true), p('c', 'electrical', true)];

  it('keeps rank order and puts emergency providers first only when urgent', () => {
    expect(selectProviders(providers, 'plumbing', false).map(x => x.id)).toEqual(['a', 'b']);
    expect(selectProviders(providers, 'plumbing', true).map(x => x.id)).toEqual(['b', 'a']);
  });
});

describe('toProvider', () => {
  it('maps a DB row, turning the manual timestamp into a badge flag', () => {
    const row = {
      id: 'u1', name: 'Cerrajería 24h', category: 'locksmith', phone: '444 000 0000', google_rating: '4.6',
      google_review_count: 88, auto_verified: true, slw_verified_at: '2026-09-23T00:00:00Z', offers_emergency: true,
      jev_scores: { reliability: 2.5, responsive: 0.9, satisfaction: 2.7, seriousComplaints: 0.03, servesCategory: 0.98 },
      rank_score: '0.8123',
    };
    expect(toProvider(row)).toMatchObject({
      googleRating: 4.6, googleReviewCount: 88, slwVerified: true, offersEmergency: true, rankScore: 0.8123,
      jev: { reliability: 2.5, responsive: 0.9, satisfaction: 2.7, seriousComplaints: 0.03 },
    });
  });
});
