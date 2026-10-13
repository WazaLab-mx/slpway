import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import RealPotosiRunHero from '@/components/real-potosi-run/RealPotosiRunHero';
import RealPotosiRunDetails from '@/components/real-potosi-run/RealPotosiRunDetails';
import { buildRealPotosiSchema, REAL_POTOSI_IMAGE } from '@/data/real-potosi-run-2026';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'real-potosi-run'])) },
});

export default function CarreraRealDelPotosi2026() {
  const { t } = useTranslation('real-potosi-run');
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        ogImage={REAL_POTOSI_IMAGE}
        structuredData={buildRealPotosiSchema(faqs)}
      />
      <RealPotosiRunHero />
      <div className="bg-[#f4f5fa] text-slate-800">
        <RealPotosiRunDetails />
        <div className="mx-auto max-w-6xl px-4 pb-12 md:px-8"><AdUnit placement="mid-content" /></div>
      </div>
    </>
  );
}
