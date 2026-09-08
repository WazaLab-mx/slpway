import { readFileSync } from 'fs';
import { join } from 'path';
import { renderNewsletterDesign } from '@/lib/newsletter-design';

const edition = readFileSync(join(process.cwd(), '__tests__/fixtures/newsletter-edition-2026-09-07.html'), 'utf8');

describe('real newsletter rendering', () => {
  it('keeps content in order and inside the branded layout despite legacy ad rows', () => {
    const doc = new DOMParser().parseFromString(renderNewsletterDesign(edition), 'text/html');
    const layout = doc.querySelector('[data-newsletter-design]')!;
    expect(doc.body.firstElementChild).toBe(layout);
    expect(doc.body.children).toHaveLength(1);
    expect(layout.textContent).toContain('Expat Toolkit');
    expect(layout.textContent).toContain("That's a wrap.");
    expect(layout.textContent!.indexOf('San Luis Way')).toBeLessThan(layout.textContent!.indexOf('Expat Toolkit'));
    expect(Array.from(doc.querySelectorAll('h2')).map(el => el.textContent)).toEqual(
      ['1 big thing', "What's On", 'Expat Toolkit', 'Go Deeper', '1 fun thing']);
  });

  it('exports absolute image URLs and preserves the edition links and sponsored content', () => {
    const doc = new DOMParser().parseFromString(renderNewsletterDesign(edition), 'text/html');
    const source = new DOMParser().parseFromString(edition, 'text/html');
    const links = Array.from(doc.querySelectorAll('a')).map(el => el.getAttribute('href'));
    source.querySelectorAll('a').forEach(el => expect(links).toContain(el.getAttribute('href')));
    expect(doc.querySelectorAll('img').length).toBe(source.querySelectorAll('img').length);
    doc.querySelectorAll('img').forEach(el => expect(el.getAttribute('src')).toMatch(/^https:\/\//));
    expect(doc.querySelector('h2')?.getAttribute('style')).toContain('#FFCB05');
  });
});
