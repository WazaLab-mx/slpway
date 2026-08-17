const { parseRssItems, filterRecent } = require('../netlify/functions/lib/rss-feeds');
const {
  isBannedNews,
  isBannedTrending,
  validateCurated,
  curateFromFeeds,
} = require('../netlify/functions/lib/news-curation');

const RSS_FIXTURE = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Medio de Prueba</title>
  <item>
    <title><![CDATA[Festival de Jazz llega a SLP]]></title>
    <link>https://medio.mx/jazz-slp</link>
    <description><![CDATA[<p>El festival re&uacute;ne a <b>20 artistas</b> locales &amp; internacionales.</p>]]></description>
    <pubDate>Mon, 17 Aug 2026 10:00:00 +0000</pubDate>
  </item>
  <item>
    <title>Nota vieja sin CDATA &amp; con entidad</title>
    <link>https://medio.mx/vieja</link>
    <description>Texto plano</description>
    <pubDate>Mon, 10 Aug 2026 10:00:00 +0000</pubDate>
  </item>
  <item>
    <title>Nota sin link</title>
    <description>No debe aparecer</description>
  </item>
</channel></rss>`;

const localized = (over: Record<string, string> = {}) => ({
  title_es: 'Título', title_en: 'Title', title_de: 'Titel', title_ja: 'タイトル',
  summary_es: 'Resumen.', summary_en: 'Summary.', summary_de: 'Zusammenfassung.', summary_ja: '要約。',
  category: 'culture', source: 'Medio de Prueba', priority: 1,
  url: 'https://medio.mx/jazz-slp',
  ...over,
});

describe('rss-feeds', () => {
  it('parses RSS 2.0 items, decoding CDATA, entities, and stripping HTML', () => {
    const items = parseRssItems(RSS_FIXTURE, 'Medio de Prueba');
    expect(items).toHaveLength(2); // the item without link is dropped
    expect(items[0]).toMatchObject({
      source: 'Medio de Prueba',
      title: 'Festival de Jazz llega a SLP',
      url: 'https://medio.mx/jazz-slp',
    });
    expect(items[0].description).toBe('El festival reúne a 20 artistas locales & internacionales.');
    expect(items[0].publishedAt).toBe('2026-08-17T10:00:00.000Z');
    expect(items[1].title).toBe('Nota vieja sin CDATA & con entidad');
  });

  it('filterRecent drops items older than the age window but keeps undated ones', () => {
    const items = parseRssItems(RSS_FIXTURE, 'Medio de Prueba');
    const undated = { ...items[0], publishedAt: null };
    const now = new Date('2026-08-17T12:00:00Z').getTime();
    const recent = filterRecent([...items, undated], now, 72);
    expect(recent.map((i: any) => i.url)).toEqual(['https://medio.mx/jazz-slp', 'https://medio.mx/jazz-slp']);
  });
});

describe('news-curation validation and filters', () => {
  const allowed = new Set(['https://medio.mx/jazz-slp']);

  it('drops items whose URL is not in the feed set (invented links)', () => {
    const good = localized();
    const invented = localized({ url: 'https://medio.mx/inventada' });
    expect(validateCurated([good, invented], allowed)).toEqual([good]);
  });

  it('fills missing translations with fallbacks but drops items without Spanish', () => {
    const missingJa = localized({ title_ja: '', summary_de: '' });
    const filled = validateCurated([missingJa], allowed);
    expect(filled).toHaveLength(1);
    expect(filled[0].title_ja).toBe('Title'); // falls back to en
    expect(filled[0].summary_de).toBe('Summary.');

    const missingEs = localized({ summary_es: '' });
    expect(validateCurated([missingEs], allowed)).toEqual([]);
  });

  it('bans crime/insecurity content for news, and additionally gov-PR for trending', () => {
    const crime = localized({ title_es: 'Balacera en el centro' });
    const govPr = localized({ title_es: 'Gobernador inaugura obra pública' });
    const clean = localized();
    expect(isBannedNews(crime)).toBe(true);
    expect(isBannedNews(govPr)).toBe(false); // gov filter is trending-only
    expect(isBannedTrending(govPr)).toBe(true);
    expect(isBannedTrending(clean)).toBe(false);
  });
});

describe('curateFromFeeds pipeline', () => {
  const feedItems = [
    { source: 'Medio de Prueba', title: 'Jazz', url: 'https://medio.mx/jazz-slp', description: 'x', publishedAt: null },
    { source: 'Medio de Prueba', title: 'Beca', url: 'https://medio.mx/becas', description: 'x', publishedAt: null },
  ];

  const mockOpenAI = (payload: unknown) => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ choices: [{ message: { content: JSON.stringify(payload) } }] }),
    }) as any;
  };

  afterEach(() => {
    (global.fetch as jest.Mock)?.mockRestore?.();
  });

  it('enforces feed URLs, bans, and near-duplicate trending', async () => {
    mockOpenAI({
      news: [
        localized(),
        localized({ url: 'https://medio.mx/no-existe' }), // invented -> dropped
        localized({ title_es: 'Detienen a criminal', url: 'https://medio.mx/becas' }), // banned -> dropped
      ],
      trending: [
        localized({ title_es: 'Festival gastronómico del centro' }),
        localized({ title_es: 'Festival gastronómico increíble', url: 'https://medio.mx/becas' }), // near-dup -> dropped
        localized({ title_es: 'Aprobación del gobernador sube', url: 'https://medio.mx/becas' }), // gov -> dropped
      ],
    });

    const { news, trending } = await curateFromFeeds('sk-test', feedItems);
    expect(news).toHaveLength(1);
    expect(news[0].url).toBe('https://medio.mx/jazz-slp');
    expect(trending).toHaveLength(1);
    expect(trending[0].title_es).toBe('Festival gastronómico del centro');
  });

  it('resolves url/source from the item index, overriding whatever the model wrote', async () => {
    mockOpenAI({
      news: [localized({ item: 2, url: 'https://medio.mx/inventada', source: 'Otro' })],
      trending: [],
    });
    const { news } = await curateFromFeeds('sk-test', feedItems);
    expect(news).toHaveLength(1);
    expect(news[0].url).toBe('https://medio.mx/becas');
    expect(news[0].source).toBe('Medio de Prueba');
  });

  it('drops items with an out-of-range index and no valid url', async () => {
    mockOpenAI({
      news: [localized({ item: 99, url: 'https://medio.mx/inventada' })],
      trending: [],
    });
    const { news } = await curateFromFeeds('sk-test', feedItems);
    expect(news).toHaveLength(0);
  });

  it('dedupes repeated URLs and drops title/item mismatches', async () => {
    const withTitles = [
      { source: 'Medio de Prueba', title: 'Festival de Jazz en SLP', url: 'https://medio.mx/jazz-slp', description: 'x', publishedAt: null },
      { source: 'Medio de Prueba', title: 'Nuevas becas universitarias', url: 'https://medio.mx/becas', description: 'x', publishedAt: null },
    ];
    mockOpenAI({
      news: [
        localized({ title_es: 'Festival de Jazz llega a SLP', item: 1 }),
        localized({ title_es: 'Festival de Jazz otra vez', item: 1 }), // duplicate url -> dropped
        localized({ title_es: 'Torneo de ajedrez municipal', item: 2 }), // no word overlap with 'becas' item -> dropped
      ],
      trending: [],
    });
    const { news } = await curateFromFeeds('sk-test', withTitles);
    expect(news).toHaveLength(1);
    expect(news[0].title_es).toBe('Festival de Jazz llega a SLP');
  });

  it('drops items whose LINKED feed nota is crime or gov-PR, even with a clean rewritten title', async () => {
    const withGovNota = [
      { source: 'Medio de Prueba', title: 'Gallardo anuncia fechas del Quinto Informe de Gobierno', url: 'https://medio.mx/informe', description: 'x', publishedAt: null },
      { source: 'Medio de Prueba', title: 'Detienen a presunto criminal en la capital', url: 'https://medio.mx/crimen', description: 'x', publishedAt: null },
    ];
    mockOpenAI({
      news: [localized({ title_es: 'Anuncian fechas del informe', item: 1, url: 'https://medio.mx/informe' })],
      trending: [
        localized({ title_es: 'Fechas del quinto informe', item: 1, url: 'https://medio.mx/informe' }), // gov nota
        localized({ title_es: 'Detienen al presunto responsable', item: 2, url: 'https://medio.mx/crimen' }), // crime nota
      ],
    });
    const { news, trending } = await curateFromFeeds('sk-test', withGovNota);
    expect(news).toHaveLength(1); // gov is allowed in news (max-1 rule is prompt-level)
    expect(trending).toHaveLength(0); // both banned for trending
  });

  it('throws a descriptive error when OpenAI responds non-OK', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 429,
      text: async () => '{"error":{"code":"credit_balance_exhausted"}}',
    }) as any;
    await expect(curateFromFeeds('sk-test', feedItems)).rejects.toThrow('OpenAI API 429');
  });
});
