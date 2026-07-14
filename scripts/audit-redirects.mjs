import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Parse redirects from next.config.js (source/destination pairs).
const cfg = fs.readFileSync('next.config.js', 'utf8');
const redirects = [];
const re = /source:\s*'([^']+)'[\s\S]*?destination:\s*'([^']+)'/g;
let m;
while ((m = re.exec(cfg))) redirects.push({ source: m[1], destination: m[2] });

// Build the set of valid targets (static routes + published blog slugs + redirect sources).
function collectRoutes(dir, base = '') {
  const routes = new Set();
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) { for (const r of collectRoutes(p, `${base}/${name}`)) routes.add(r); continue; }
    if (!/\.(tsx|ts|jsx|js)$/.test(name) || /\.(test|spec)\./.test(name)) continue;
    let route = `${base}/${name}`.replace(/\.(tsx|ts|jsx|js)$/, '').replace(/\/index$/, '') || '/';
    if (!route.startsWith('/api')) routes.add(route);
  }
  return routes;
}
const staticRoutes = collectRoutes('src/pages');
const dynPrefixes = [...staticRoutes].filter((r) => r.includes('[')).map((r) => r.split('/[')[0]);
const { data: posts } = await s.from('blog_posts').select('slug, status').eq('status', 'published');
const publishedSlugs = new Set(posts.map((p) => p.slug));
const sources = new Set(redirects.map((r) => r.source));

const normalize = (u) => u.replace(/[#?].*$/, '').replace(/\/$/, '') || '/';
function targetExists(dest) {
  const d = normalize(dest);
  if (staticRoutes.has(d)) return true;
  if (d.startsWith('/blog/')) {
    if (d.startsWith('/blog/factchecks/')) return true;
    return publishedSlugs.has(d.replace('/blog/', '').split('/')[0]);
  }
  for (const pre of dynPrefixes) if (pre && d.startsWith(pre + '/')) return true;
  if (/^\/(events|places|brands|category|authors|festival-primavera-2026)/.test(d)) return true;
  return false;
}

console.log(`Parsed ${redirects.length} redirects.\n`);

// 1) Chains: a destination that is itself a redirect source (exact or pattern-free).
console.log('=== Chains (destination is also a source → double hop) ===');
let chains = 0;
for (const r of redirects) {
  const dn = normalize(r.destination);
  const hit = [...sources].find((src) => !src.includes(':') && !src.includes('*') && normalize(src) === dn);
  if (hit) { chains++; console.log(`  ${r.source} → ${r.destination} → (redirects again: ${hit})`); }
}
if (!chains) console.log('  none');

// 2) Loops: source === destination.
console.log('\n=== Loops (source === destination) ===');
let loops = 0;
for (const r of redirects) if (normalize(r.source) === normalize(r.destination)) { loops++; console.log(`  ${r.source}`); }
if (!loops) console.log('  none');

// 3) Dead destinations.
console.log('\n=== Dead destinations (404 targets) ===');
let dead = 0;
for (const r of redirects) if (!r.destination.includes(':') && !targetExists(r.destination)) { dead++; console.log(`  ${r.source} → ${r.destination}`); }
if (!dead) console.log('  none');

console.log(`\nSummary: ${chains} chains, ${loops} loops, ${dead} dead. ${redirects.length} total.`);
