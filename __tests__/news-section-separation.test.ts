import snapshot from './fixtures/home-news-2026-09-07.json';
const { isBannedTrending } = require('../netlify/functions/lib/news-curation');
const { sameStory, hasSocialEvidence, selectDistinctTrending } = require('../src/lib/news-section-policy');

describe('homepage editorial separation', () => {
  test.each(snapshot.trendingTopics)('rejects ordinary news as trending: $titleEn', (topic: any) => {
    const item = { title_es: topic.titleEs, summary_es: topic.summaryEs };
    const feedItem = { title: topic.titleEs, description: topic.summaryEs };
    expect(isBannedTrending(item, feedItem)).toBe(true);
  });

  test('does not accept social buzz invented by the curator', () => {
    const topic = snapshot.trendingTopics[0];
    expect(isBannedTrending({
      title_es: topic.titleEs,
      summary_es: 'Se hizo viral en TikTok y generó miles de comentarios.',
    }, { title: topic.titleEs, description: topic.summaryEs })).toBe(true);
  });

  test('filters all three duplicated stories from the captured production response', () => {
    expect(selectDistinctTrending(snapshot.trendingTopics, snapshot.communityNews)).toEqual([]);
  });

  test('matches a real story across tracking URLs and rewritten titles', () => {
    const topic = snapshot.trendingTopics[0];
    expect(sameStory(topic, { ...topic, titleEs: '', sourceUrl: `${topic.sourceUrl}?utm_source=facebook` })).toBe(true);
    expect(sameStory(topic, { ...topic, sourceUrl: '', titleEs: 'Transformación del Tangamanga: familias disfrutan el parque' })).toBe(true);
    expect(sameStory(topic, snapshot.trendingTopics[2])).toBe(false);
  });

  test.each([
    ['https://example.org/article?id=1', 'https://example.org/article?id=2'],
    ['https://youtube.com/watch?v=first', 'https://youtube.com/watch?v=second'],
  ])('preserves content identifiers in %s', (first, second) => {
    expect(sameStory({ url: first }, { url: second })).toBe(false);
  });

  test.each([
    ['El festival se hizo viral en TikTok por los comentarios de los asistentes.', true],
    ['El municipio publicó en Facebook el horario del parque.', false],
    ['Nuevo laboratorio de genómica viral.', false],
    ['Reacciones y memes en redes sociales sobre el festival.', true],
  ])('requires both a social platform and conversation: %s', (text, expected) => {
    expect(hasSocialEvidence(text)).toBe(expected);
  });

  test('keeps evidenced, distinct trends and removes repeats before applying the limit', () => {
    const topics = snapshot.trendingTopics.map((topic: any) => ({
      ...topic, summaryEs: 'El video generó comentarios y reacciones en TikTok.',
    }));
    expect(selectDistinctTrending([topics[0], topics[0], topics[1], topics[2]], [topics[0]])
      .map((topic: any) => topic.id)).toEqual([
      '3c33c1ef-952d-4364-ba00-17a5de97fbdd',
      '33e53767-f83e-447f-b57f-482001bb2b4b',
    ]);
    expect(isBannedTrending({ title_es: topics[0].titleEs, summary_es: topics[0].summaryEs }, {
      title: topics[0].titleEs, description: topics[0].summaryEs,
    })).toBe(false);
  });
});
