import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const MIN = 1200; // Google Discover large-image-card hard requirement (width px)

const { data, error } = await s
  .from('blog_posts')
  .select('slug, image_url, title')
  .eq('status', 'published');
if (error) throw error;

const SITE = 'https://www.sanluisway.com';
function absolutize(u) {
  if (!u) return null;
  if (u.startsWith('http')) return u;
  return SITE + (u.startsWith('/') ? u : '/' + u);
}

const results = [];
let i = 0;
for (const row of data) {
  i++;
  const raw = row.image_url;
  if (!raw) { results.push({ slug: row.slug, url: null, w: 0, note: 'NO image_url' }); continue; }
  try {
    let buf;
    if (!raw.startsWith('http')) {
      // Relative path -> read from local public/ (the live site may be down).
      const local = path.join('public', raw.replace(/^\//, ''));
      if (!fs.existsSync(local)) { results.push({ slug: row.slug, url: raw, w: 0, note: 'LOCAL MISSING' }); continue; }
      buf = fs.readFileSync(local);
    } else {
      const res = await fetch(raw);
      if (!res.ok) { results.push({ slug: row.slug, url: raw, w: 0, note: `HTTP ${res.status}` }); continue; }
      buf = Buffer.from(await res.arrayBuffer());
    }
    const meta = await sharp(buf).metadata();
    results.push({ slug: row.slug, url: raw, w: meta.width || 0, h: meta.height || 0, note: '' });
  } catch (e) {
    results.push({ slug: row.slug, url: raw, w: 0, note: 'ERR ' + e.message.slice(0, 40) });
  }
  if (i % 10 === 0) console.error(`  ...${i}/${data.length}`);
}

const fail = results.filter((r) => r.w < MIN);
const ok = results.filter((r) => r.w >= MIN);
console.log(`\nPublished posts: ${results.length}`);
console.log(`OK (>= ${MIN}px wide): ${ok.length}`);
console.log(`FAIL (< ${MIN}px — no Discover large image): ${fail.length}\n`);
for (const r of fail.sort((a, b) => a.w - b.w)) {
  console.log(`  ${String(r.w).padStart(4)}px  ${r.slug}${r.note ? '  [' + r.note + ']' : ''}`);
}
