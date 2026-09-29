import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import PlaceCard from '@/components/PlaceCard';
import PlaceModal from '@/components/PlaceModal';
import AdUnit from '@/components/common/AdUnit';
import { Place } from '@/types';
import { supabase } from '@/lib/supabase';
import { localizePlace } from '@/lib/localizePlace';

const SEAFOOD_CATEGORY = 'seafood';

interface SeafoodPageProps {
  places: Place[];
}

const SeafoodPage: NextPage<SeafoodPageProps> = ({ places }) => {
  const { t } = useTranslation('common');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'call' | 'website'>('description');

  return (
    <>
      <SEO
        title={t('seafoodCategory.seoTitle')}
        description={t('seafoodCategory.seoDescription')}
        ogImage="/images/restaurants-and-bars/seafood.jpg"
      />

      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/restaurants-and-bars/seafood.jpg"
          alt={t('seafoodCategory.heroAlt')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 to-black/55" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-white/90">
              {t('seafoodCategory.eyebrow')}
            </span>
            <h1 className="mt-2 mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
              {t('seafoodCategory.title')}
            </h1>
            <p className="text-base text-gray-200 md:text-lg">{t('seafoodCategory.intro')}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">{t('seafoodCategory.allTitle')}</h2>
          {places.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {places.map((place) => (
                <PlaceCard key={place.id} place={place} onClick={() => setSelectedPlace(place)} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">{t('seafoodCategory.empty')}</p>
          )}
        </div>
      </section>

      <section className="mt-4 mb-8">
        <div className="container mx-auto px-4">
          <AdUnit placement="mid-content" />
        </div>
      </section>

      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<SeafoodPageProps> = async ({ locale }) => {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .or(`category.eq.${SEAFOOD_CATEGORY},categories.cs.{${SEAFOOD_CATEGORY}}`)
    .order('featured', { ascending: false })
    .order('name', { ascending: true });

  if (error) console.error('Error fetching seafood places:', error.message);

  const places = (data || []).map((row) => {
    const place = localizePlace(row, locale);
    return { ...place, imageUrl: place.image_url } as Place;
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      places,
    },
    revalidate: 3600,
  };
};

export default SeafoodPage;
