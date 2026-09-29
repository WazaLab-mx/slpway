// Inserts places with a local photo uploaded to Storage `images/places/<uuid>.jpg`.
// Idempotent: skips any place whose name already exists.
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';

export async function addPlaces(places, photosDir) {
  if (!photosDir) throw new Error('Pass the photos directory as the first argument');
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  for (const { photo, ...place } of places) {
    const { data: existing } = await sb.from('places').select('id').ilike('name', place.name);
    if (existing?.length) {
      console.log(`skip ${place.name}: already exists (${existing[0].id})`);
      continue;
    }

    const objectPath = `places/${randomUUID()}.jpg`;
    const { error: uploadError } = await sb.storage
      .from('images')
      .upload(objectPath, fs.readFileSync(path.join(photosDir, photo)), { contentType: 'image/jpeg' });
    if (uploadError) throw new Error(`${place.name} photo upload: ${uploadError.message}`);
    const imageUrl = sb.storage.from('images').getPublicUrl(objectPath).data.publicUrl;

    const { data, error } = await sb.from('places').insert({
      ...place,
      city: 'San Luis Potosí',
      image_url: imageUrl,
      featured: false,
      speaks_english: false,
      additional_categories: [],
      categories: [place.category],
      name_es: place.name,
      name_de: place.name,
    }).select('id').single();
    if (error) throw new Error(`${place.name} insert: ${error.message}`);
    console.log(`added ${place.name} -> ${data.id}`);
  }
}
