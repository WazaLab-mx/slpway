import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AdUnit from '@/components/common/AdUnit';
import ServiceFinder from '@/components/home-services/ServiceFinder';
import { fetchActiveProviders } from '@/lib/home-services-fetch';
import type { HomeServiceProvider } from '@/lib/home-services-providers';

// A directory of independent local businesses: San Luis Way connects visitors
// with them and does not provide, employ or guarantee any home service.
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      providers: await fetchActiveProviders(),
    },
    revalidate: 21600,
  };
};

const HomeServicesPage = ({ providers }: { providers: HomeServiceProvider[] }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('homeServices.pageTitle')}</title>
        <meta name="description" content={t('homeServices.metaDescription')} />
      </Head>

      <div className="relative h-80 w-full md:h-96">
        <Image
          src="/images/housing-services/hero.png"
          alt="Comfortable and clean home interior"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="px-4 text-center text-white">
            <h1 className="text-4xl font-bold text-yellow-400 md:text-5xl">{t('homeServices.heroTitle')}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white md:text-xl">{t('homeServices.heroDescription')}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {providers.length > 0 ? (
            <ServiceFinder providers={providers} />
          ) : (
            <p className="text-center text-gray-600">{t('homeServiceFinder.noProviders')}</p>
          )}

          <section className="mx-auto mt-12 max-w-5xl">
            <AdUnit placement="mid-content" />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomeServicesPage;
