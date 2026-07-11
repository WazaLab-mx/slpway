export interface LiveMusicVenue {
  id: string;
  name: string;
  type: string;
  genres: string[];
  area: string;
  setting: string;
  blurb: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  accent: string;
}

// All venues below were verified against their own social pages, ticketing
// listings, local press or the state culture directory (July 2026). Details
// that could not be independently confirmed (exact schedules, prices, cover
// charges) are deliberately omitted.
// Images: Teatro de la Paz and Centro de las Artes use REAL photos of those
// places. Chau! Resto, Estación Wadley, Café 500 Noches and the traditional
// foros use representative San Luis Potosí live-music/nightlife images (not the
// venue's own photo) — swap the `image` path for an official photo when available.
export const liveMusicVenues: LiveMusicVenue[] = [
  {
    id: 'chau-resto',
    name: 'Chau! Resto',
    type: 'Restaurant & Bar',
    genres: ['Live music', 'DJ nights', 'Jazz'],
    area: 'Centro Histórico · near Plaza de Aranzazú',
    setting: 'Indoor dining room with a rooftop terrace',
    blurb:
      'A contemporary Mexican kitchen and bar in the heart of downtown, on Agustín de Iturbide. Evenings bring live music and DJ sets, and its cultural programming leans into jazz nights and rotating art shows — a relaxed spot to eat well and catch music without a formal concert setting.',
    link: 'https://www.instagram.com/chau_resto/',
    linkLabel: 'Instagram',
    image: '/images/cultural/venues/chau-resto.webp',
    accent: 'from-rose-500 to-orange-500',
  },
  {
    id: 'estacion-wadley',
    name: 'Estación Wadley',
    type: 'Live-music venue',
    genres: ['Indie', 'Rock', 'Ska', 'Alternative'],
    area: 'Centro · Independencia 725',
    setting: 'Indoor stage venue',
    blurb:
      'One of the city\'s most active independent concert venues, with dozens of shows on its calendar. The bookings run to indie, rock, ska and alternative acts from across Mexico — the place to go when you want a real gig with a stage and a crowd rather than background music.',
    link: 'https://www.songkick.com/venues/4414365-estacion-wadley',
    linkLabel: 'Concert calendar',
    image: '/images/cultural/venues/estacion-wadley.webp',
    accent: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'cafe-500-noches',
    name: 'Café Bar 500 Noches',
    type: 'Bohemian café-bar',
    genres: ['Trova', 'Cantautor', 'Bohemian'],
    area: 'Bellas Lomas · Calle Huasteca 300',
    setting: 'Cozy indoor café-bar',
    blurb:
      'A bohemian café-bar built around Ibero-American singer-songwriter culture, decorated with rescued antiques and nods to the region\'s troubadours. It leans into trova and cantautor nights — think Joaquín Sabina tributes and acoustic sets — with live music a regular part of the room rather than an occasional event.',
    link: 'https://www.facebook.com/cafebar500nochesslp/',
    linkLabel: 'Facebook',
    image: '/images/cultural/venues/cafe-500-noches.webp',
    accent: 'from-amber-600 to-red-600',
  },
  {
    id: 'teatro-de-la-paz',
    name: 'Teatro de la Paz',
    type: 'Historic theater & concert hall',
    genres: ['Symphonic', 'Opera', 'Classical ballet'],
    area: 'Centro Histórico · facing Plaza del Carmen',
    setting: 'Grand indoor theater (~1,400 seats)',
    blurb:
      'The city\'s landmark neoclassical theater, opened in 1894 and considered one of Mexico\'s most important. It is the home stage of the Orquesta Sinfónica de San Luis Potosí (OSSLP) and hosts opera, classical ballet and concert seasons, with adjoining halls for chamber recitals and exhibitions.',
    link: 'https://www.facebook.com/TeatrodelaPazSanLuisP/',
    linkLabel: 'Facebook',
    image: '/images/cultural/teatro-de-la-paz.jpg',
    accent: 'from-slate-600 to-slate-800',
  },
  {
    id: 'centro-de-las-artes',
    name: 'Centro de las Artes Centenario',
    type: 'Multidisciplinary arts center',
    genres: ['Concerts', 'Jazz ensemble', 'Recitals'],
    area: 'Col. Julián Carrillo · Calzada de Guadalupe 705',
    setting: 'Concert hall and multiple theaters (former penitentiary)',
    blurb:
      'A sprawling state arts center — housed in a converted historic penitentiary — with a concert hall, several theaters and more than twenty music classrooms. Its calendar mixes concerts, recitals, a resident jazz ensemble and festivals, making it a reliable place to find programmed live music year-round.',
    link: 'https://sic.cultura.gob.mx/ficha.php?table=centro_cultural&table_id=2065',
    linkLabel: 'Cultural directory',
    image: '/images/cultural/venues/centro-de-las-artes.webp',
    accent: 'from-teal-600 to-emerald-700',
  },
  {
    id: 'foros-tradicionales',
    name: 'Traditional & Huasteca Foros',
    type: 'Peñas, plazas & cultural spaces',
    genres: ['Huapango', 'Son huasteco', 'Trova'],
    area: 'Centro plazas & the wider Huasteca Potosina',
    setting: 'Public plazas, cultural centers and festival stages',
    blurb:
      'Huapango and son huasteco — played by a trio of jarana, quinta huapanguera and violin with falsetto singing and zapateado — are the soul of the region. In the capital you\'ll catch it at the Casa de la Cultura, plazas around the Centro during cultural programming, and at festivals; the deepest experience is in the Huasteca Potosina itself (Ciudad Valles, Xilitla, Tamazunchale), where fandangos and huapangueadas are a living tradition, especially during Xantolo.',
    image: '/images/cultural/venues/foros-tradicionales.webp',
    accent: 'from-lime-600 to-green-700',
  },
];
