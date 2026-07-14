import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const TARGET = 1200; // Discover large-image-card min width

// 7 near-miss posts (>=878px) — upscaling to 1200px is near-lossless and
// preserves the real photo (authenticity over an AI fake).
const SLUGS = [
  'la-gran-via',
  'san-luis-rey-tranvia',
  'where-to-stay-san-luis-potosi-2026',
  'healthcare-san-luis-potosi-expats-2026',
  'fenapo-2026-boletos-precios-como-llegar',
  'leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism',
  'renting-in-san-luis-potosi-foreigner-2026',
];

const { data, error } = await s.from('blog_posts').select('slug, image_url').in('slug', SLUGS);
if (error) throw error;

for (const row of data) {
  const url = row.image_url;
  const isLocal = !url.startsWith('http');
  let buf;
  if (isLocal) {
    const local = path.join('public', url.replace(/^\//, ''));
    buf = fs.readFileSync(local);
  } else {
    const res = await fetch(url);
    if (!res.ok) { console.log(`  ✗ ${row.slug}: HTTP ${res.status}`); continue; }
    buf = Buffer.from(await res.arrayBuffer());
  }

  const meta = await sharp(buf).metadata();
  if ((meta.width || 0) >= TARGET) { console.log(`  = ${row.slug}: already ${meta.width}px`); continue; }

  const isPng = (meta.format === 'png');
  let pipe = sharp(buf).resize({ width: TARGET, kernel: 'lanczos3', withoutEnlargement: false });
  const out = isPng
    ? await pipe.png({ compressionLevel: 9, palette: true }).toBuffer()
    : await pipe.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const newMeta = await sharp(out).metadata();

  if (isLocal) {
    const local = path.join('public', url.replace(/^\//, ''));
    fs.writeFileSync(local, out);
    console.log(`  ✓ ${row.slug}: ${meta.width}px → ${newMeta.width}px (local ${url})`);
  } else {
    // Re-host on Supabase and repoint the DB (original was Supabase/Wix).
    const ext = isPng ? 'png' : 'jpg';
    const key = `posts/${row.slug}-1200.${ext}`;
    const up = await s.storage.from('blog-images').upload(key, out, {
      contentType: isPng ? 'image/png' : 'image/jpeg',
      upsert: true,
    });
    if (up.error) { console.log(`  ✗ ${row.slug}: upload ${up.error.message}`); continue; }
    const { data: pub } = s.storage.from('blog-images').getPublicUrl(key);
    const upd = await s.from('blog_posts').update({ image_url: pub.publicUrl }).eq('slug', row.slug);
    if (upd.error) { console.log(`  ✗ ${row.slug}: db ${upd.error.message}`); continue; }
    console.log(`  ✓ ${row.slug}: ${meta.width}px → ${newMeta.width}px (rehosted ${pub.publicUrl})`);
  }
}
console.log('Done.');
