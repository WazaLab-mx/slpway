// Carrera Real del Potosí 2026 (5th edition) — facts verified 2026-10-12 against
// the official registration page on tutiempoatiempo.com and the race poster.
// Not published: route map, categories, awards, kit pickup date/place.
// Race held 2026-10-17; event page shows it as ended (rechecked 2026-10-27).

import type { FaqItem } from './half-marathon-capital-2026';

export const REAL_POTOSI_PATH = '/events/carrera-real-del-potosi-2026';
export const REAL_POTOSI_IMAGE = '/images/parque-tangamanga/historical.jpg';
export const REAL_POTOSI_REGISTRATION_URL = 'https://www.tutiempoatiempo.com/event/carrera-real-del-potosi/169';

const SITE = 'https://www.sanluisway.com';

export function buildRealPotosiSchema(faqs: FaqItem[]) {
  const url = `${SITE}${REAL_POTOSI_PATH}`;
  const offer = (name: string) => ({
    '@type': 'Offer',
    name,
    price: '375',
    priceCurrency: 'MXN',
    url: REAL_POTOSI_REGISTRATION_URL,
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        name: 'Carrera Real del Potosí 2026 (quinta edición)',
        sport: 'Running',
        startDate: '2026-10-17T19:00:00-06:00',
        image: `${SITE}${REAL_POTOSI_IMAGE}`,
        location: {
          '@type': 'Place',
          name: 'Parque Tangamanga I (Av. Artesanos, frente al planetario)',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Artesanos, Parque Tangamanga I',
            addressLocality: 'San Luis Potosí',
            addressRegion: 'SLP',
            addressCountry: 'MX',
          },
        },
        offers: [offer('3K'), offer('6K'), offer('10K')],
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
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
          { '@type': 'ListItem', position: 3, name: 'Carrera Real del Potosí 2026', item: url },
        ],
      },
    ],
  };
}
