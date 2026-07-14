import 'dotenv/config';
import OpenAI from 'openai';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const NO_TEXT = 'Photorealistic editorial photograph, natural lighting, high detail, no text, no watermark, no logos, no people faces in focus.';

// 5 very-low-res posts. Generic representative scenes (not a specific named
// business), so an AI hero is acceptable editorial practice.
const POSTS = [
  {
    slug: 'potosino-art-history-artists-sculpture-painting-san-luis-potosi',
    prompt: `Interior of a fine-art museum gallery in San Luis Potosí, Mexico: colonial and modern Mexican paintings and a stone sculpture, warm gallery spotlighting, polished floor, elegant arches. ${NO_TEXT}`,
  },
  {
    slug: 'san-luis-potosi-weather-best-time-to-visit',
    prompt: `Panoramic view of the historic centre of San Luis Potosí, Mexico under a bright blue sky with soft white clouds, baroque cathedral towers and pink-stone colonial buildings, warm golden late-afternoon light. ${NO_TEXT}`,
  },
  {
    slug: 'san-luis-potosi-mining-history-baroque-architecture-cultural-legacy',
    prompt: `Ornate baroque colonial stone facade of a historic church in San Luis Potosí, Mexico, intricate carved details evoking the silver-mining colonial heritage, warm sunset light, deep blue sky. ${NO_TEXT}`,
  },
  {
    slug: 'best-parks-for-kids-san-luis-potosi',
    prompt: `A lush green urban family park in San Luis Potosí, Mexico on a sunny day: wide lawns, leafy trees, a calm lake, a colorful playground in the distance, blue sky. Welcoming family atmosphere. ${NO_TEXT}`,
  },
  {
    slug: 'best-brunch-spots-san-luis-potosi',
    prompt: `An inviting brunch table at a stylish Mexican cafe: chilaquiles, eggs, fresh fruit, pastries, a latte with latte art, soft natural morning light, cozy plant-filled interior, shallow depth of field. ${NO_TEXT}`,
  },
];

for (const p of POSTS) {
  console.log(`Generating ${p.slug} ...`);
  const img = await openai.images.generate({ model: 'gpt-image-1', prompt: p.prompt, size: '1536x1024', quality: 'high', n: 1 });
  const raw = Buffer.from(img.data[0].b64_json, 'base64');
  const out = await sharp(raw).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const meta = await sharp(out).metadata();

  const key = `posts/${p.slug}-hero.jpg`;
  const up = await s.storage.from('blog-images').upload(key, out, { contentType: 'image/jpeg', upsert: true });
  if (up.error) { console.log(`  ✗ upload ${up.error.message}`); continue; }
  const { data: pub } = s.storage.from('blog-images').getPublicUrl(key);
  const upd = await s.from('blog_posts').update({ image_url: pub.publicUrl }).eq('slug', p.slug);
  if (upd.error) { console.log(`  ✗ db ${upd.error.message}`); continue; }
  console.log(`  ✓ ${meta.width}x${meta.height}, ${(out.length / 1024).toFixed(0)}KB → ${pub.publicUrl}`);
}
console.log('Done.');
