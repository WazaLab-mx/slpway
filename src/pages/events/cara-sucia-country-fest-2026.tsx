import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
};

// Past event (June 13, 2026). Facts checked 2026-10-27 against the official
// poster/banner (date, doors, address, lineup, activities). Ticket prices and
// the venue name could not be verified, so they are not shown.
const INSTAGRAM_URL = 'https://www.instagram.com/soycarasucia/';

const ACTIVITIES = ['bbq', 'mechanicalBull', 'rodeo', 'hatBar', 'kids', 'market', 'drinks'];
const LINEUP = ['Manuel Covarrubias', 'Dan Rosales', 'The Roses', 'Combine The Band', 'Héctor Villalobos', 'Rommel Balterra', 'Memphis Acoustic'];

export default function CaraSuciaCountryFest2026() {
  const { t } = useTranslation('common');

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MusicEvent',
        name: 'Cara Sucia Country Fest 2026',
        startDate: '2026-06-13T14:00:00-06:00',
        endDate: '2026-06-13T23:59:00-06:00',
        isAccessibleForFree: false,
        location: {
          '@type': 'Place',
          name: 'Cara Sucia Country Fest 2026',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lib. Sur Anillo Perif. 720, Garita de Jalisco',
            addressLocality: 'San Luis Potosí',
            addressRegion: 'SLP',
            postalCode: '78294',
            addressCountry: 'MX',
          },
        },
        performer: LINEUP.map((name) => ({ '@type': 'MusicGroup', name })),
        organizer: { '@type': 'Organization', name: 'Cara Sucia BBQ', url: INSTAGRAM_URL },
        sponsor: [{ '@type': 'Organization', name: 'Ford SS San Luis' }],
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: 'https://www.sanluisway.com/events/cara-sucia-country-fest-2026',
      },
      {
        '@type': 'FAQPage',
        mainEntity: Array.from({ length: 8 }, (_, i) => ({
          '@type': 'Question',
          name: t(`countryFest2026.faq.q${i + 1}`),
          acceptedAnswer: { '@type': 'Answer', text: t(`countryFest2026.faq.a${i + 1}`) },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanluisway.com' },
          { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://www.sanluisway.com/events' },
          { '@type': 'ListItem', position: 3, name: 'Cara Sucia Country Fest 2026', item: 'https://www.sanluisway.com/events/cara-sucia-country-fest-2026' },
        ],
      },
    ],
  };

  const stats = [
    { value: t('countryFest2026.stats.dateValue'), label: t('countryFest2026.stats.date') },
    { value: t('countryFest2026.stats.gatesValue'), label: t('countryFest2026.stats.gates') },
    { value: t('countryFest2026.stats.familyValue'), label: t('countryFest2026.stats.family') },
  ];

  return (
    <>
      <SEO
        title={t('countryFest2026.seo.title')}
        description={t('countryFest2026.seo.description')}
        keywords={t('countryFest2026.seo.keywords')}
        ogImage="/images/events/cara-sucia-hero.jpg"
        structuredData={structuredData as Record<string, unknown>}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-950 via-orange-900 to-stone-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 39h40v1H0z M39 0v40h1V0z' fill='%23fff' fill-opacity='0.15'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-200 text-xs font-bold uppercase tracking-widest">
                  {t('countryFest2026.hero.badge')}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2 text-amber-200">
                <CalendarIcon className="w-5 h-5" />
                <span className="font-medium">{t('countryFest2026.hero.date')}</span>
              </div>
              <div className="flex items-center gap-3 mb-3 text-amber-200/80">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">{t('countryFest2026.hero.location')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-serif mb-3">
                {t('countryFest2026.hero.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-amber-300 font-semibold mb-5">
                {t('countryFest2026.hero.subtitle')}
              </h2>
              <p className="text-lg text-white/85 max-w-2xl mb-8">
                {t('countryFest2026.hero.description')}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#lineup"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  {t('countryFest2026.hero.ctaLineup')}
                </a>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-amber-400/20 shadow-2xl">
              <Image
                src="/images/events/cara-sucia-country-fest-2026-banner.png"
                alt={t('countryFest2026.hero.bannerAlt')}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section id="lineup" className="py-16 px-4 bg-stone-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif mb-3">{t('countryFest2026.lineup.title')}</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">{t('countryFest2026.lineup.subtitle')}</p>
          </div>
          <div className="relative aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-amber-500/30 shadow-2xl bg-black">
            <Image
              src="/images/events/cara-sucia-country-fest-2026-lineup.png"
              alt={t('countryFest2026.lineup.posterAlt')}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
            />
          </div>
          <p className="text-center text-amber-300/80 text-sm mt-6">
            {t('countryFest2026.lineup.posterNote')}{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-200"
            >
              @soycarasucia
            </a>
          </p>
        </div>
      </section>

      <section className="my-8"><AdUnit placement="mid-content" /></section>

      {/* Activities */}
      <section className="py-16 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-3">{t('countryFest2026.activities.title')}</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">{t('countryFest2026.activities.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVITIES.map((key) => (
              <div
                key={key}
                className="bg-stone-800/60 border border-stone-700 rounded-xl p-5 hover:border-amber-500/50 transition-colors"
              >
                <div className="text-2xl mb-3">{t(`countryFest2026.activities.items.${key}.icon`)}</div>
                <h3 className="font-bold text-lg text-amber-300 mb-1">
                  {t(`countryFest2026.activities.items.${key}.title`)}
                </h3>
                <p className="text-stone-300 text-sm">
                  {t(`countryFest2026.activities.items.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 px-4 bg-stone-950 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">
            {t('countryFest2026.sponsors.title')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <span className="text-stone-200 font-bold text-lg">Ford SS San Luis</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-serif mb-10 text-center">{t('countryFest2026.faq.title')}</h2>
          <div className="space-y-7">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="border-b border-stone-800 pb-7">
                <p className="font-bold text-white mb-2">{t(`countryFest2026.faq.q${i + 1}`)}</p>
                <p className="text-stone-300 text-sm leading-relaxed">{t(`countryFest2026.faq.a${i + 1}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 mb-8"><AdUnit placement="top-banner" /></section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-900 via-orange-950 to-stone-950 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">{t('countryFest2026.cta.title')}</h2>
          <p className="text-white/85 mb-8">{t('countryFest2026.cta.description')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events/all"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              {t('countryFest2026.cta.moreEvents')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
