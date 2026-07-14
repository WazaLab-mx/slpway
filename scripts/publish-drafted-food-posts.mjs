import 'dotenv/config';
import OpenAI from 'openai';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

// Run AFTER raising the OpenAI billing limit: generates the two pending hero
// images (to the exact storage keys the drafts already reference) and flips
// both drafts to published.
const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const NO = ' Photorealistic editorial photograph, natural light, high detail, no text, no watermark, no logos, no recognizable faces in focus.';
const JOBS = [
  {
    slug: 'mercados-san-luis-potosi-guia-comer',
    key: 'posts/mercados-san-luis-potosi-hero.jpg',
    prompt: 'Bustling interior of a traditional Mexican public market food hall: fonda counters with steaming comals, stacks of red-tinted gorditas and enchiladas, hanging papel picado, warm tungsten light, morning crowd of locals eating breakfast at counters.' + NO,
  },
  {
    slug: 'antojitos-potosinos-a-z',
    key: 'posts/antojitos-potosinos-hero.jpg',
    prompt: 'Overhead flat-lay of Mexican regional antojitos on a rustic wooden table: red enchiladas, thick corn gorditas, a slice of giant tamal on banana leaf, dark cactus-fruit candy squares, a clay cup of reddish fermented drink, chocolate tablets, scattered dried chiles and marigold petals, warm natural light.' + NO,
  },
];

for (const job of JOBS) {
  console.log(`Generating hero for ${job.slug} ...`);
  const img = await openai.images.generate({ model: 'gpt-image-1', prompt: job.prompt, size: '1536x1024', quality: 'high', n: 1 });
  const out = await sharp(Buffer.from(img.data[0].b64_json, 'base64')).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const up = await s.storage.from('blog-images').upload(job.key, out, { contentType: 'image/jpeg', upsert: true });
  if (up.error) throw up.error;
  const { error } = await s
    .from('blog_posts')
    .update({ status: 'published', published_at: new Date().toISOString() })
    .eq('slug', job.slug);
  if (error) throw error;
  console.log(`  ✓ hero uploaded (${(out.length / 1024).toFixed(0)}KB) and ${job.slug} PUBLISHED`);
}
console.log('\nDone. Re-run the audits: audit-internal-links, audit-discover-image-widths, audit-meta-lengths.');
