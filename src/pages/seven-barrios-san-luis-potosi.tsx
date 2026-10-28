import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import SevenBarriosHero from '@/components/seven-barrios/SevenBarriosHero';
import SevenBarriosMap from '@/components/seven-barrios/SevenBarriosMap';
import BarrioCards from '@/components/seven-barrios/BarrioCards';
import WalkingRouteInfo from '@/components/seven-barrios/WalkingRouteInfo';
import { buildWalkingRouteUrl } from '@/lib/seven-barrios';
import { buildSevenBarriosSchema } from '@/lib/seven-barrios-schema';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'seven-barrios'])) },
});

export default function SevenBarriosPage() {
  const { t } = useTranslation('seven-barrios');
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        structuredData={buildSevenBarriosSchema(t('seo.title'), t('seo.description'), faqs)}
      />
      <SevenBarriosHero />
      <div className="bg-[#F6F3EC] text-slate-800">
        <section id="map" aria-labelledby="map-title" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-12 md:px-8">
          <h2 id="map-title" className="font-serif text-3xl font-bold text-[#011A42] md:text-4xl">{t('map.title')}</h2>
          <p className="mt-3 max-w-2xl text-slate-700">{t('map.description')}</p>
          <div className="mt-8">
            <SevenBarriosMap />
          </div>
          <div className="mt-8 flex flex-col items-center text-center">
            <a
              href={buildWalkingRouteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FFCB05] px-6 py-5 text-lg font-extrabold text-[#011A42] shadow-md transition-colors hover:bg-[#ffd83d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011A42] sm:w-auto sm:px-10"
            >
              {t('route.cta')}
              <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <p className="mt-3 max-w-md text-sm text-slate-600">{t('route.note')}</p>
          </div>
        </section>
        <BarrioCards />
        <div className="mx-auto max-w-5xl px-4 pb-12 md:px-8"><AdUnit placement="mid-content" /></div>
        <WalkingRouteInfo />
      </div>
    </>
  );
}
