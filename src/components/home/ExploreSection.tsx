import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { CalendarDaysIcon, SparklesIcon, BuildingLibraryIcon, SunIcon } from '@heroicons/react/24/outline';

const categories = [
  { key: 'events', href: '/events', icon: CalendarDaysIcon },
  { key: 'dining', href: '/restaurants', icon: SparklesIcon },
  { key: 'culture', href: '/cultural', icon: BuildingLibraryIcon },
  { key: 'outdoors', href: '/outdoors', icon: SunIcon },
];

export default function ExploreSection() {
  const { t } = useTranslation('common');
  return (
    <section id="explore" className="home-explore" aria-labelledby="explore-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="home-explore-heading">
          <h2 id="explore-title" className="font-serif">{t('homepage.explore.title')}</h2>
          <p>{t('homepage.explore.description')}</p>
        </div>
        <nav aria-label={t('homepage.explore.title')} className="home-explore-grid">
          {categories.map(({ key, href, icon: Icon }, index) => (
            <Link key={key} href={href} className="home-explore-link">
              <span className="home-explore-icon"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <small aria-hidden="true">0{index + 1} /</small>
                <strong>{t(`homepage.explore.${key}`)}</strong>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
