import 'dotenv/config';
import OpenAI from 'openai';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const avatars = [
  {
    file: 'authors/mariana-cordero.jpg',
    prompt:
      'Professional friendly headshot portrait of a Mexican woman in her early 30s, warm genuine smile, shoulder-length dark wavy hair, natural makeup, wearing a smart-casual blouse, soft natural window light, softly blurred warm indoor background of a bright cafe, looking directly at camera. Editorial author-bio portrait, photorealistic, high quality, shallow depth of field. No text, no watermark, no logos.',
  },
  {
    file: 'authors/daniel-cross.jpg',
    prompt:
      'Professional friendly headshot portrait of a North American man in his late 30s, short brown hair, light stubble, warm approachable smile, wearing a casual button-down shirt, soft natural daylight, softly blurred warm background of a sunny Mexican colonial street, looking directly at camera. Editorial author-bio portrait, photorealistic, high quality, shallow depth of field. No text, no watermark, no logos.',
  },
];

for (const a of avatars) {
  console.log(`Generating ${a.file} ...`);
  const img = await openai.images.generate({ model: 'gpt-image-1', prompt: a.prompt, size: '1024x1024', quality: 'high', n: 1 });
  const raw = Buffer.from(img.data[0].b64_json, 'base64');
  const opt = await sharp(raw).resize(512, 512, { fit: 'cover' }).jpeg({ quality: 85 }).toBuffer();
  const { error } = await supabase.storage.from('blog-images').upload(a.file, opt, { contentType: 'image/jpeg', upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('blog-images').getPublicUrl(a.file);
  console.log(`  ✓ ${data.publicUrl} (${opt.length}b)`);
}
console.log('Done.');
