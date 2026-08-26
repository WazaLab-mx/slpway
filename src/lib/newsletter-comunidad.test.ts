import { generateComunidadSection, placeComunidadSection } from './newsletter-comunidad';

describe('generateComunidadSection', () => {
  it('emits semantic markup only — no table rows/cells or inline styles', () => {
    const out = generateComunidadSection('🎉 Free tacos Friday', 'Come hungry.', 'TACO10');
    expect(out).not.toMatch(/<tr|<td|<div|style=/i);
    expect(out).toContain('<!-- COMUNIDAD SECTION - CUSTOM CONTENT -->');
    expect(out).toContain('<h3>🤝 Comunidad</h3>');
    expect(out).toContain('<h4>🎉 Free tacos Friday</h4>');
    expect(out).toContain('<p>Come hungry.</p>');
    expect(out).toContain('<p><strong>TACO10</strong></p>');
  });

  it('omits the CTA line when there is no cta', () => {
    const out = generateComunidadSection('Title', 'Body');
    expect(out).not.toContain('<strong>');
  });

  it('returns empty string when body is blank', () => {
    expect(generateComunidadSection('Title', '   ')).toBe('');
  });
});

describe('placeComunidadSection', () => {
  const section = '<!-- COMUNIDAD SECTION - CUSTOM CONTENT -->\n<h3>🤝 Comunidad</h3>';

  it('replaces the placeholder comment when present', () => {
    const html = '<h3>✨ Community Spotlight</h3>\n<!-- COMUNIDAD_PLACEHOLDER -->\n<hr />\n<h2>🎁 1 fun thing</h2>';
    const out = placeComunidadSection(html, section);
    expect(out).not.toContain('COMUNIDAD_PLACEHOLDER');
    expect(out.indexOf('🤝 Comunidad')).toBeGreaterThan(out.indexOf('Community Spotlight'));
    expect(out.indexOf('🤝 Comunidad')).toBeLessThan(out.indexOf('1 fun thing'));
  });

  it('falls back to just before the CALL TO ACTION anchor', () => {
    const html = '<p>x</p>\n<!-- CALL TO ACTION -->\n<hr />';
    const out = placeComunidadSection(html, section);
    expect(out.indexOf('🤝 Comunidad')).toBeLessThan(out.indexOf('<!-- CALL TO ACTION -->'));
    expect(out).toContain('<!-- CALL TO ACTION -->');
  });

  it('appends at the end when no anchor exists', () => {
    const out = placeComunidadSection('<p>only</p>', section);
    expect(out.endsWith(section)).toBe(true);
  });
});
