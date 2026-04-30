import { STATIC_ROUTES } from './static-routes';
import {
  fetchBlogUrls,
  fetchPlaceUrls,
  fetchEventUrls,
  fetchBrandUrls,
  fetchFactcheckUrls,
} from './dynamic';
import {
  LOCALES,
  buildLocaleUrl,
  buildHreflangLinks,
  type SitemapEntry,
  type Locale,
} from './locale';

const TODAY = () => new Date().toISOString().split('T')[0];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Render a single <url> entry. Each entry includes the full hreflang
 * cluster (en/es/de/ja + x-default) so Google can group locale variants.
 * The xhtml namespace must be declared on the root <urlset>.
 */
function renderUrlEntry(entry: SitemapEntry, locale: Locale): string {
  const loc = buildLocaleUrl(entry.path, locale);
  const hreflang = buildHreflangLinks(entry.path)
    .map(
      (link) =>
        `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${escapeXml(link.href)}"/>`,
    )
    .join('\n');
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
${hreflang}
  </url>`;
}

/**
 * Expand each base entry into one <url> per locale. The hreflang cluster
 * is identical across all 4 emitted entries — Google needs to see the
 * cluster on each variant to confirm bidirectional alternates.
 */
export function expandLocaleEntries(entries: SitemapEntry[]): string[] {
  const xml: string[] = [];
  for (const entry of entries) {
    for (const locale of LOCALES) {
      xml.push(renderUrlEntry(entry, locale));
    }
  }
  return xml;
}

/**
 * Build the full sitemap XML by merging static routes with the four
 * Supabase-backed dynamic sets. Failures in any one fetcher are isolated
 * so a transient query error never blanks the whole sitemap.
 */
export async function buildSitemapXml(): Promise<string> {
  const today = TODAY();
  const staticEntries: SitemapEntry[] = STATIC_ROUTES.map((r) => ({ ...r, lastmod: today }));

  const [blog, places, events, brands] = await Promise.all([
    fetchBlogUrls().catch(() => []),
    fetchPlaceUrls().catch(() => []),
    fetchEventUrls().catch(() => []),
    fetchBrandUrls().catch(() => []),
  ]);

  const factchecks = fetchFactcheckUrls();
  const all = [...staticEntries, ...blog, ...places, ...events, ...brands, ...factchecks];
  const body = expandLocaleEntries(all).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`;
}

// Re-export for tests and consumers that build their own pipelines.
export { STATIC_ROUTES, LOCALES };
export type { SitemapEntry, Locale };
