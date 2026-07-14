import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const { data, error } = await s
  .from('blog_posts')
  .select('slug, title, meta_title, meta_description, tags')
  .eq('status', 'published');
if (error) throw error;

const STOP = new Set(['the', 'a', 'an', 'to', 'in', 'of', 'for', 'and', 'or', 'your', 'you', 'is', 'on', 'with', 'de', 'la', 'el', 'en', 'los', 'las', 'un', 'una', 'y', 'san', 'luis', 'potosi', 'potosí', 'slp', '2026', 'guide', 'guia', 'guía']);
const tokens = (str) =>
  new Set(
    (str || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  );
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};

// 1) Exact-duplicate meta_title / meta_description
const byMetaTitle = new Map(), byMetaDesc = new Map();
for (const p of data) {
  const mt = (p.meta_title || '').trim().toLowerCase();
  const md = (p.meta_description || '').trim().toLowerCase();
  if (mt) { if (!byMetaTitle.has(mt)) byMetaTitle.set(mt, []); byMetaTitle.get(mt).push(p.slug); }
  if (md) { if (!byMetaDesc.has(md)) byMetaDesc.set(md, []); byMetaDesc.get(md).push(p.slug); }
}
console.log('=== Exact-duplicate meta_title ===');
let dupT = 0;
for (const [k, slugs] of byMetaTitle) if (slugs.length > 1) { dupT++; console.log(`  "${k}"\n      ${slugs.join(', ')}`); }
if (!dupT) console.log('  none');
console.log('\n=== Exact-duplicate meta_description ===');
let dupD = 0;
for (const [k, slugs] of byMetaDesc) if (slugs.length > 1) { dupD++; console.log(`  "${k.slice(0, 70)}..."\n      ${slugs.join(', ')}`); }
if (!dupD) console.log('  none');

// 2) High title-token overlap (keyword cannibalization candidates)
const THRESH = Number(process.argv[2] || 0.33);
const tk = data.map((p) => ({ slug: p.slug, t: tokens(`${p.title} ${p.meta_title || ''}`) }));
const scored = [];
for (let i = 0; i < tk.length; i++)
  for (let j = i + 1; j < tk.length; j++)
    scored.push({ a: tk[i].slug, b: tk[j].slug, sim: jaccard(tk[i].t, tk[j].t) });
scored.sort((x, y) => y.sim - x.sim);
console.log(`\n=== Title overlap (Jaccard >= ${THRESH}) ===`);
const flagged = scored.filter((p) => p.sim >= THRESH);
for (const p of flagged) console.log(`  ${p.sim.toFixed(2)}  ${p.a}  <->  ${p.b}`);
if (!flagged.length) console.log('  none');
console.log('\n=== Top 8 closest pairs (for context) ===');
for (const p of scored.slice(0, 8)) console.log(`  ${p.sim.toFixed(2)}  ${p.a}  <->  ${p.b}`);

// 3) Posts sharing a primary tag (topic-cluster cannibalization signal)
console.log('\n=== Tags shared by >=3 posts ===');
const byTag = new Map();
for (const p of data) for (const t of p.tags || []) {
  const k = t.toLowerCase().trim();
  if (!byTag.has(k)) byTag.set(k, []); byTag.get(k).push(p.slug);
}
const heavy = [...byTag.entries()].filter(([, v]) => v.length >= 3).sort((a, b) => b[1].length - a[1].length);
for (const [t, slugs] of heavy) console.log(`  ${slugs.length}  "${t}"  → ${slugs.slice(0, 6).join(', ')}${slugs.length > 6 ? ' …' : ''}`);
if (!heavy.length) console.log('  none');
console.log(`\nScanned ${data.length} published posts.`);
