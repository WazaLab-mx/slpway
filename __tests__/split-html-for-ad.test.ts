import { splitHtmlForAd } from '@/lib/split-html-for-ad';

const section = (id: string, filler: number) =>
  `<section id="${id}"><p>${'x'.repeat(filler)}</p></section>`;

describe('splitHtmlForAd', () => {
  it('returns null for short posts', () => {
    expect(splitHtmlForAd(section('a', 100) + section('b', 100))).toBeNull();
  });

  it('splits long posts at a </section> boundary near the midpoint', () => {
    const html = section('a', 3000) + section('b', 3000) + section('c', 3000);
    const result = splitHtmlForAd(html);
    expect(result).not.toBeNull();
    const [before, after] = result!;
    expect(before.endsWith('</section>')).toBe(true);
    expect(before + after).toBe(html);
    // Split is between 20% and 80% of the document
    expect(before.length).toBeGreaterThan(html.length * 0.2);
    expect(before.length).toBeLessThan(html.length * 0.8);
  });

  it('returns null when there are fewer than 2 sections', () => {
    expect(splitHtmlForAd(section('only', 10000))).toBeNull();
  });

  it('returns null when the only boundary is at an extreme edge', () => {
    const html = section('tiny', 10) + section('huge', 20000);
    expect(splitHtmlForAd(html)).toBeNull();
  });

  it('handles empty input', () => {
    expect(splitHtmlForAd('')).toBeNull();
  });
});
