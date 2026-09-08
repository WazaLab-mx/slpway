import { renderNewsletterDesign, exportNewsletterDocument } from './newsletter-design';
import { NEWSLETTER_TEMPLATE } from './newsletter-template';
import { parseSections } from './newsletter-section-parser';

describe('newsletter email design', () => {
  it('exports a standalone UTF-8 mobile document around the same email design', () => {
    const exported = exportNewsletterDocument(NEWSLETTER_TEMPLATE);
    expect(exported).toContain('<meta charset="utf-8">');
    expect(exported).toContain('width=device-width');
    expect(exported).toContain(renderNewsletterDesign(NEWSLETTER_TEMPLATE));
  });
  it('applies the site identity with inline email styles and a fluid layout', () => {
    const html = renderNewsletterDesign(NEWSLETTER_TEMPLATE);
    expect(html).toContain('San Luis Way');
    expect(html).toContain('#00007A');
    expect(html).toContain('#FFCB05');
    expect(html).toContain('max-width:640px');
    expect(html).toContain('Georgia');
    expect(html).toContain('role="presentation"');
    expect(html).not.toMatch(/<style|<script|display:grid|display:flex/);
    expect(html).toMatch(/<h2[^>]*style="[^"]*">1 big thing/);
  });

  it('preserves editable sections, links and placeholders in the canonical template', () => {
    const original = parseSections(NEWSLETTER_TEMPLATE);
    const rendered = parseSections(renderNewsletterDesign(NEWSLETTER_TEMPLATE));
    expect(rendered.map(section => section.id)).toEqual(original.map(section => section.id));
    expect(renderNewsletterDesign(NEWSLETTER_TEMPLATE)).toContain('[BLOG_POST_URL]');
    expect(renderNewsletterDesign(NEWSLETTER_TEMPLATE)).toContain('<!-- AD_PLACEMENT_TOP -->');
    expect(NEWSLETTER_TEMPLATE).not.toContain('data-newsletter-design');
  });

  it('does not duplicate branding when an exported edition is rendered again', () => {
    const html = renderNewsletterDesign(NEWSLETTER_TEMPLATE);
    expect(renderNewsletterDesign(html)).toBe(html);
    expect(renderNewsletterDesign('')).toBe('');
  });

  it('uses compact side gutters so mobile readers retain usable text width', () => {
    const html = renderNewsletterDesign(NEWSLETTER_TEMPLATE);
    expect(html).toContain('padding:12px 0');
    expect(html).toContain('padding:24px 16px;font-family:');
    expect(html).not.toContain('padding:16px 8px');
  });
});
