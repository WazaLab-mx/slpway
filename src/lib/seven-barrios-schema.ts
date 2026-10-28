import type { FaqItem } from '@/data/half-marathon-capital-2026';
import { BARRIOS, CATEDRAL, SEVEN_BARRIOS_PATH, buildPlaceUrl, buildWalkingRouteUrl } from './seven-barrios';

const SITE = 'https://www.sanluisway.com';
const CITY = { '@type': 'City', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' };

/** TouristAttraction + ItemList of the 7 barrios, FAQPage and breadcrumbs. */
export function buildSevenBarriosSchema(title: string, description: string, faqs: FaqItem[]) {
  const url = `${SITE}${SEVEN_BARRIOS_PATH}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: 'Los 7 barrios de San Luis Potosí',
        alternateName: 'The seven traditional barrios of San Luis Potosí',
        description,
        url,
        isAccessibleForFree: true,
        geo: { '@type': 'GeoCoordinates', latitude: CATEDRAL.lat, longitude: CATEDRAL.lon },
        hasMap: buildWalkingRouteUrl(),
        containedInPlace: CITY,
      },
      {
        '@type': 'ItemList',
        name: title,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: BARRIOS.length,
        itemListElement: BARRIOS.map((barrio, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'TouristAttraction',
            name: `Barrio de ${barrio.name}`,
            url: `${url}#${barrio.id}`,
            geo: { '@type': 'GeoCoordinates', latitude: barrio.lat, longitude: barrio.lon },
            hasMap: buildPlaceUrl(barrio),
            containedInPlace: CITY,
          },
        })),
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
          { '@type': 'ListItem', position: 2, name: 'Centro Histórico', item: `${SITE}/centro-historico` },
          { '@type': 'ListItem', position: 3, name: '7 barrios', item: url },
        ],
      },
    ],
  };
}
