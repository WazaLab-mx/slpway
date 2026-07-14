import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// CJK glyphs render ~2x width, so Japanese uses lower char caps for the same
// SERP pixel budget. Thresholds are per-locale.
const LOCALES = [
  { suf: '', titleMax: 60, dMin: 70, dMax: 160 },
  { suf: '_es', titleMax: 60, dMin: 70, dMax: 160 },
  { suf: '_de', titleMax: 60, dMin: 70, dMax: 160 },
  { suf: '_ja', titleMax: 40, dMin: 45, dMax: 95 },
];

const { data, error } = await s
  .from('blog_posts')
  .select('slug, status, title, meta_title, meta_description, meta_title_es, meta_description_es, meta_title_de, meta_description_de, meta_title_ja, meta_description_ja, title_es, title_de, title_ja')
  .eq('status', 'published');
if (error) throw error;

const problems = { missingTitle: [], longTitle: [], missingDesc: [], shortDesc: [], longDesc: [] };

for (const p of data) {
  for (const loc of LOCALES) {
    const mt = p[`meta_title${loc.suf}`];
    const md = p[`meta_description${loc.suf}`];
    const tag = `${p.slug}${loc.suf || '(en)'}`;
    if (mt && mt.length > loc.titleMax) problems.longTitle.push(`${tag} (${mt.length}) ${mt.slice(0, 65)}`);
    if (!md || !md.trim()) problems.missingDesc.push(tag);
    else {
      if (md.length < loc.dMin) problems.shortDesc.push(`${tag} (${md.length})`);
      if (md.length > loc.dMax) problems.longDesc.push(`${tag} (${md.length})`);
    }
  }
}

const show = (title, arr, cap = 60) => {
  console.log(`\n=== ${title}: ${arr.length} ===`);
  arr.slice(0, cap).forEach((x) => console.log('  ' + x));
  if (arr.length > cap) console.log(`  … +${arr.length - cap} more`);
};
console.log(`Published posts: ${data.length}  (×4 locales = ${data.length * 4} meta pairs)`);
show('meta_title over cap (60 latin / 40 ja) — SERP truncation', problems.longTitle);
show('meta_description MISSING (Google auto-generates)', problems.missingDesc);
show('meta_description too thin (<70 latin / <45 ja)', problems.shortDesc);
show('meta_description too long (>160 latin / >95 ja) — truncated', problems.longDesc);
