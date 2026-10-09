#!/usr/bin/env node
// Renders a deep-dive post in en/es/de/ja and upserts it into blog_posts.
// Usage: node scripts/blog-posts/publish.mjs <post-folder> [--publish]
//   default: saved as status 'draft' (hidden); --publish makes it live now.
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { createClient } from '@supabase/supabase-js';

const [folder, flag] = process.argv.slice(2);
if (!folder) throw new Error('Usage: publish.mjs <post-folder> [--publish]');
const dir = path.resolve('scripts/blog-posts', folder);
const { POST, render, HERO_IMAGE } = await import(pathToFileURL(path.join(dir, 'post.mjs')));
const { default: en } = await import(pathToFileURL(path.join(dir, 'content.en.mjs')));
const copy = { en };
for (const locale of ['es', 'de', 'ja']) {
  copy[locale] = JSON.parse(fs.readFileSync(path.join(dir, `content.${locale}.json`), 'utf8'));
}

const suffix = (locale) => (locale === 'en' ? '' : `_${locale}`);
const row = { slug: POST.slug, category: POST.category, tags: POST.tags, image_url: HERO_IMAGE };
for (const [locale, t] of Object.entries(copy)) {
  const s = suffix(locale);
  row[`content${s}`] = render(t);
  for (const field of ['title', 'excerpt', 'meta_title', 'meta_description', 'discover_title']) row[`${field}${s}`] = t.meta[field];
}
const publish = flag === '--publish';
row.status = publish ? 'published' : 'draft';
if (publish) row.published_at = new Date().toISOString();

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const { data, error } = await sb.from('blog_posts').upsert(row, { onConflict: 'slug' }).select('id,slug,status').single();
if (error) throw error;
console.log(`✓ ${data.slug} (${data.id}) saved as ${data.status}`);
