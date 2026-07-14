import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const ROOT = 'public';
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif']);

// 1) All image files under public/ (path relative to public, forward slashes)
function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (exts.has(path.extname(p).toLowerCase())) acc.push({ abs: p, size: st.size, rel: '/' + path.relative(ROOT, p).replace(/\\/g, '/') });
  }
  return acc;
}
const files = walk(ROOT);

// 2) Haystack: all source text + all DB text that could reference an image.
let haystack = '';
function readAllSource(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) { if (name !== 'node_modules' && name !== '.next') readAllSource(p); }
    else if (/\.(tsx?|jsx?|json|md|mdx|css)$/.test(name)) haystack += fs.readFileSync(p, 'utf8');
  }
}
readAllSource('src');
readAllSource('public/locales');
for (const f of ['next-sitemap.config.js', 'next.config.js']) if (fs.existsSync(f)) haystack += fs.readFileSync(f, 'utf8');

// DB text columns that hold image URLs or HTML/markdown with <img>/paths
const dbSources = [
  ['blog_posts', 'image_url, content, content_es, content_de, content_ja, excerpt'],
  ['events', 'image_url, description'],
  ['places', 'image_url'],
  ['brands', 'image_url'],
];
for (const [table, cols] of dbSources) {
  const { data, error } = await s.from(table).select(cols);
  if (error) { console.warn(`skip ${table}: ${error.message}`); continue; }
  for (const row of data) haystack += Object.values(row).filter(Boolean).join('\n');
}

// 3) An image is "used" if its basename OR its /rel path appears in the haystack.
const orphans = [];
for (const f of files) {
  const base = path.basename(f.rel);
  if (haystack.includes(f.rel) || haystack.includes(base)) continue;
  orphans.push(f);
}
orphans.sort((a, b) => b.size - a.size);

const totalOrphan = orphans.reduce((n, f) => n + f.size, 0);
const totalAll = files.reduce((n, f) => n + f.size, 0);
console.log(`public/ images: ${files.length} files, ${(totalAll / 1048576).toFixed(1)} MB`);
console.log(`Orphans (not referenced in src or DB): ${orphans.length} files, ${(totalOrphan / 1048576).toFixed(1)} MB\n`);
for (const f of orphans.slice(0, 40)) console.log(`  ${(f.size / 1024).toFixed(0).padStart(6)}KB  ${f.rel}`);
if (orphans.length > 40) console.log(`  ... and ${orphans.length - 40} more`);
