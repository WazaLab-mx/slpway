import { CLOSING_AND_FOOTER_HTML } from './newsletter-template';

/**
 * Injects a <style> block with mobile @media rules + dark-mode opt-out at the
 * top of the cleaned newsletter HTML. Must run AFTER cleanHtmlForBeehiiv,
 * which strips <head> and any AI-returned <style> blocks — otherwise this CSS
 * would never reach the email client.
 *
 * Attribute selectors (e.g. td[style*="padding: 30px"]) are used so we don't
 * depend on class attributes (also stripped by Beehiiv's templating layer).
 * Gmail iOS/Android, Apple Mail, and Yahoo Mail honor @media + color-scheme.
 * Outlook ignores @media but the base inline styles already render fine on
 * desktop widths.
 */
export function injectResponsiveStyles(html: string): string {
  const responsiveCss = `
<style>
  :root { color-scheme: light; supported-color-schemes: light; }
  @media only screen and (max-width: 620px) {
    table[width="600"] { width: 100% !important; }
    td[style*="padding: 30px"] { padding: 20px 16px !important; }
    td[style*="padding: 40px 30px"] { padding: 28px 20px !important; }
    td[style*="padding: 20px 30px"] { padding: 16px 18px !important; }
    h1[style*="font-size: 28px"] { font-size: 24px !important; }
    h2[style*="font-size: 24px"] { font-size: 20px !important; }
    h2[style*="font-size: 20px"] { font-size: 18px !important; }
    h2[style*="font-size: 18px"] { font-size: 17px !important; }
    p[style*="font-size: 16px"] { font-size: 15px !important; line-height: 1.6 !important; }
  }
  @media (prefers-color-scheme: dark) {
    /* Apple Mail / iOS Mail force-invert light emails. Forcing light
       color-scheme via the :root rule above handles Gmail + Apple Mail.
       Everything else falls back to the inline light-theme styles. */
  }
</style>
`;
  return responsiveCss + html;
}

// Critical placeholders — if any remain in final HTML the newsletter is broken
// enough that we'd rather fail generation than ship a malformed edition.
export const CRITICAL_PLACEHOLDERS = new Set([
  '[WEEK_DATE_RANGE]',
  '[OPENING_HOOK_TEXT]',
  '[CTA_TITLE]',
  '[CTA_BODY]',
  '[CTA_BUTTON_LABEL]',
  '[CTA_BUTTON_LINK]',
  '[BLOG_POST_TITLE]',
  '[BLOG_POST_URL]',
  '[ONE_SENTENCE_TEASER]',
]);

/**
 * Finds every unfilled [ALL_CAPS_PLACEHOLDER] left in the HTML. Previously
 * these were silently stripped by cleanHtmlForBeehiiv, causing sections to
 * render empty or half-filled without any warning to the admin.
 */
export function detectUnfilledPlaceholders(html: string): string[] {
  const matches = html.match(/\[[A-Z][A-Z0-9_]{2,}\]/g);
  if (!matches) return [];
  return Array.from(new Set(matches)).sort();
}

