import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import NacionalCharroHero from '@/components/nacional-charro/NacionalCharroHero';
import NacionalCharroDetails from '@/components/nacional-charro/NacionalCharroDetails';
import { buildNacionalCharroSchema, NACIONAL_CHARRO_IMAGE } from '@/data/nacional-charro-2026';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'nacional-charro'])) },
});

export default function NacionalCharro2026() {
  const { t } = useTranslation('nacional-charro');
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        ogImage={NACIONAL_CHARRO_IMAGE}
        structuredData={buildNacionalCharroSchema(faqs)}
      />
      <NacionalCharroHero />
      <div className="bg-[#f6f4ee] text-slate-800">
        <NacionalCharroDetails />
        <div className="mx-auto max-w-6xl px-4 pb-12 md:px-8"><AdUnit placement="mid-content" /></div>
      </div>
    </>
  );
}
