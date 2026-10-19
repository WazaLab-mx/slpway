// LXXXII Congreso y Campeonato Nacional Charro 2026 — facts verified 2026-10-19
// against fmcharreria.org.mx (event page, Programa General cover, official
// ticket-price graphic) and La Voz de la Charrería (FMCH release, 2026-10-05).
// Not published: per-session schedule for the final days, Arena street address.

import type { FaqItem } from './half-marathon-capital-2026';

export const NACIONAL_CHARRO_PATH = '/events/nacional-charro-2026';
export const NACIONAL_CHARRO_IMAGE = '/images/events/nacional-charro-2026-poster.jpg';
export const NACIONAL_CHARRO_TICKETS_URL = 'https://www.masboletos.mx';
export const NACIONAL_CHARRO_OFFICIAL_URL =
  'https://fmcharreria.org.mx/actividades-deportivas/eventos-oficiales/temporada-2026/lxxxii-congreso-nacional-charro-slp-2026/';
export const NACIONAL_CHARRO_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Arena+Potos%C3%AD+San+Luis+Potos%C3%AD';

const SITE = 'https://www.sanluisway.com';

export function buildNacionalCharroSchema(faqs: FaqItem[]) {
  const url = `${SITE}${NACIONAL_CHARRO_PATH}`;
  const offer = (name: string, price: string) => ({
    '@type': 'Offer',
    name,
    price,
    priceCurrency: 'MXN',
    url: NACIONAL_CHARRO_TICKETS_URL,
    availability: 'https://schema.org/InStock',
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        name: 'LXXXII Congreso y Campeonato Nacional Charro 2026 "Andrés Nito Aceves"',
        sport: 'Charrería',
        startDate: '2026-10-09',
        endDate: '2026-11-01',
        image: `${SITE}${NACIONAL_CHARRO_IMAGE}`,
        organizer: { '@type': 'Organization', name: 'Federación Mexicana de Charrería', url: 'https://fmcharreria.org.mx' },
        location: {
          '@type': 'Place',
          name: 'Arena Potosí',
          address: { '@type': 'PostalAddress', addressLocality: 'San Luis Potosí', addressRegion: 'SLP', addressCountry: 'MX' },
        },
        offers: [
          offer('Eliminatorias lunes a jueves · Primer nivel', '115'),
          offer('Eliminatorias lunes a jueves · VIP general', '290'),
          offer('Eliminatorias viernes a domingo · Primer nivel', '175'),
          offer('Eliminatorias viernes a domingo · VIP general', '345'),
          offer('Paquete finales · Primer nivel general', '2300'),
          offer('Paquete finales · VIP mirandilla numerado', '5265'),
          offer('Paquete finales · VIP central numerado', '5850'),
        ],
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Events', item: `${SITE}/events` },
          { '@type': 'ListItem', position: 3, name: 'Nacional Charro 2026', item: url },
        ],
      },
    ],
  };
}
