import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// --- Known valid targets -------------------------------------------------
// 1) published blog slugs
const { data: posts, error } = await s.from('blog_posts').select('slug, content, content_es, content_de, content_ja, status');
if (error) throw error;
const publishedSlugs = new Set(posts.filter((p) => p.status === 'published').map((p) => p.slug));

// 2) static page routes from src/pages (file-based)
function collectRoutes(dir, base = '') {
  const routes = new Set();
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) { for (const r of collectRoutes(p, `${base}/${name}`)) routes.add(r); continue; }
    if (!/\.(tsx|ts|jsx|js)$/.test(name)) continue;
    if (/\.(test|spec)\./.test(name)) continue;
    let route = `${base}/${name}`.replace(/\.(tsx|ts|jsx|js)$/, '');
    route = route.replace(/\/index$/, '') || '/';
    if (route.includes('/api/') || route.startsWith('/api')) continue;
    routes.add(route);
  }
  return routes;
}
const staticRoutes = collectRoutes('src/pages');
// dynamic route prefixes we can't enumerate statically (accept any child)
const dynamicPrefixes = [...staticRoutes].filter((r) => r.includes('[')).map((r) => r.split('[')[0].replace(/\/$/, ''));

// 3) redirect sources from next.config.js (so redirected links are not "broken")
const cfg = fs.readFileSync('next.config.js', 'utf8');
const redirectSources = [...cfg.matchAll(/source:\s*'([^']+)'/g)].map((m) => m[1]);
const redirectExact = new Set(redirectSources.filter((r) => !r.includes(':') && !r.includes('*')));

function isValid(pathname) {
  const clean = pathname.replace(/[#?].*$/, '').replace(/\/$/, '') || '/';
  const noLocale = clean.replace(/^\/(es|de|ja)(?=\/|$)/, '') || '/';
  if (staticRoutes.has(noLocale) || staticRoutes.has(clean)) return true;
  if (redirectExact.has(noLocale) || redirectExact.has(clean)) return true; // redirected → ok
  if (noLocale.startsWith('/blog/')) {
    const slug = noLocale.replace('/blog/', '').split('/')[0];
    if (noLocale.startsWith('/blog/factchecks/')) return true;
    return publishedSlugs.has(slug);
  }
  // dynamic sections (events, places, brands, category, etc.) — accept, can't verify offline cheaply
  for (const pre of dynamicPrefixes) if (pre && noLocale.startsWith(pre + '/')) return true;
  if (/^\/(events|places|brands|category|contact|listings|authors)\b/.test(noLocale)) return true;
  return false;
}

// --- Scan post bodies for internal links --------------------------------
const broken = new Map(); // pathname -> Set(slugs where found)
const linkRe = /href=["'](\/[^"'#][^"']*)["']/g;
for (const p of posts) {
  const body = [p.content, p.content_es, p.content_de, p.content_ja].filter(Boolean).join('\n');
  for (const m of body.matchAll(linkRe)) {
    const href = m[1];
    if (href.startsWith('/_next') || href.startsWith('/images') || href.startsWith('/api')) continue;
    if (!isValid(href)) {
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(p.slug);
    }
  }
}

console.log(`Published posts scanned: ${posts.length}`);
console.log(`Static routes: ${staticRoutes.size} | redirect sources: ${redirectSources.length}`);
console.log(`\nBroken internal links: ${broken.size}\n`);
for (const [href, slugs] of [...broken.entries()].sort()) {
  console.log(`  ${href}`);
  console.log(`      in: ${[...slugs].join(', ')}`);
}
