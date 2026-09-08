import captured from './fixtures/tavily-social-2026-09-07.json';
const { collectTavilyConversations } = require('../netlify/functions/lib/social-tavily');
const now = Date.parse('2026-09-08T03:00:00Z');

describe('Tavily social source verification', () => {
  test('binds real indexed X view counts and publication dates to the original post', () => {
    const topics = collectTavilyConversations(captured, now);
    const topic = topics.find((item: any) => item.url.includes('2096644220899451029'));
    expect(topic).toBeDefined();
    expect(topic.platform).toBe('X (Twitter)');
    expect(topic.metric).toEqual({ type: 'views', value: 1700, display: '1.7K' });
    expect(topic.publishedAt).toContain('2026-09-06');
    expect(topic.description).toContain('Aldea Huasteca');
    expect(topic.description).not.toContain('Relevant people');
  });

  test('rejects discovery pages, other cities, low activity, absent dates and stale posts', () => {
    const topics = collectTavilyConversations(captured, now);
    expect(topics.every((topic: any) => !/discover|popular|reposts/.test(topic.url))).toBe(true);
    expect(topics.some((topic: any) => topic.url.includes('Cultura_Tabasco'))).toBe(false);
    expect(topics.some((topic: any) => topic.url.includes('2094882233958166761'))).toBe(false);
    expect(collectTavilyConversations(captured, now + 8 * 86400000)).toEqual([]);
    const source = captured.find(item => item.url.includes('2096644220899451029'))!;
    expect(collectTavilyConversations([{ ...source, raw_content: null }], now)).toEqual([]);
  });

  test('deduplicates repeated indexed posts', () => {
    const topics = collectTavilyConversations([...captured, ...captured], now);
    expect(new Set(topics.map((topic: any) => topic.url)).size).toBe(topics.length);
  });
});
