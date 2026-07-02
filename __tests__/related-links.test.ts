import { relatedLinksForPlace, relatedLinksForEvent } from '@/lib/related-links';

describe('relatedLinksForPlace', () => {
  it('returns category-specific links plus this-week, capped at 3', () => {
    const links = relatedLinksForPlace('restaurant');
    expect(links).toHaveLength(3);
    expect(links.map((l) => l.href)).toEqual([
      '/restaurants',
      '/guides/foodie-guide',
      '/events/this-week',
    ]);
  });

  it('falls back to the directory for unknown categories', () => {
    const links = relatedLinksForPlace('unknown-category');
    expect(links.map((l) => l.href)).toEqual(['/places', '/events/this-week']);
  });
});

describe('relatedLinksForEvent', () => {
  it('always leads with this-week and ends with the category listing', () => {
    const links = relatedLinksForEvent('sports');
    expect(links[0].href).toBe('/events/this-week');
    expect(links.map((l) => l.href)).toContain('/events/sports');
    expect(links.length).toBeLessThanOrEqual(3);
  });

  it('handles categories without a mapped guide', () => {
    const links = relatedLinksForEvent('other');
    expect(links.map((l) => l.href)).toEqual(['/events/this-week', '/events/other']);
  });
});
