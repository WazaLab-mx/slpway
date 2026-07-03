import Head from 'next/head';
import { BusinessPageData } from '@/types/business-page';
import { phoneDigits } from './contact';

interface BusinessSeoProps {
  business: BusinessPageData;
}

function truncate(text: string, max = 158): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
}

function buildJsonLd(business: BusinessPageData, url: string) {
  const {
    name, description, hero, gallery, menu, hours,
    address, phone, geo, established, instagram, facebook,
  } = business;

  const sameAs = [
    instagram ? `https://www.instagram.com/${instagram}` : null,
    facebook ? `https://www.facebook.com/${facebook}` : null,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': url,
    name,
    url,
    description: description.join(' '),
    image: [hero.image, ...gallery],
    telephone: `+52${phoneDigits(phone)}`,
    servesCuisine: 'Mexicana',
    priceRange: '$',
    currenciesAccepted: 'MXN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'San Luis Potosí',
      addressRegion: 'San Luis Potosí',
      addressCountry: 'MX',
    },
    ...(geo && {
      geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
    }),
    openingHours: hours
      .filter((entry) => !/cerrado/i.test(entry.hours))
      .map((entry) => `${entry.days} ${entry.hours}`),
    ...(established && { foundingDate: String(established) }),
    ...(sameAs.length > 0 && { sameAs }),
    hasMenu: {
      '@type': 'Menu',
      name: `Menú de ${name}`,
      hasMenuSection: menu.map((section) => ({
        '@type': 'MenuSection',
        name: section.category,
        hasMenuItem: section.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          ...(item.desc && { description: item.desc }),
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: 'MXN',
          },
        })),
      })),
    },
  };
}

export default function BusinessSeo({ business }: BusinessSeoProps) {
  const { name, tagline, description, hero, theme, slug } = business;
  const url = `https://www.sanluisway.com/negocios/${slug}`;
  const title = `${name} | ${tagline}`;
  const metaDescription = truncate(description[0] ?? tagline);
  const jsonLd = buildJsonLd(business, url);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="theme-color" content={theme.primary} />
      <link rel="canonical" href={url} key="canonical" />

      <meta property="og:type" content="restaurant.restaurant" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={hero.image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content={name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={hero.image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
