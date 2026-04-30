import {
  LOCALES,
  DEFAULT_LOCALE,
  buildLocaleUrl,
  buildHreflangLinks,
} from './locale';
import { STATIC_ROUTES } from './static-routes';
import { expandLocaleEntries } from './index';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanluisway.com';

describe('locale URL helpers', () => {
  it('emits the default locale at the root path with no prefix', () => {
    expect(buildLocaleUrl('/about', 'en')).toBe(`${SITE}/about`);
    expect(buildLocaleUrl('/', 'en')).toBe(SITE);
  });

  it('prefixes non-default locales with /<locale>', () => {
    expect(buildLocaleUrl('/about', 'es')).toBe(`${SITE}/es/about`);
    expect(buildLocaleUrl('/about', 'de')).toBe(`${SITE}/de/about`);
    expect(buildLocaleUrl('/about', 'ja')).toBe(`${SITE}/ja/about`);
  });

  it('handles the root path correctly across all locales', () => {
    expect(buildLocaleUrl('/', 'es')).toBe(`${SITE}/es`);
    expect(buildLocaleUrl('/', 'ja')).toBe(`${SITE}/ja`);
  });

  it('strips trailing slashes from the path', () => {
    expect(buildLocaleUrl('/about/', 'en')).toBe(`${SITE}/about`);
    expect(buildLocaleUrl('/about/', 'es')).toBe(`${SITE}/es/about`);
  });
});

describe('buildHreflangLinks', () => {
  it('emits one link per supported locale plus x-default', () => {
    const links = buildHreflangLinks('/about');
    const langs = links.map((l) => l.hreflang);
    expect(langs).toEqual(['en', 'es', 'de', 'ja', 'x-default']);
  });

  it('points x-default at the default-locale URL', () => {
    const links = buildHreflangLinks('/about');
    const xDefault = links.find((l) => l.hreflang === 'x-default');
    const en = links.find((l) => l.hreflang === 'en');
    expect(xDefault?.href).toBe(en?.href);
  });

  it('matches the URL shape emitted by HreflangAlternates component', () => {
    const links = buildHreflangLinks('/blog');
    expect(links.find((l) => l.hreflang === 'es')?.href).toBe(`${SITE}/es/blog`);
    expect(links.find((l) => l.hreflang === 'en')?.href).toBe(`${SITE}/blog`);
  });
});

describe('STATIC_ROUTES', () => {
  it('includes the homepage with priority 1.0', () => {
    const home = STATIC_ROUTES.find((r) => r.path === '/');
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1.0);
  });

  it('includes all 16 curated category landing pages', () => {
    const categories = STATIC_ROUTES.filter((r) => r.path.startsWith('/category/'));
    expect(categories).toHaveLength(16);
    expect(categories.map((c) => c.path)).toEqual(
      expect.arrayContaining([
        '/category/cantinas',
        '/category/cocktail-bars',
        '/category/family-activities',
        '/category/remote-work-cafes',
        '/category/sports-fitness',
      ]),
    );
  });

  it('includes all 10 san-luis-potosi service hub pages', () => {
    const services = STATIC_ROUTES.filter((r) => r.path.startsWith('/san-luis-potosi-'));
    expect(services).toHaveLength(10);
    expect(services.map((s) => s.path)).toEqual(
      expect.arrayContaining([
        '/san-luis-potosi-community-integration',
        '/san-luis-potosi-cultural-services',
        '/san-luis-potosi-relocation-support',
      ]),
    );
  });

  it('does not include any path that should be noIndex or 301-redirected', () => {
    const paths = STATIC_ROUTES.map((r) => r.path);
    // These are noindexed (utility/WIP/past events) or 301'd elsewhere.
    const forbidden = [
      '/agent-connect',
      '/cli',
      '/mcp',
      '/sitemap',
      '/spouse-hub',
      '/listings',
      '/expat-guide',
      '/living-guide',
      '/events/fenapo-2025',
      '/events/xantolo-2025',
      '/events/san-luis-en-primavera-2025',
    ];
    for (const path of forbidden) {
      expect(paths).not.toContain(path);
    }
  });

  it('every path starts with a leading slash and has no trailing slash', () => {
    for (const route of STATIC_ROUTES) {
      expect(route.path.startsWith('/')).toBe(true);
      // Root is the only path that ends in /
      if (route.path !== '/') expect(route.path.endsWith('/')).toBe(false);
    }
  });
});

