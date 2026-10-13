// Medio Maratón #LaCapitalDelDeporte 2026 — facts verified 2026-10-12 against the
// official convocatoria (Dirección de Deporte Municipal) plus El Momento and
// San Luis Informa coverage. Route map and total cap were not published.

export const HALF_MARATHON_PATH = '/events/medio-maraton-capital-del-deporte-2026';
export const HALF_MARATHON_IMAGE = '/images/events/maraton-runners.jpg';
export const HALF_MARATHON_SOURCES = {
  convocatoria: 'https://docs.google.com/document/d/1j4-gKNQEGG3kO5zVncHUfntL9cN0dY0d/edit',
  momento: 'https://periodicoelmomento.com/inicia-registro-para-el-medio-maraton-la-capital-del-deporte-2026/',
  sanluisinforma: 'https://sanluisinforma.com/?p=22666',
} as const;

const SITE = 'https://www.sanluisway.com';

export interface FaqItem {
  q: string;
  a: string;
}

export function buildHalfMarathonSchema(faqs: FaqItem[]) {
  const url = `${SITE}${HALF_MARATHON_PATH}`;
  const offer = (name: string) => ({
    '@type': 'Offer',
    name,
    price: '0',
    priceCurrency: 'MXN',
    url: HALF_MARATHON_SOURCES.convocatoria,
    availability: 'https://schema.org/InStock',
    validFrom: '2026-10-07',
    validThrough: '2026-11-04',
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        name: 'Medio Maratón #LaCapitalDelDeporte 2026',
        sport: 'Running',
        startDate: '2026-11-08T07:05:00-06:00',
        endDate: '2026-11-08T10:00:00-06:00',
        image: `${SITE}${HALF_MARATHON_IMAGE}`,
        location: {
          '@type': 'Place',
          name: 'Palacio Municipal, Plaza de Armas (Jardín Hidalgo)',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jardín Hidalgo S/N, Centro Histórico',
            addressLocality: 'San Luis Potosí',
            addressRegion: 'SLP',
            addressCountry: 'MX',
          },
        },
        organizer: {
          '@type': 'GovernmentOrganization',
          name: 'Dirección de Deporte Municipal, H. Ayuntamiento de San Luis Potosí',
        },
        offers: [offer('21K'), offer('10K'), offer('5K')],
        isAccessibleForFree: true,
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
          { '@type': 'ListItem', position: 3, name: 'Medio Maratón La Capital del Deporte 2026', item: url },
        ],
      },
    ],
  };
}
