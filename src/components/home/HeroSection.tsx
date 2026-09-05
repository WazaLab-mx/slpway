import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <section id="hero-001" className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-eyebrow">{t('homepage.hero.badge')}</p>
          <h1 id="home-title" className="font-serif">
            {t('homepage.hero.editorialTitle')}<br />
            <em>{t('homepage.hero.title2')}</em>
          </h1>
          <p className="home-hero-description">{t('homepage.hero.editorialDescription')}</p>
          <div className="home-actions">
            <Link href="#explore" className="home-button home-button-primary">
              {t('homepage.hero.cta1')}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/places" className="home-button home-button-secondary">
              {t('homepage.hero.cta2')}
            </Link>
          </div>
        </div>
        <div className="home-hero-photo">
          <Image src="/images/hero-bg.jpg" alt="San Luis Potosí" fill priority
            fetchPriority="high" sizes="(max-width: 639px) 100vw, 50vw" quality={75} />
          <div className="home-photo-caption">
            <MapPinIcon className="h-6 w-6 text-primary" aria-hidden="true" />
            <div>
              <span className="font-serif text-2xl">{t('homepage.hero.photoTitle')}</span>
              <small>San Luis Potosí, México</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
