import {
  slugifyEventTitle,
  buildEventSlug,
  buildEventPath,
  isFullUuid,
  extractIdPrefix,
} from '@/lib/event-slug';

const EVENT = {
  id: '047fcef9-d422-46e1-af57-f029c08144ce',
  title: 'Medio Maratón UASLP 2026',
  category: 'sports',
};

describe('slugifyEventTitle', () => {
  it('lowercases, strips accents and replaces separators', () => {
    expect(slugifyEventTitle('Medio Maratón UASLP 2026')).toBe('medio-maraton-uaslp-2026');
  });

  it('handles symbols and multiple spaces', () => {
    expect(slugifyEventTitle('Ha*Ash — Palenque  (FENAPO)')).toBe('ha-ash-palenque-fenapo');
  });

  it('caps length at 60 chars without trailing hyphen', () => {
    const slug = slugifyEventTitle('a'.repeat(59) + ' bcdef');
    expect(slug.length).toBeLessThanOrEqual(60);
    expect(slug.endsWith('-')).toBe(false);
  });
});

describe('buildEventSlug / buildEventPath', () => {
  it('appends the first 8 hex of the uuid', () => {
    expect(buildEventSlug(EVENT)).toBe('medio-maraton-uaslp-2026-047fcef9');
    expect(buildEventPath(EVENT)).toBe('/events/sports/medio-maraton-uaslp-2026-047fcef9');
  });

  it('falls back to the id prefix when the title has no usable chars', () => {
    expect(buildEventSlug({ id: EVENT.id, title: '¡¡¡' })).toBe('047fcef9');
  });
});

describe('isFullUuid', () => {
  it('accepts a full uuid and rejects slugs', () => {
    expect(isFullUuid(EVENT.id)).toBe(true);
    expect(isFullUuid('medio-maraton-uaslp-2026-047fcef9')).toBe(false);
  });
});

describe('extractIdPrefix', () => {
  it('extracts the trailing 8-hex prefix from a slug', () => {
    expect(extractIdPrefix('medio-maraton-uaslp-2026-047fcef9')).toBe('047fcef9');
  });

  it('returns null when there is no id suffix', () => {
    expect(extractIdPrefix('medio-maraton-uaslp-2026')).toBeNull();
    expect(extractIdPrefix('sports')).toBeNull();
  });

  it('is case-insensitive', () => {
    expect(extractIdPrefix('EVENTO-047FCEF9')).toBe('047fcef9');
  });
});
