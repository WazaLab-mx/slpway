import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import HeroSection from './HeroSection';
import ExploreSection from './ExploreSection';
import DiningSection from './DiningSection';

async function renderHome(locale: string) {
  const i18n = createInstance();
  await i18n.init({
    lng: locale,
    defaultNS: 'common',
    resources: { [locale]: { common: require(`../../../public/locales/${locale}/common.json`) } },
    interpolation: { escapeValue: false },
  });
  return render(
    <I18nextProvider i18n={i18n}>
      <HeroSection />
      <ExploreSection />
      <DiningSection />
    </I18nextProvider>,
  );
}

describe('Editorial homepage', () => {
  it.each(['es', 'en', 'de', 'ja'])('offers translated discovery paths in %s', async locale => {
    await renderHome(locale);
    const copy = require(`../../../public/locales/${locale}/common.json`);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(copy.homepage.hero.title2);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(copy.homepage.hero.editorialTitle);
    expect(screen.getByText(copy.homepage.hero.editorialDescription)).toBeVisible();
    expect(screen.getByText(copy.homepage.hero.photoTitle)).toBeVisible();
    expect(copy.homepage.hero.editorialDescription).not.toContain('?');
    expect(copy.homepage.hero.photoTitle).not.toContain('?');
    expect(screen.getByRole('link', { name: copy.homepage.hero.cta1 })).toHaveAttribute('href', '#explore');
    const discovery = screen.getByRole('navigation', { name: copy.homepage.explore.title });
    expect(discovery.closest('section')).toHaveAttribute('id', 'explore');
    expect(within(discovery).getAllByRole('link').map(link => link.getAttribute('href')))
      .toEqual(['/events', '/restaurants', '/cultural', '/outdoors']);
    expect(discovery).not.toHaveTextContent('homepage.');
  });

  it('keeps all six dining destinations accessible', async () => {
    await renderHome('es');
    const dining = document.getElementById('dining-001')!;
    expect(within(dining).getAllByRole('link').map(link => link.getAttribute('href'))).toEqual([
      '/traditional-cuisine', '/restaurants', '/category/cocktail-bars',
      '/category/terraces', '/category/cantinas', '/category/live-music',
    ]);
    expect(within(dining).getAllByRole('img')).toHaveLength(6);
  });
});
