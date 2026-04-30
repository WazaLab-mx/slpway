/**
 * Locale-aware URL helpers for sitemap generation. Mirrors the URL shape
 * emitted by HreflangAlternates (src/components/common/HreflangAlternates.tsx)
 * and the SEO component:
 *   - default locale (en) lives at the root path
 *   - es/de/ja live under /<locale>{path}
 */

export const LOCALES = ['en', 'es', 'de', 'ja'] as const;
export const DEFAULT_LOCALE = 'en';
export type Locale = typeof LOCALES[number];

export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SitemapEntry {
  /** Path with leading slash, no host, no locale prefix (e.g. "/about") */
  path: string;
  lastmod: string;
  changefreq: ChangeFreq;
  priority: number;
}

export interface HreflangLink {
  hreflang: string;
  href: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanluisway.com';

export function siteUrl(): string {
  return SITE_URL;
}

/** Build the absolute URL for a given path + locale. */
export function buildLocaleUrl(path: string, locale: Locale): string {
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) {
    return cleanPath ? `${SITE_URL}${cleanPath}` : SITE_URL;
  }
  return cleanPath ? `${SITE_URL}/${locale}${cleanPath}` : `${SITE_URL}/${locale}`;
}

/**
 * Build the hreflang block for a given path. Used inside each <url> entry
 * so Google can cluster the locale variants. Returns hreflang for every
 * supported locale plus x-default pointing at the default locale URL.
 */
export function buildHreflangLinks(path: string): HreflangLink[] {
  const links: HreflangLink[] = LOCALES.map((locale) => ({
    hreflang: locale,
    href: buildLocaleUrl(path, locale),
  }));
  links.push({ hreflang: 'x-default', href: buildLocaleUrl(path, DEFAULT_LOCALE) });
  return links;
}
