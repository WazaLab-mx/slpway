/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Image optimization enabled (was previously disabled with unoptimized: true
    // which was a temporary workaround for 400 errors on remote hosts not listed
    // in remotePatterns; remotePatterns is now correctly configured below).
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'assets.seobotai.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Google Places photos rotate across lhN subdomains (lh3, lh5, ...).
      // Only lh3 was allowed, so next/image threw for lh5-hosted rows and
      // the /places ISR regeneration failed with a 500.
      { protocol: 'https', hostname: '*.googleusercontent.com' },
      { protocol: 'https', hostname: 'sanluisway.com' },
      { protocol: 'https', hostname: 'www.sanluisway.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  trailingSlash: false,
  // Enable more detailed output during builds
  onDemandEntries: {
    // Keep pages in memory for longer during development
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },
  // Function to customize webpack configuration for more detailed logging
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Add more detailed logs in development
      config.infrastructureLogging = {
        level: 'verbose',
      };
    }
    if (!isServer) {
      // Added fallbacks for Node.js API polyfills
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false
      };
    }
    // Add explicit ignore for test files and directories
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\/__tests__\/.*|\.(spec|test)\.[tj]sx?$/,
      loader: 'ignore-loader',
    });
    return config;
  },
  // Modern Next.js config optimized for Node.js 18+
  compiler: {
    // styledComponents removed — project uses Tailwind CSS only
  },
  // Exclude test files from pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !ext.includes('test.')),
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.facebook.com https://*.facebook.net https://api.resend.com https://*.clarity.ms https://www.google.com https://www.google.com.mx https://www.googleadservices.com https://googleads.g.doubleclick.net https://ad.doubleclick.net https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://*.googletagmanager.com https://*.google-analytics.com https://www.google.com https://www.gstatic.com https://*.facebook.net https://www.clarity.ms https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://googleads.g.doubleclick.net https://securepubads.g.doubleclick.net https://www.googletagservices.com https://fundingchoicesmessages.google.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' https: data: blob:",
              "font-src 'self' https://fonts.gstatic.com data:",
              "frame-src 'self' https://*.google.com https://*.google.com.mx https://*.doubleclick.net https://*.facebook.com https://*.facebook.net https://www.googletagmanager.com https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com https://www.youtube.com https://www.youtube-nocookie.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=(self)'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/living-guide',
        destination: '/resources/living-guide',
        permanent: true,
      },
      {
        source: '/expat-guide',
        destination: '/resources/expat-guide',
        permanent: true,
      },
      // /events now renders its own page — no redirect. If you need to
      // change this, also delete src/pages/events/index.tsx so next.config
      // rules take precedence again.
      {
        // FENAPO post pivoted from "cartel y guía completa" to preparation
        // focus on 2026-04-18. Safety net for any early external links.
        source: '/blog/fenapo-2026-cartel-guia-completa',
        destination: '/blog/fenapo-2026-guia-preparacion',
        permanent: true,
      },
      {
        // 2025 cost-of-living guide superseded by the 2026 edition. Redirect
        // consolidates ranking signal onto the current, fully-localized post.
        source: '/blog/cost-of-living-san-luis-potosi-2025',
        destination: '/blog/cost-of-living-san-luis-potosi-2026',
        permanent: true,
      },
      {
        // 2025 rental guide superseded by the 2026 foreigner renting guide.
        source: '/blog/guia-completa-rentar-casa-san-luis-potosi-2025',
        destination: '/blog/renting-in-san-luis-potosi-foreigner-2026',
        permanent: true,
      },
      // /listings is temporarily disabled (the page client-redirects to /).
      // Surface that as a true 301 so Google deindexes it cleanly instead
      // of treating the soft-redirect page as a duplicate.
      {
        source: '/listings',
        destination: '/',
        permanent: true,
      },
      // Metal Fest happened May 16-17, 2026. Page was removed and the slot
      // reused for Cara Sucia Country Fest. Redirect preserves SEO equity
      // and prevents 404s from existing blog posts that still link out.
      {
        source: '/events/san-luis-metal-fest-2026',
        destination: '/events/cara-sucia-country-fest-2026',
        permanent: true,
      },
      // 2025 event pages expired — pass their equity to the current editions.
      {
        source: '/events/fenapo-2025',
        destination: '/events/fenapo-2026',
        permanent: true,
      },
      {
        source: '/events/san-luis-en-primavera-2025',
        destination: '/festival-primavera-2026',
        permanent: true,
      },
      // Xantolo 2026 page should be created in October (event is Nov 1-2);
      // until then the festivals overview is the closest evergreen target.
      {
        source: '/events/xantolo-2025',
        destination: '/cultural/festivals',
        permanent: true,
      },
      // UUID event pages with real GSC equity → curated human-slug pages
      // (2026-07 SEO audit). The regex catches both the raw uuid URL
      // (/events/culinary/c119d963-...) and the slugified variant that ends
      // with the 8-hex uuid prefix (/events/culinary/feria-...-c119d963).
      // Next.js applies these to every locale (/es, /de, /ja) automatically.
      {
        // Feria Nacional de la Enchilada (event row deleted from DB;
        // full uuid c119d963-767f-48ec-bf57-bc7bb5e5b640 per GSC).
        source: '/events/culinary/:slug(.*c119d963.*)',
        destination: '/events/feria-de-la-enchilada-2026',
        permanent: true,
      },
      {
        // Copa Potosí 2026 (event row deleted from DB;
        // full uuid 047fcef9-d422-46e1-af57-f029c08144ce per GSC).
        source: '/events/sports/:slug(.*047fcef9.*)',
        destination: '/events/copa-potosi-2026',
        permanent: true,
      },
      {
        // Medio Maratón UASLP 2026 (row 395181a0-ee04-40a4-9895-c5da87f4c039
        // still exists in Supabase; the curated page supersedes it).
        source: '/events/sports/:slug(.*395181a0.*)',
        destination: '/events/medio-maraton-uaslp-2026',
        permanent: true,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  // Temporarily disable experimental features
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  // This will tell Next.js to ignore specific paths during build
  excludeDefaultMomentLocales: true,
  poweredByHeader: false,
};

// Add performance polyfill to fix Node.js compatibility issue (only for older Node.js)
if (typeof process !== 'undefined' && !process.env.NEXT_RUNTIME) {
  const nodeVersionMatch = process.version.match(/^v(\d+)\./);
  const majorNodeVersion = nodeVersionMatch ? parseInt(nodeVersionMatch[1], 10) : 0;

  // Only add polyfill for Node.js < 16
  if (majorNodeVersion < 16 && !global.performance) {
    console.warn(`Warning: Using older Node.js ${process.version}. Adding performance API polyfill.`);
    // If performance is not available, create a polyfill
    global.performance = {
      mark: () => {},
      measure: () => {},
      getEntriesByName: () => [],
      getEntriesByType: () => [],
      clearMarks: () => {},
      clearMeasures: () => {},
      now: () => Date.now(),
    };
  }
}

module.exports = nextConfig;