// Function to clean HTML for Beehiiv compatibility
export function cleanHtmlForBeehiiv(html: string): string {
  let cleaned = html;

  // Remove markdown code blocks anywhere in the content
  cleaned = cleaned.replace(/```html\s*/gi, '');
  cleaned = cleaned.replace(/```\s*/gi, '');

  // Remove unreplaced placeholders (text in square brackets that looks like a template variable)
  cleaned = cleaned.replace(/\[(?:NEWS_|EVENT_|BLOG_|LINK_|DATE_|CATEGORY_|VENUE_|COST_|FACT_|TIP_|CTA_|WEATHER_|QUICK_HIT_|PREVIEW_|HERO_|TOP_PICK_|ESCAPE_|NEW_PLACE_|DESTINATION_|UPCOMING_|IMPACT_|HISTORY_|SPOTLIGHT_|EXCHANGE_|GAS_|LP_GAS_|MARKET_|SPOT_|SPANISH_|PHRASE_|EXPAT_)[A-Z0-9_]+\]/g, '');

  // Remove generic placeholders like [EVENT], [DATE], [ADDRESS], [VENUE], [TIME], etc.
  cleaned = cleaned.replace(/\[(?:EVENT|EVENT_NAME|DATE|ADDRESS|DESCRIPTION|LINK|PRACTICAL_CITY_UPDATE|VENUE|TIME)\]/g, '');

  // Remove template instruction comments
  cleaned = cleaned.replace(/\[[\d-]+ sentences[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[[^\]]*what it is[^\]]*\]/gi, '');
  cleaned = cleaned.replace(/\[[^\]]*why check it out[^\]]*\]/gi, '');

  // Remove lines that only contain "→ Why it matters:" with no content
  cleaned = cleaned.replace(/<p[^>]*>→ Why it matters:\s*<\/p>/gi, '');

  // Remove empty list items
  cleaned = cleaned.replace(/<li[^>]*>\s*<\/li>/gi, '');

  // Remove DOCTYPE, html, head, body, and any AI-emitted <style> blocks —
  // Beehiiv supplies its own outer chrome, and we inject a clean responsive
  // <style> right after this pass via injectResponsiveStyles().
  cleaned = cleaned.replace(/<!DOCTYPE[^>]*>/gi, '');
  cleaned = cleaned.replace(/<html[^>]*>/gi, '');
  cleaned = cleaned.replace(/<\/html>/gi, '');
  cleaned = cleaned.replace(/<head>[\s\S]*?<\/head>/gi, '');
  cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  cleaned = cleaned.replace(/<body[^>]*>/gi, '');
  cleaned = cleaned.replace(/<\/body>/gi, '');

  // Remove MS Office conditional comments
  cleaned = cleaned.replace(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/gi, '');
  cleaned = cleaned.replace(/<!--\[if[^\]]*\]>[\s\S]*?<!\[endif\]-->/gi, '');

  // Remove class attributes (Beehiiv doesn't use them without <style>)
  cleaned = cleaned.replace(/\s+class="[^"]*"/gi, '');

  // Remove role="presentation" attributes
  cleaned = cleaned.replace(/\s+role="presentation"/gi, '');

  // Replace linear-gradient backgrounds with solid colors
  cleaned = cleaned.replace(/background:\s*linear-gradient\([^)]*#C75B39[^)]*\)/gi, 'background-color: #C75B39');
  cleaned = cleaned.replace(/background:\s*linear-gradient\([^)]*#FEF3C7[^)]*\)/gi, 'background-color: #FEF3C7');
  cleaned = cleaned.replace(/background:\s*linear-gradient\([^)]*\)/gi, 'background-color: #F9FAFB');

  // Ensure bgcolor attribute on rust-colored <td>s so the header & CTA stay
  // visible even if email clients strip inline styles or Beehiiv re-serializes.
  // Without this, white H1/H2 text renders on the container's white background.
  cleaned = cleaned.replace(
    /<td([^>]*?)style="([^"]*background-color:\s*#C75B39[^"]*)"([^>]*)>/gi,
    (match, before, style, after) => {
      if (/bgcolor\s*=/i.test(before + after)) return match;
      return `<td${before}bgcolor="#C75B39" style="${style}"${after}>`;
    }
  );

  // Remove box-shadow (not well supported)
  cleaned = cleaned.replace(/box-shadow:[^;]+;/gi, '');

  // Clean up links with placeholder URLs (href containing brackets or placeholder text)
  cleaned = cleaned.replace(/<a[^>]*href=["'][^"']*\[[^\]]+\][^"']*["'][^>]*>([^<]*)<\/a>/gi, '$1');

  // Remove "More info →" links that point to placeholder URLs
  cleaned = cleaned.replace(/<a[^>]*href=["']#["'][^>]*>[^<]*<\/a>/gi, '');

  // Remove empty lines and trim
  cleaned = cleaned.replace(/^\s*[\r\n]/gm, '');
  cleaned = cleaned.trim();

  return cleaned;
}

// Section markers (in document order) used to attribute each internal link to
// the newsletter section it lives in, so GA4's utm_content tells us which
// section drove the click. Markers are the HTML comments the template/footer
// already carry; cleanHtmlForBeehiiv preserves generic comments.
const NEWSLETTER_SECTION_MARKERS: Array<{ marker: string; slug: string }> = [
  { marker: '<!-- CARD 1', slug: 'this-week-glance' },
  { marker: '<!-- CARD 2', slug: 'whats-on' },
  { marker: '<!-- CARD 3', slug: 'expat-toolkit' },
  { marker: '<!-- CARD 4', slug: 'go-deeper' },
  { marker: '<!-- COMUNIDAD', slug: 'comunidad' },
  { marker: '<!-- CALL TO ACTION', slug: 'cta' },
  { marker: '<!-- EXPLORE SAN LUIS WAY', slug: 'explore-grid' },
  { marker: '<!-- CLOSING', slug: 'footer' },
];

// Sets utm_content on a sanluisway.com URL without clobbering existing query
// params (e.g. /blog?category=food). Returns the URL untouched if unparseable.
function appendUtmContent(url: string, content: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('utm_content', content);
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * Tags every sanluisway.com link with utm_content = the section it lives in, so
 * GA4 can report which newsletter section drove each click.
 *
 * We deliberately set ONLY utm_content: Beehiiv already auto-appends
 * utm_source / utm_medium / utm_campaign (per-edition) to every link on send,
 * and it never sets utm_content. Setting only the missing dimension means our
 * tags compose with Beehiiv's instead of producing duplicate query keys — no
 * dashboard change required. External links (news sources, maps, ticketing) and
 * Beehiiv placeholders like [UNSUBSCRIBE_URL] are left untouched.
 * Pure/deterministic for unit testing.
 */
export function addUtmTracking(html: string): string {
  const boundaries = NEWSLETTER_SECTION_MARKERS
    .map(({ marker, slug }) => ({ pos: html.indexOf(marker), slug }))
    .filter((b) => b.pos !== -1)
    .sort((a, b) => a.pos - b.pos);

  const sectionForIndex = (idx: number): string => {
    let current = 'header';
    for (const b of boundaries) {
      if (b.pos <= idx) current = b.slug;
      else break;
    }
    return current;
  };

  const hrefRegex = /href=(["'])(https?:\/\/(?:www\.)?sanluisway\.com[^"']*)\1/gi;
  return html.replace(hrefRegex, (match, quote, url, offset) => {
    const section = sectionForIndex(offset as number);
    return `href=${quote}${appendUtmContent(url, section)}${quote}`;
  });
}

// Function to remove all images from HTML
export function removeAllImages(html: string): string {
  // Remove <img> tags completely
  let cleaned = html.replace(/<img[^>]*>/gi, '');

  // Remove empty image containers that might be left
  cleaned = cleaned.replace(/<div[^>]*>\s*<\/div>/gi, '');

  // Remove hero image placeholder rows if empty
  cleaned = cleaned.replace(/<tr>\s*<td[^>]*>\s*<\/td>\s*<\/tr>/gi, '');

  return cleaned;
}

// Function to inject the footer into generated HTML
export function injectFooterIntoNewsletter(html: string): string {
  // Try to find the placeholder first
  if (html.includes('<!-- CLOSING_FOOTER_PLACEHOLDER -->')) {
    return html.replace('<!-- CLOSING_FOOTER_PLACEHOLDER -->', CLOSING_AND_FOOTER_HTML);
  }

  // If no placeholder, inject before the closing </table> tags
  // Find the pattern: </table> followed by </td> </tr> </table> </body>
  const closingPattern = /<\/table>\s*<\/td>\s*<\/tr>\s*<\/table>\s*<\/body>/i;
  if (closingPattern.test(html)) {
    return html.replace(closingPattern, `${CLOSING_AND_FOOTER_HTML}\n        </table>\n      </td>\n    </tr>\n  </table>\n</body>`);
  }

  // Fallback: inject before </body>
  if (html.includes('</body>')) {
    return html.replace('</body>', `${CLOSING_AND_FOOTER_HTML}\n</body>`);
  }

  // Last resort: append at the end
  return html + CLOSING_AND_FOOTER_HTML;
}

// Builds an email-safe hero image row from a DB-hosted photo. Inline styles
// only (no <style> dependency); max-width keeps it responsive on mobile.
export function buildHeroImageHtml(photo: { image_url: string; title?: string | null }): string {
  const alt = (photo.title || 'San Luis Potosí').replace(/"/g, '&quot;');
  return `
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding: 4px 24px 12px 24px;">
              <img src="${photo.image_url}" alt="${alt}" width="552" style="width: 100%; max-width: 552px; height: auto; display: block; border-radius: 12px;" />
            </td>
          </tr>`;
}

// Injects the hero image directly above the first content card. No-op if the
// anchor isn't found so a missing card never drops content.
export function injectHeroImage(
  html: string,
  photo: { image_url: string; title?: string | null } | null
): string {
  if (!photo?.image_url || !html.includes('<!-- CARD 1')) return html;
  return html.replace('<!-- CARD 1', `${buildHeroImageHtml(photo).trim()}\n\n          <!-- CARD 1`);
}

// Injects the featured blog post's real image into the "From the Blog" card by
// matching the card's /blog/<slug> link back to the fetched posts. No-op if the
// post or its image_url can't be resolved — never injects an unverified URL.
export function injectFeaturedBlogImage(
  html: string,
  blogPosts: Array<{ slug: string; image_url?: string | null; title?: string | null; title_en?: string | null }>
): string {
  const anchorMatch = html.match(/href="[^"]*\/blog\/([a-z0-9-]+)[^"]*"[^>]*>\s*Read the Full Story/i);
  if (!anchorMatch) return html;
  const post = blogPosts.find((p) => p.slug === anchorMatch[1]);
  if (!post?.image_url) return html;
  const alt = (post.title_en || post.title || 'San Luis Way').replace(/"/g, '&quot;');
  const img = `<img src="${post.image_url}" alt="${alt}" width="520" style="width: 100%; max-width: 520px; height: auto; display: block; border-radius: 8px; margin: 0 0 12px 0;" />`;
  return html.replace(/(<span[^>]*>FEATURED<\/span>)/i, `${img}$1`);
}
