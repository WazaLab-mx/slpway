import 'dotenv/config';
import fs from 'fs';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SCRATCH = process.env.NL_HTML_PATH;
const contentEn = fs.readFileSync(SCRATCH, 'utf8').trim();

const en = {
  slug: 'best-bars-nightlife-mezcal-san-luis-potosi-2026',
  category: 'Food & Drink',
  image_url: 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/san-luis-potosi-nightlife-hero.jpg?v=20260713',
  tags: ['nightlife', 'bars', 'mezcal', 'cantinas', 'craft-beer', 'san-luis-potosi', 'mezcaleria', 'avenida-carranza', 'centro-historico', '2026'],
  title: 'Nightlife in San Luis Potosí: Best Bars, Cantinas & Mezcalerías (2026)',
  excerpt: "The city drinks slowly and seriously — this is mezcal country. A local's guide to SLP nightlife by zone: century-old cantinas, the craft-beer row on Avenida Universidad, local mezcalerías, and the Carranza strip — with real addresses and honest tips.",
  meta_title: 'San Luis Potosí Nightlife: Best Bars, Cantinas & Mezcal 2026',
  meta_description: 'Where locals drink in San Luis Potosí: historic cantinas, the Avenida Universidad craft-beer row, local mezcalerías and the Carranza strip — real addresses, hours and honest tips.',
};

const LANGS = { es: 'Spanish (Mexico)', de: 'German', ja: 'Japanese' };

async function translateContent(langName) {
  const res = await openai.responses.create({
    model: 'gpt-5.4',
    instructions:
      'You are a professional localizer for a San Luis Potosí travel/expat magazine. Translate the given HTML article into ' +
      langName +
      '. CRITICAL RULES: (1) Preserve EVERY HTML tag, attribute, class name and structure EXACTLY. (2) Translate only human-visible text and the string values inside the JSON-LD (the "name" and "text" fields of each FAQ question/answer). (3) Do NOT translate or change any href value, URL, class, or proper venue names / street names / neighborhood names (e.g. "La Piquería", "Avenida Universidad", "Callejón 7B", "Edificio Ipiña", "Centro Histórico") — keep them in Spanish. (4) Keep prices, addresses and numbers identical. (5) Output ONLY the raw translated HTML, starting with <div class="max-w-none"> and ending with </div>. No markdown code fences, no commentary.',
    input: contentEn,
    max_output_tokens: 20000,
  });
  let t = (res.output_text || '').trim();
  t = t.replace(/^```html\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
  if (!t.startsWith('<div class="max-w-none">') || !t.includes('FAQPage')) {
    throw new Error(`Translation for ${langName} failed structure check (len ${t.length})`);
  }
  return t;
}

async function translateMeta(langName) {
  const payload = JSON.stringify({
    title: en.title,
    excerpt: en.excerpt,
    meta_title: en.meta_title,
    meta_description: en.meta_description,
  });
  const res = await openai.responses.create({
    model: 'gpt-5.4',
    instructions:
      'Translate the JSON string values into ' +
      langName +
      '. Keep proper nouns and place names (San Luis Potosí, Avenida Universidad/Carranza, cantinas, mezcalerías) natural in the target language but do not translate venue proper names. Keep meta_title under ~60 characters and meta_description under ~160 characters where the language allows. Return ONLY a valid JSON object with the same keys (title, excerpt, meta_title, meta_description). No markdown.',
    input: payload,
    max_output_tokens: 2000,
  });
  let t = (res.output_text || '').trim();
  t = t.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
  const m = t.match(/\{[\s\S]*\}/);
  return JSON.parse(m ? m[0] : t);
}

const row = {
  slug: en.slug,
  category: en.category,
  status: 'published',
  image_url: en.image_url,
  author_id: null,
  tags: en.tags,
  title: en.title,
  excerpt: en.excerpt,
  content: contentEn,
  meta_title: en.meta_title,
  meta_description: en.meta_description,
  published_at: new Date().toISOString(),
};

for (const [code, name] of Object.entries(LANGS)) {
  console.log(`Translating → ${name} ...`);
  const [content, meta] = await Promise.all([translateContent(name), translateMeta(name)]);
  row[`content_${code}`] = content;
  row[`title_${code}`] = meta.title;
  row[`excerpt_${code}`] = meta.excerpt;
  row[`meta_title_${code}`] = meta.meta_title;
  row[`meta_description_${code}`] = meta.meta_description;
  console.log(`  ✓ ${code}: "${meta.title}" (content ${content.length} chars)`);
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', en.slug).maybeSingle();
if (existing) {
  console.log('Slug exists, updating id', existing.id);
  const { error } = await supabase.from('blog_posts').update(row).eq('id', existing.id);
  if (error) throw error;
} else {
  const { data, error } = await supabase.from('blog_posts').insert(row).select('id').single();
  if (error) throw error;
  console.log('Inserted id', data.id);
}
console.log('\nDone. Slug:', en.slug);
