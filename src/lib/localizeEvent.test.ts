import { localizeEvent, localizeEvents, EVENT_LOCALE_COLUMNS } from './localizeEvent';

const base = {
  id: '1',
  title: 'Carlos Ballarta at Teatro de la Paz',
  description: 'Stand-up show.',
  start_date: '2026-08-30',
  end_date: '2026-08-30',
  location: 'Teatro de la Paz',
  category: 'arts-culture' as const,
  image_url: null,
  featured: false,
  title_es: 'Carlos Ballarta en el Teatro de la Paz',
  description_es: 'Show de stand-up.',
  title_de: null,
  description_de: null,
  title_ja: 'カルロス・バジャルタ',
  description_ja: '',
};

describe('localizeEvent', () => {
  it('returns English base fields for en', () => {
    const out = localizeEvent(base, 'en');
    expect(out.title).toBe(base.title);
    expect(out.description).toBe(base.description);
  });

  it('picks the locale column when filled', () => {
    const out = localizeEvent(base, 'es');
    expect(out.title).toBe('Carlos Ballarta en el Teatro de la Paz');
    expect(out.description).toBe('Show de stand-up.');
  });

  it('falls back to the English base when the locale column is null or empty', () => {
    expect(localizeEvent(base, 'de').title).toBe(base.title);
    expect(localizeEvent(base, 'de').description).toBe(base.description);
    // ja title is set but description is empty → per-field fallback
    expect(localizeEvent(base, 'ja').title).toBe('カルロス・バジャルタ');
    expect(localizeEvent(base, 'ja').description).toBe(base.description);
  });

  it('treats unknown/undefined locales as English', () => {
    expect(localizeEvent(base, undefined).title).toBe(base.title);
    expect(localizeEvent(base, 'fr').title).toBe(base.title);
  });

  it('always carries the English title as base_title so slugs never change per locale', () => {
    expect(localizeEvent(base, 'es').base_title).toBe(base.title);
    expect(localizeEvent(base, 'en').base_title).toBe(base.title);
    // Re-localizing an already localized event keeps the original base.
    const es = localizeEvent(base, 'es');
    expect(localizeEvent(es, 'ja').base_title).toBe(base.title);
  });

  it('does not mutate the input and keeps the other fields', () => {
    const copy = { ...base };
    const out = localizeEvent(copy, 'es');
    expect(copy.title).toBe(base.title);
    expect(out.location).toBe(base.location);
    expect(out.id).toBe('1');
  });

  it('strips the per-locale columns from the output (smaller page props / API payloads)', () => {
    const out = localizeEvent(base, 'es') as Record<string, unknown>;
    for (const key of ['title_es', 'title_de', 'title_ja', 'description_es', 'description_de', 'description_ja']) {
      expect(out).not.toHaveProperty(key);
    }
    expect(localizeEvent(base, 'en')).not.toHaveProperty('title_es');
  });

  it('works on rows that were selected without the locale columns', () => {
    const { title_es, description_es, title_de, description_de, title_ja, description_ja, ...plain } = base;
    void [title_es, description_es, title_de, description_de, title_ja, description_ja];
    expect(localizeEvent(plain, 'es').title).toBe(base.title);
  });

  it('localizeEvents maps a list', () => {
    const out = localizeEvents([base, { ...base, id: '2', title_es: null }], 'es');
    expect(out.map((e) => e.title)).toEqual(['Carlos Ballarta en el Teatro de la Paz', base.title]);
  });

  it('exposes the column list needed for explicit selects', () => {
    expect(EVENT_LOCALE_COLUMNS).toBe('title_es, title_de, title_ja, description_es, description_de, description_ja');
  });
});
