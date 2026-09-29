// Adds 4 restaurants to `places` with data from Google Places (2026-09-29).
// Usage: node scripts/add-restaurants-2026-09-29.mjs <photos-dir>
// Idempotent: skips any restaurant whose name already exists.
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';

const photosDir = process.argv[2];
if (!photosDir) throw new Error('Pass the photos directory as the first argument');

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const restaurants = [
  {
    photo: 'piaf-0-web.jpg',
    name: 'Piaf By La Douceur',
    category: 'international-food',
    address: 'Torre Kennedy, C. Huasteca 290-B, Bellas Lomas, 78210',
    phone: '444 811 2424',
    website: null,
    instagram: null,
    latitude: 22.1448712,
    longitude: -101.0197492,
    hours: 'Tue - Sat: 9:00 - 23:00 / Sun: 9:00 - 19:00 / Mon: Closed',
    tags: ['breakfast', 'brunch', 'bistro', 'lomas'],
    description: 'Bistro from the La Douceur bakery in Torre Kennedy, Lomas. Breakfasts, house bread and international dishes for lunch and dinner, with wine and cocktails. Popular for special occasions; reservations accepted.',
    description_es: 'Bistró de la pastelería La Douceur en Torre Kennedy, Lomas. Desayunos, pan de la casa y platillos internacionales para comer y cenar, con vinos y coctelería. Buena opción para ocasiones especiales; acepta reservaciones.',
    description_de: 'Bistro der Bäckerei La Douceur im Torre Kennedy, Lomas. Frühstück, hausgemachtes Brot und internationale Gerichte zum Mittag- und Abendessen, dazu Wein und Cocktails. Beliebt für besondere Anlässe; Reservierungen möglich.',
  },
  {
    photo: 'jijos-0-web.jpg',
    name: 'Jijos del Mar',
    category: 'seafood',
    address: 'Prol. Av. Nereo Rodríguez Barragán 1028, Tequisquiapan, 78250',
    phone: '444 125 6659',
    website: null,
    instagram: null,
    latitude: 22.1604173,
    longitude: -100.9962636,
    hours: 'Wed - Sat: 13:00 - 20:00 / Sun: 13:00 - 19:00 / Mon - Tue: Closed',
    tags: ['seafood', 'mariscos', 'outdoor seating'],
    description: 'Busy open-air seafood spot on Nereo Rodríguez Barragán. Grilled octopus, aguachiles, oyster shots and cold beer or micheladas. Expect a wait on weekends; arrive early.',
    description_es: 'Marisquería al aire libre sobre Nereo Rodríguez Barragán, casi siempre llena. Pulpo asado, aguachiles, shots de ostión y cerveza o micheladas. Los fines de semana hay espera; llega temprano.',
    description_de: 'Gut besuchtes Open-Air-Fischrestaurant an der Nereo Rodríguez Barragán. Gegrillter Oktopus, Aguachiles, Austern-Shots und kaltes Bier oder Micheladas. Am Wochenende mit Wartezeit rechnen; früh kommen.',
  },
  {
    photo: 'pirana-2-web.jpg',
    name: 'Piraña Cubana',
    category: 'seafood',
    address: 'Av. Nereo Rodríguez Barragán 1380, Local B15, Plaza del Valle, Col. del Valle, 78200',
    phone: null,
    website: 'https://www.facebook.com/profile.php?id=100083575545649',
    instagram: null,
    latitude: 22.1523911,
    longitude: -101.0134048,
    hours: 'Mon - Wed, Sun: 13:00 - 19:00 / Thu - Sat: 13:00 - 24:00',
    tags: ['seafood', 'mariscos', 'outdoor seating'],
    description: 'Fish and seafood restaurant inside Plaza del Valle, one of the best-rated in the city. Seafood platters, shrimp dishes, a tasting menu and prepared beers. Open late Thursday to Saturday; reservations accepted.',
    description_es: 'Restaurante de pescados y mariscos dentro de Plaza del Valle, de los mejor calificados de la ciudad. Charolas de mariscos, platillos de camarón, menú de degustación y cervezas preparadas. Abre hasta tarde de jueves a sábado; acepta reservaciones.',
    description_de: 'Fisch- und Meeresfrüchterestaurant in der Plaza del Valle, eines der bestbewerteten der Stadt. Meeresfrüchteplatten, Garnelengerichte, ein Degustationsmenü und zubereitete Biere. Donnerstag bis Samstag lange geöffnet; Reservierungen möglich.',
  },
  {
    photo: 'mars-1-web.jpg',
    name: 'Mars Burgers Lomas',
    category: 'comfort-food',
    address: 'Cordillera Real 230, Lomas 4a Sección, 78216',
    phone: '444 582 3836',
    website: 'http://www.marsburgers.mx/',
    instagram: null,
    latitude: 22.1434024,
    longitude: -101.0245381,
    hours: 'Mon - Sun: 13:30 - 22:30',
    tags: ['burgers', 'family friendly', 'outdoor seating', 'lomas'],
    description: 'American-style burger joint in Lomas with thick smashed patties, fries and shakes. Casual, kid-friendly, with outdoor seating and delivery.',
    description_es: 'Hamburguesería estilo americano en Lomas con carne gruesa, papas y malteadas. Casual, apta para niños, con mesas al aire libre y servicio a domicilio.',
    description_de: 'Burgerladen im amerikanischen Stil in Lomas mit dicken Patties, Pommes und Shakes. Locker und kinderfreundlich, mit Außenplätzen und Lieferservice.',
  },
];

for (const { photo, ...r } of restaurants) {
  const { data: existing } = await sb.from('places').select('id').ilike('name', r.name);
  if (existing?.length) {
    console.log(`skip ${r.name}: already exists (${existing[0].id})`);
    continue;
  }

  const objectPath = `places/${randomUUID()}.jpg`;
  const { error: uploadError } = await sb.storage
    .from('images')
    .upload(objectPath, fs.readFileSync(path.join(photosDir, photo)), { contentType: 'image/jpeg' });
  if (uploadError) throw new Error(`${r.name} photo upload: ${uploadError.message}`);
  const imageUrl = sb.storage.from('images').getPublicUrl(objectPath).data.publicUrl;

  const { data, error } = await sb.from('places').insert({
    ...r,
    city: 'San Luis Potosí',
    image_url: imageUrl,
    featured: false,
    speaks_english: false,
    additional_categories: [],
    categories: [r.category],
    name_es: r.name,
    name_de: r.name,
  }).select('id').single();
  if (error) throw new Error(`${r.name} insert: ${error.message}`);
  console.log(`added ${r.name} -> ${data.id}`);
}
