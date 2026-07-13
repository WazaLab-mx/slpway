// Known-good fallback URLs for broken/unverified links
const FALLBACK_URL = 'https://www.sanluisway.com/events';

// Allowed external domains (links to these are kept even if we can't HEAD-check them).
// Keep this in sync with the news / ticket / gov sources the AI prompt instructs
// Gemini to cite — otherwise the validator silently swaps legitimate citations
// for FALLBACK_URL and reads like we made the quotes up.
const ALLOWED_EXTERNAL_DOMAINS = [
  // Social + maps
  'facebook.com',
  'instagram.com',
  'twitter.com',
  'x.com',
  'tiktok.com',
  'youtube.com',
  'youtu.be',
  'google.com',
  'maps.google.com',
  'maps.app.goo.gl',
  'goo.gl',
  'wa.me',

  // Ticketing
  'ticketmaster.com.mx',
  'superboletos.com',
  'eventbrite.com',
  'eventbrite.com.mx',
  'boletia.com',

  // Local news sources cited in the AI prompt
  'elsoldesanluis.com.mx',
  'pulsoslp.com.mx',
  'codigosanluis.com',
  'planoinformativo.com',
  'lajornadasanluis.com.mx',
  'quadratin.com.mx',
  'elexpres.com',
  'elheraldoslp.com.mx',
  'elmanana.com.mx',

  // Government + institutional
  'slp.gob.mx',
  'sanluis.gob.mx',
  'gob.mx',
  'inegi.org.mx',
  'visitmexico.com',
  'visitsanluispotosi.com',
  'uaslp.mx',

  // Airlines / transport referenced for expat advice
  'aeromexico.com',
  'volaris.com',
  'vivaaerobus.com',
  'aa.com',

  // Banks / SAT often referenced in Ask an Expat
  'sat.gob.mx',
  'condusef.gob.mx',
];

// Template placeholders that are legitimate and should be skipped by the validator.
// These are replaced later in the pipeline (e.g., by Beehiiv for unsubscribe/preferences).
const LEGITIMATE_PLACEHOLDERS = new Set([
  '[UNSUBSCRIBE_URL]',
  '[PREFERENCES_URL]',
]);

// Substrings that mark a URL as an unfilled placeholder or obvious dummy.
// Used only when the href is NOT in LEGITIMATE_PLACEHOLDERS.
const PLACEHOLDER_SUBSTRINGS = ['example.com', 'placeholder', 'test.com', 'your-site', 'yoursite'];

function looksLikePlaceholder(url: string): boolean {
  if (LEGITIMATE_PLACEHOLDERS.has(url)) return false;
  if (/\[[^\]]+\]/.test(url)) return true;
  const lowered = url.toLowerCase();
  return PLACEHOLDER_SUBSTRINGS.some((p) => lowered.includes(p));
}

function isDomainAllowed(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return ALLOWED_EXTERNAL_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
}

/**
 * Verifies a single sanluisway.com URL by issuing a HEAD request.
 * Follows redirects (a 200 after redirect is still considered valid).
 * Times out after 5 seconds to avoid hanging the newsletter build.
 */
async function isSanluiswayUrlValid(url: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const resp = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return resp.ok;
  } catch {
    return false;
  }
}

/**
 * Statically cleans placeholder/suspicious URLs. Synchronous pass used for
 * obvious pattern-based cleanup before we call the async validator.
 */
function staticallyCleanUrls(html: string): string {
  const hrefRegex = /href=["']([^"']+)["']/gi;
  return html.replace(hrefRegex, (match, url) => {
    // Allow anchor links and mailto
    if (url.startsWith('#') || url.startsWith('mailto:')) {
      return match;
    }

    // Allow legitimate template placeholders (Beehiiv replaces these later)
    if (LEGITIMATE_PLACEHOLDERS.has(url)) {
      return match;
    }

    // Catch unfilled placeholders and obvious dummies (e.g. [LINK_1], example.com)
    if (looksLikePlaceholder(url)) {
      return `href="${FALLBACK_URL}"`;
    }

    // Allow sanluisway.com URLs (the async validator will HEAD-check these)
    if (url.includes('sanluisway.com')) {
      return match;
    }

    if (isDomainAllowed(url)) {
      return match;
    }

    // Unknown external domain - replace with fallback
    return `href="${FALLBACK_URL}"`;
  });
}

export interface LinkValidationResult {
  html: string;
  brokenLinks: string[];
  totalSanluiswayLinks: number;
}

/**
 * Asynchronously verifies every sanluisway.com link in the HTML by issuing
 * HEAD requests. Any link that returns non-2xx is replaced with FALLBACK_URL.
 * Deduplicates URLs so we don't check the same one twice.
 */
async function verifySanluiswayLinks(html: string): Promise<LinkValidationResult> {
  const hrefRegex = /href=["'](https?:\/\/(?:www\.)?sanluisway\.com[^"']*)["']/gi;
  const urlsInHtml = new Set<string>();
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    urlsInHtml.add(match[1]);
  }

  if (urlsInHtml.size === 0) {
    return { html, brokenLinks: [], totalSanluiswayLinks: 0 };
  }

  const uniqueUrls = Array.from(urlsInHtml);
  console.log(`   🔍 Verifying ${uniqueUrls.length} sanluisway.com link(s)...`);

  const results = await Promise.all(
    uniqueUrls.map(async (url) => ({ url, valid: await isSanluiswayUrlValid(url) }))
  );

  const brokenUrls = results.filter((r) => !r.valid).map((r) => r.url);
  if (brokenUrls.length === 0) {
    console.log('   ✅ All sanluisway.com links verified (200 OK)');
    return { html, brokenLinks: [], totalSanluiswayLinks: uniqueUrls.length };
  }

  console.warn(`   ⚠️ Found ${brokenUrls.length} broken link(s), replacing with fallback:`);
  brokenUrls.forEach((u) => console.warn(`      - ${u} → ${FALLBACK_URL}`));

  let cleaned = html;
  for (const brokenUrl of brokenUrls) {
    // Replace only the href="..." occurrences, preserve the rest of the HTML
    const escaped = brokenUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const replaceRegex = new RegExp(`href=["']${escaped}["']`, 'gi');
    cleaned = cleaned.replace(replaceRegex, `href="${FALLBACK_URL}"`);
  }

  return { html: cleaned, brokenLinks: brokenUrls, totalSanluiswayLinks: uniqueUrls.length };
}

/**
 * Full URL validation pipeline: static cleanup followed by async HEAD
 * verification of all remaining sanluisway.com links. Returns the cleaned
 * HTML plus diagnostic info (broken links that were replaced).
 */
export async function validateAndCleanUrls(html: string): Promise<LinkValidationResult> {
  const staticPass = staticallyCleanUrls(html);
  return verifySanluiswayLinks(staticPass);
}
