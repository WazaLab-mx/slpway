import { parseSections, SECTION_MARKERS } from '../newsletter-section-parser';
import { NEWSLETTER_TEMPLATE } from '../newsletter-generator';

// Sections whose anchor is a comment that is ALWAYS present in the template
// (some, like CTA/Comunidad, depend on dynamic content and are covered below).
const CARD_SECTION_IDS = [
  'opening', 'weather', 'market_watch', 'news', 'events', 'more_events',
  'spot_of_the_week', 'around_town', 'coming_up', 'ask_an_expat', 'tip',
  'spanish_corner', 'fact', 'escape', 'blog', 'community_spotlight',
];

describe('parseSections', () => {
  it('detects every card section in the canonical template (comments present)', () => {
    const sections = parseSections(NEWSLETTER_TEMPLATE);
    const ids = sections.map((s) => s.id);
    for (const id of CARD_SECTION_IDS) {
      expect(ids).toContain(id);
    }
  });

  it('returns sections in document order with non-empty html', () => {
    const sections = parseSections(NEWSLETTER_TEMPLATE);
    expect(sections.length).toBeGreaterThanOrEqual(CARD_SECTION_IDS.length);
    for (const s of sections) {
      expect(s.html.trim().length).toBeGreaterThan(20);
    }
  });

  it('does not collapse sibling sections inside a single card <tr>', () => {
    // Weather, Market Watch and Top News all live as <div>s in Card 1's <tr>.
    // The old forward-to-<tr> logic dropped them; ensure all three survive.
    const sections = parseSections(NEWSLETTER_TEMPLATE);
    const ids = sections.map((s) => s.id);
    expect(ids).toContain('weather');
    expect(ids).toContain('market_watch');
    expect(ids).toContain('news');
  });

  it('still finds sections when the LLM dropped the HTML comments (heading fallback)', () => {
    const stripped = NEWSLETTER_TEMPLATE.replace(/<!--[\s\S]*?-->/g, '');
    const ids = parseSections(stripped).map((s) => s.id);
    // Heading-text fallbacks should recover the visible-heading sections.
    for (const id of ['weather', 'market_watch', 'news', 'events', 'around_town', 'coming_up', 'spanish_corner', 'fact', 'escape', 'blog']) {
      expect(ids).toContain(id);
    }
  });

  it('uses the corrected "Top News" heading fallback for the news section', () => {
    const news = SECTION_MARKERS.find((m) => m.id === 'news');
    expect(news?.fallback?.test('📰 Top News')).toBe(true);
  });

  it('ignores empty input', () => {
    expect(parseSections('')).toEqual([]);
  });
});
