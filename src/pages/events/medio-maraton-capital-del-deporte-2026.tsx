import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import HalfMarathonHero from '@/components/half-marathon/HalfMarathonHero';
import HalfMarathonRace from '@/components/half-marathon/HalfMarathonRace';
import HalfMarathonLogistics from '@/components/half-marathon/HalfMarathonLogistics';
import HalfMarathonFaq from '@/components/half-marathon/HalfMarathonFaq';
import { buildHalfMarathonSchema, HALF_MARATHON_IMAGE, type FaqItem } from '@/data/half-marathon-capital-2026';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'half-marathon-capital'])) },
});

export default function MedioMaratonCapitalDelDeporte2026() {
  const { t } = useTranslation('half-marathon-capital');
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        ogImage={HALF_MARATHON_IMAGE}
        structuredData={buildHalfMarathonSchema(faqs)}
      />
      <HalfMarathonHero />
      <div className="bg-[#f5f7f2] text-slate-800">
        <div className="mx-auto max-w-6xl px-4 pt-10 md:px-8">
          <aside className="rounded-xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
            <h2 className="font-bold text-slate-900">{t('status.title')}</h2>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">{t('status.description')}</p>
          </aside>
        </div>
        <HalfMarathonRace />
        <div className="mx-auto max-w-6xl px-4 md:px-8"><AdUnit placement="mid-content" /></div>
        <HalfMarathonLogistics />
        <HalfMarathonFaq />
      </div>
    </>
  );
}
