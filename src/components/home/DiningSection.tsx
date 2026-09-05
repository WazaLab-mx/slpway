import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function DiningSection() {
  const { t } = useTranslation('common');

  const diningCategories = [
    {
      key: 'traditional',
      image: '/images/restaurants-and-bars/traditional-restaurants.jpg',
      link: '/traditional-cuisine'
    },
    {
      key: 'modern',
      image: '/images/restaurants-and-bars/modern-restaurants.webp',
      link: '/restaurants'
    },
    {
      key: 'cocktails',
      image: '/images/restaurants-and-bars/cocktail-bars.webp',
      link: '/category/cocktail-bars'
    },
    {
      key: 'terraces',
      image: '/images/restaurants-and-bars/terraces.webp',
      link: '/category/terraces'
    },
    {
      key: 'cantinas',
      image: '/images/restaurants-and-bars/cantinas.jpg',
      link: '/category/cantinas'
    },
    {
      key: 'liveMusic',
      image: '/images/restaurants-and-bars/live-music.jpg',
      link: '/category/live-music'
    }
  ];

  return (
    <section id="dining-001" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="home-dining-heading">
          <div>
            <span className="home-eyebrow text-primary-900 mb-4">{t('homepage.dining.badge')}</span>
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
              {t('homepage.dining.title')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('homepage.dining.description')}
          </p>
        </div>

        <div className="home-dining-grid">
          {diningCategories.map((category, index) => (
            <article key={category.key} className="home-dining-card">
              <div className="home-dining-image">
                <Image
                  src={category.image}
                  alt={t(`homepage.dining.${category.key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <span className="home-dining-number" aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="home-dining-body">
                <h3 className="font-serif">{t(`homepage.dining.${category.key}.title`)}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(`homepage.dining.${category.key}.description`)}
                </p>
                <Link
                  href={category.link}
                  className="inline-flex items-center gap-2 text-primary-800 font-semibold hover:gap-3 transition-all"
                  aria-label={`${t(`homepage.dining.${category.key}.link`)}: ${t(`homepage.dining.${category.key}.title`)}`}
                >
                  {t(`homepage.dining.${category.key}.link`)} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
