/**
 * Newsletter section parser for the admin editor.
 *
 * Splits a rendered newsletter into individually-editable sections. Each
 * section is anchored by either the HTML comment the template emits
 * (e.g. <!-- WEATHER -->) or, when an LLM rewrite dropped the comment, by the
 * section's heading TEXT (emoji-agnostic). Sections are contiguous slices from
 * one marker to the next in document order, so every section shows up even when
 * several live as sibling <div>s inside a single card <tr>.
 */

export interface NewsletterSection {
  id: string;
  name: string;
  type: string;
  html: string;
  editable: boolean;
}

interface SectionMarker {
  id: string;
  name: string;
  pattern: RegExp;
  fallback?: RegExp;
  editable: boolean;
}

// Fallbacks match the section's heading TEXT (emoji-agnostic) rather than the
// emoji glyph, because LLM rewrites often drop the HTML comment AND re-encode
// or omit the emoji. Matching the title words is far more reliable, so every
// section keeps showing up in the editor even when comments are gone.
export const SECTION_MARKERS: SectionMarker[] = [
  { id: 'opening',             name: '👋 Opening Hook',         pattern: /<!--\s*OPENING HOOK\s*-->/i,                fallback: /Hey there!|¡Hola,\s*(?:potosinos|SLP)|Buenos días, San Luis|Happy \w+, SLP|Welcome back to the weekly|Back with your weekly|Big week ahead/i, editable: true },
  { id: 'weather',             name: '🌦️ Weather Watch',        pattern: /<!--\s*WEATHER(?:\s*&\s*ENVIRONMENT)?\s*-->/i, fallback: /Weather Watch/i, editable: true },
  { id: 'market_watch',        name: '💰 Market Watch',         pattern: /<!--\s*MARKET WATCH\s*-->/i,                fallback: /Market Watch/i, editable: true },
  { id: 'news',                name: '📰 Top News',             pattern: /<!--\s*NEWS SECTION\s*-->/i,                fallback: /Top News|The Week in SLP/i, editable: true },
  { id: 'events',              name: '🌟 Top Picks',            pattern: /<!--\s*TOP PICKS\s*-->/i,                   fallback: /This Week'?s Top Picks|Top Picks/i, editable: true },
  { id: 'more_events',         name: '🎭 More This Week',       pattern: /<!--\s*MORE THIS WEEK\s*-->/i,              fallback: /More This Week/i, editable: true },
  { id: 'spot_of_the_week',    name: '📍 Spot of the Week',     pattern: /<!--\s*SPOT OF THE WEEK\s*-->/i,            fallback: /Spot of the Week/i, editable: true },
  { id: 'around_town',         name: '🏙️ Around Town',          pattern: /<!--\s*AROUND TOWN\s*-->/i,                 fallback: /Around Town/i, editable: true },
  { id: 'coming_up',           name: '📅 Coming Up',            pattern: /<!--\s*COMING UP\s*-->/i,                   fallback: /Coming Up/i, editable: true },
  { id: 'ask_an_expat',        name: '🙋 Ask an Expat',         pattern: /<!--\s*ASK AN EXPAT\s*-->/i,                fallback: /Ask an Expat/i, editable: true },
  { id: 'tip',                 name: '💡 Pro Tip',              pattern: /<!--\s*PRO TIP\s*-->/i,                     fallback: /Expat Pro Tip|Pro Tip/i, editable: true },
  { id: 'spanish_corner',      name: '🗣️ Spanish Corner',       pattern: /<!--\s*SPANISH CORNER\s*-->/i,              fallback: /Spanish Corner/i, editable: true },
  { id: 'fact',                name: '🧠 Did You Know?',        pattern: /<!--\s*DID YOU KNOW\??\s*-->/i,             fallback: /Did You Know/i, editable: true },
  { id: 'escape',              name: '🌿 Weekend Escape',       pattern: /<!--\s*WEEKEND ESCAPE\s*-->/i,              fallback: /Weekend Escape/i, editable: true },
  { id: 'blog',                name: '📖 From the Blog',        pattern: /<!--\s*FROM THE BLOG[^>]*-->/i,             fallback: /From the Blog/i, editable: false },
  { id: 'community_spotlight', name: '✨ Community Spotlight',  pattern: /<!--\s*COMMUNITY SPOTLIGHT\s*-->/i,         fallback: /Community Spotlight/i, editable: true },
  { id: 'comunidad',           name: '🤝 Comunidad',            pattern: /<!--\s*COMUNIDAD(?:\s+SECTION)?[^>]*-->/i,  fallback: /🤝\s*Comunidad|>\s*Comunidad\s*</i, editable: true },
  { id: 'cta',                 name: '📣 Call to Action',       pattern: /<!--\s*CALL TO ACTION\s*-->/i,              fallback: /Call to Action/i, editable: true },
];

function matchMarker(html: string, marker: SectionMarker): RegExpMatchArray | null {
  const primary = html.match(marker.pattern);
  if (primary) return primary;
  if (marker.fallback) return html.match(marker.fallback);
  return null;
}

export function parseSections(html: string): NewsletterSection[] {
  // Locate every marker once, then walk them in document order. The marker's
  // own position is the section boundary — we do NOT jump forward to the next
  // <tr>, because sections nested as sibling <div>s in one card <tr> (Weather,
  // Market Watch, Top News, Quick Hits) would otherwise collapse onto the same
  // index, slice to empty, and disappear from the editor.
  const hits: { marker: SectionMarker; start: number }[] = [];
  for (const marker of SECTION_MARKERS) {
    const match = matchMarker(html, marker);
    if (!match || match.index === undefined) continue;
    hits.push({ marker, start: match.index });
  }
  hits.sort((a, b) => a.start - b.start);

  const sections: NewsletterSection[] = [];
  for (let i = 0; i < hits.length; i++) {
    const { marker, start } = hits[i];
    const end = i + 1 < hits.length ? hits[i + 1].start : html.length;
    const sectionHtml = html.substring(start, end).trim();
    if (sectionHtml.length > 20) {
      sections.push({
        id: marker.id,
        name: marker.name,
        type: marker.id,
        html: sectionHtml,
        editable: marker.editable,
      });
    }
  }
  return sections;
}