describe('expandLocaleEntries', () => {
  it('emits one <url> entry per locale (4× expansion)', () => {
    const result = expandLocaleEntries([
      { path: '/about', lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
    ]);
    expect(result).toHaveLength(LOCALES.length);
  });

  it('each entry contains the canonical <loc> for its locale', () => {
    const result = expandLocaleEntries([
      { path: '/about', lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
    ]);
    expect(result[0]).toContain(`<loc>${SITE}/about</loc>`); // en
    expect(result[1]).toContain(`<loc>${SITE}/es/about</loc>`);
    expect(result[2]).toContain(`<loc>${SITE}/de/about</loc>`);
    expect(result[3]).toContain(`<loc>${SITE}/ja/about</loc>`);
  });

  it('every emitted entry advertises the full hreflang cluster', () => {
    const [enEntry, esEntry] = expandLocaleEntries([
      { path: '/about', lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
    ]);
    for (const entry of [enEntry, esEntry]) {
      expect(entry).toContain('hreflang="en"');
      expect(entry).toContain('hreflang="es"');
      expect(entry).toContain('hreflang="de"');
      expect(entry).toContain('hreflang="ja"');
      expect(entry).toContain('hreflang="x-default"');
    }
  });

  it('escapes XML-special characters in the <loc>', () => {
    const result = expandLocaleEntries([
      { path: "/foo&bar", lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.5 },
    ]);
    expect(result[0]).toContain('&amp;bar');
  });

  it('expands an N-entry list into 4N entries', () => {
    const entries = STATIC_ROUTES.slice(0, 5).map((r) => ({
      ...r,
      lastmod: '2026-04-30',
    }));
    const xml = expandLocaleEntries(entries);
    expect(xml).toHaveLength(5 * LOCALES.length);
  });
});

describe('default locale', () => {
  it('is en — matches HreflangAlternates and SEO components', () => {
    expect(DEFAULT_LOCALE).toBe('en');
  });
});

describe('buildSitemapXml integration', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock('./dynamic', () => ({
      fetchBlogUrls: jest.fn().mockResolvedValue([
        { path: '/blog/test-post', lastmod: '2026-04-29', changefreq: 'monthly', priority: 0.7 },
      ]),
      fetchPlaceUrls: jest.fn().mockResolvedValue([]),
      fetchEventUrls: jest.fn().mockResolvedValue([]),
      fetchBrandUrls: jest.fn().mockResolvedValue([]),
      fetchFactcheckUrls: jest.fn().mockReturnValue([]),
    }));
  });

  it('declares the xhtml namespace on <urlset>', async () => {
    const { buildSitemapXml } = await import('./index');
    const xml = await buildSitemapXml();
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
  });

  it('includes blog URLs from the dynamic fetcher across all locales', async () => {
    const { buildSitemapXml } = await import('./index');
    const xml = await buildSitemapXml();
    expect(xml).toContain(`<loc>${SITE}/blog/test-post</loc>`);
    expect(xml).toContain(`<loc>${SITE}/es/blog/test-post</loc>`);
    expect(xml).toContain(`<loc>${SITE}/de/blog/test-post</loc>`);
    expect(xml).toContain(`<loc>${SITE}/ja/blog/test-post</loc>`);
  });

  it('includes the curated category landing pages', async () => {
    const { buildSitemapXml } = await import('./index');
    const xml = await buildSitemapXml();
    expect(xml).toContain(`<loc>${SITE}/category/cantinas</loc>`);
    expect(xml).toContain(`<loc>${SITE}/es/category/cantinas</loc>`);
  });

  it('renders well-formed XML with closing </urlset>', async () => {
    const { buildSitemapXml } = await import('./index');
    const xml = await buildSitemapXml();
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('</urlset>');
  });
});
