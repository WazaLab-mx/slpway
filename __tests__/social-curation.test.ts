import captured from './fixtures/social-topics-2026-09-07.json';
import sources from './fixtures/social-candidates-2026-09-07.json';
const { resolveSocialTopics } = require('../netlify/functions/lib/social-curation');
const items = captured.map(topic => ({ ...topic, item: sources.findIndex(source => source.url === topic.url) + 1 }));

describe('social curation provenance', () => {
  test('anchors links to observed posts and adds real sampled activity in every language', () => {
    const topics = resolveSocialTopics([{ ...items[0], item: 1, url: 'https://example.org/invented', source: 'invented' }], [sources[1]]);
    expect(topics[0].url).toContain('/comments/1w9clmp/');
    expect(topics[0].source).toBe('Reddit · r/SanLuisPotosi');
    expect(topics[0].summary_en).toContain('11 replies observed');
    expect(topics[0].summary_es).toContain('11 respuestas observadas');
    expect(topics[0].summary_de).toContain('11 beobachtete Antworten');
    expect(topics[0].summary_ja).toContain('11件の返信');
  });

  test('rejects invented references, missing translations and unsupported activity', () => {
    expect(resolveSocialTopics([{ ...items[0], item: 99 }], sources)).toEqual([]);
    expect(resolveSocialTopics([{ ...items[0], summary_ja: '' }], sources)).toEqual([]);
    expect(resolveSocialTopics([items[0]], [{ ...sources[0], participantCount: 1 }])).toEqual([]);
  });

  test('deduplicates repeated source posts and community news', () => {
    const topics = resolveSocialTopics([items[0], items[0], items[1], items[2]], sources, [{ url: sources[1].url }]);
    expect(topics.map((topic: any) => topic.url)).toEqual([sources[3].url, sources[4].url]);
  });

  test('keeps a faithful rewritten title bound to its sole source', () => {
    const topics = resolveSocialTopics([{ ...items[0], item: 1, title_es: 'Dónde comprar café de especialidad' }], [sources[2]]);
    expect(topics[0].url).toContain('/comments/1w8lirg/');
  });
});
