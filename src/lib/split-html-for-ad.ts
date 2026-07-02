// Splits long post HTML at a safe boundary (a top-level </section> close
// nearest the midpoint) so an in-article ad can sit inside the content.
// Returns null for short posts or when no safe boundary exists — callers
// then render the content unsplit, exactly as before.
const MIN_LENGTH = 8000; // ~1,500 words of HTML; shorter posts keep 2 ads
const BOUNDARY = '</section>';

export function splitHtmlForAd(html: string): [string, string] | null {
  if (!html || html.length < MIN_LENGTH) return null;

  const positions: number[] = [];
  let idx = html.indexOf(BOUNDARY);
  while (idx !== -1) {
    positions.push(idx + BOUNDARY.length);
    idx = html.indexOf(BOUNDARY, idx + 1);
  }
  // Need at least 2 sections so neither chunk is empty.
  if (positions.length < 2) return null;

  const middle = html.length / 2;
  let best = positions[0];
  for (const pos of positions) {
    if (Math.abs(pos - middle) < Math.abs(best - middle)) best = pos;
  }
  // Never split so close to an edge that a chunk is trivial.
  if (best < html.length * 0.2 || best > html.length * 0.8) return null;

  return [html.slice(0, best), html.slice(best)];
}
