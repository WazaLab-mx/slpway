import 'dotenv/config';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Per-language targets. CJK glyphs render ~2x width, so Japanese uses lower
// character caps to hit the same SERP pixel budget.
const LOCALES = [
  { suf: '', lang: 'English', title: 60, dMin: 140, dMax: 158 },
  { suf: '_es', lang: 'Spanish', title: 60, dMin: 140, dMax: 158 },
  { suf: '_de', lang: 'German', title: 60, dMin: 140, dMax: 158 },
  { suf: '_ja', lang: 'Japanese', title: 38, dMin: 70, dMax: 90 },
];

const ONLY = process.argv[2]; // optional single slug for testing

let q = s.from('blog_posts')
  .select('id, slug, status, title, meta_title, meta_description, excerpt, title_es, meta_title_es, meta_description_es, excerpt_es, title_de, meta_title_de, meta_description_de, excerpt_de, title_ja, meta_title_ja, meta_description_ja, excerpt_ja')
  .eq('status', 'published');
if (ONLY) q = q.eq('slug', ONLY);
const { data, error } = await q;
if (error) throw error;

async function gen(loc, src, strict) {
  const res = await openai.responses.create({
    model: 'gpt-5.4',
    instructions:
      `You rewrite SEO meta tags in ${loc.lang}. Rewrite the given title and description into: ` +
      `meta_title (<= ${loc.title} characters, front-load the primary keyword, no site name suffix) and ` +
      `meta_description (${loc.dMin}-${loc.dMax} characters, compelling, active voice, ends with a clear value). ` +
      `Write natively in ${loc.lang}. PRESERVE all facts, place names, years, and prices — do NOT invent anything new. ` +
      (strict ? `HARD LIMITS: meta_title MUST be <= ${loc.title} chars, meta_description MUST be <= ${loc.dMax} chars. Count carefully. ` : '') +
      `Return ONLY JSON: {"meta_title":"...","meta_description":"..."}`,
    input: `TITLE: ${src.title}\nCURRENT META TITLE: ${src.mt || '(none)'}\nCURRENT META DESC: ${src.md || '(none)'}\nEXCERPT: ${(src.ex || '').slice(0, 400)}`,
    max_output_tokens: 400,
  });
  let t = (res.output_text || '').trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
  const m = t.match(/\{[\s\S]*\}/);
  return JSON.parse(m ? m[0] : t);
}

const clampTitle = (str, max) => (str.length <= max ? str : str.slice(0, max + 1).replace(/\s+\S*$/, '').trim());

let done = 0;
for (const post of data) {
  const update = {};
  for (const loc of LOCALES) {
    const src = {
      title: post[`title${loc.suf}`] || post.title,
      mt: post[`meta_title${loc.suf}`],
      md: post[`meta_description${loc.suf}`],
      ex: post[`excerpt${loc.suf}`] || post.excerpt,
    };
    if (!src.title) continue;
    let out;
    try {
      out = await gen(loc, src, false);
      if (out.meta_title.length > loc.title || out.meta_description.length > loc.dMax) out = await gen(loc, src, true);
    } catch (e) { console.log(`  ! ${post.slug}${loc.suf}: ${e.message.slice(0, 50)}`); continue; }
    const mt = clampTitle(out.meta_title.trim(), loc.title);
    let md = out.meta_description.trim();
    if (md.length > loc.dMax) md = md.slice(0, loc.dMax + 1).replace(/\s+\S*$/, '').trim();
    update[`meta_title${loc.suf}`] = mt;
    update[`meta_description${loc.suf}`] = md;
  }
  const { error: upErr } = await s.from('blog_posts').update(update).eq('id', post.id);
  done++;
  if (upErr) console.log(`  ✗ ${post.slug}: ${upErr.message}`);
  else console.log(`  ✓ [${done}/${data.length}] ${post.slug}`);
}
console.log('Done.');
