// Cross-linking map: given a place or event, suggest the hub pages and guides
// a reader would plausibly want next. Keeps internal linking systematic
// instead of ad hoc per page.
export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

const THIS_WEEK: RelatedLink = {
  href: '/events/this-week',
  title: 'Eventos esta semana',
  description: 'La agenda de los próximos 7 días en SLP, siempre actualizada.',
};

const PLACE_CATEGORY_LINKS: Record<string, RelatedLink[]> = {
  restaurant: [
    { href: '/restaurants', title: 'Los mejores restaurantes de SLP', description: 'Nuestra selección completa para comer en la ciudad.' },
    { href: '/guides/foodie-guide', title: 'Guía foodie de San Luis Potosí', description: 'Qué comer, dónde y por qué — la ruta gastronómica local.' },
  ],
  cafe: [
    { href: '/category/remote-work-cafes', title: 'Cafés para trabajar', description: 'WiFi confiable, enchufes y buen café para remote work.' },
    { href: '/category/open-for-breakfast', title: 'Abiertos para desayunar', description: 'Los lugares que sí abren temprano.' },
  ],
  bar: [
    { href: '/category/cocktail-bars', title: 'Bares de coctelería', description: 'Mixología y terrazas para la noche potosina.' },
    { href: '/category/cantinas', title: 'Cantinas tradicionales', description: 'La experiencia clásica potosina, botana incluida.' },
  ],
  hotel: [
    { href: '/visit-san-luis-potosi', title: 'Visita San Luis Potosí', description: 'Qué hacer, dónde quedarte y cómo moverte.' },
    { href: '/weekend-getaways', title: 'Escapadas de fin de semana', description: 'Rutas desde SLP para 1–3 días.' },
  ],
  museum: [
    { href: '/cultural-attractions', title: 'Atracciones culturales', description: 'Museos, teatros y patrimonio de la ciudad.' },
    { href: '/cultural/history', title: 'Historia de San Luis Potosí', description: 'De la minería colonial al presente.' },
  ],
  park: [
    { href: '/parque-tangamanga', title: 'Parque Tangamanga I', description: 'La guía completa del parque urbano más grande de SLP.' },
    { href: '/family-friendly-activities', title: 'Planes con niños', description: '30+ actividades familiares con precios y horarios.' },
  ],
  'live-music': [
    { href: '/category/live-music', title: 'Música en vivo', description: 'Los escenarios y foros con agenda activa.' },
  ],
  shop: [
    { href: '/category/international-markets', title: 'Mercados internacionales', description: 'Dónde encontrar productos importados en SLP.' },
  ],
};

const DEFAULT_PLACE_LINKS: RelatedLink[] = [
  { href: '/places', title: 'Explora más lugares', description: 'El directorio completo de San Luis Way.' },
];

export function relatedLinksForPlace(category: string): RelatedLink[] {
  const base = PLACE_CATEGORY_LINKS[category] ?? DEFAULT_PLACE_LINKS;
  return [...base, THIS_WEEK].slice(0, 3);
}

const EVENT_CATEGORY_GUIDE: Record<string, RelatedLink> = {
  sports: { href: '/events/maraton-tangamanga-2026', title: 'Maratón Tangamanga 2026', description: 'La carrera más grande del año en SLP.' },
  music: { href: '/events/fenapo-2026', title: 'FENAPO 2026', description: '35 noches de conciertos en agosto — cartel completo.' },
  'arts-culture': { href: '/cultural', title: 'Cultura potosina', description: 'Festivales, tradiciones e historia de SLP.' },
  culinary: { href: '/guides/foodie-guide', title: 'Guía foodie de SLP', description: 'La ruta gastronómica local completa.' },
  'community-social': { href: '/community', title: 'Comunidad', description: 'Conecta con locales y expats en SLP.' },
};

export function relatedLinksForEvent(category: string): RelatedLink[] {
  const links: RelatedLink[] = [THIS_WEEK];
  const guide = EVENT_CATEGORY_GUIDE[category];
  if (guide) links.push(guide);
  links.push({
    href: `/events/${category}`,
    title: 'Más eventos de esta categoría',
    description: 'Todo lo que viene en el calendario de SLP.',
  });
  return links.slice(0, 3);
}
