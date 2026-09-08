import React from 'react';
import { render, screen } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import SocialTrendsSection from './SocialTrendsSection';
import captured from '../../../__tests__/fixtures/social-topics-2026-09-07.json';
import type { TrendingTopic } from '@/lib/api/dashboard-data';

const topics: TrendingTopic[] = captured.map((topic, index) => ({
  id: String(index), category: topic.category as TrendingTopic['category'],
  titleEs: topic.title_es, titleEn: topic.title_en, titleDe: topic.title_de, titleJa: topic.title_ja,
  summaryEs: topic.summary_es, summaryEn: topic.summary_en, summaryDe: topic.summary_de, summaryJa: topic.summary_ja,
  source: topic.source, sourceUrl: topic.url, verifiedAt: topic.evidence.observedAt,
}));

async function renderSection(locale: string, data = topics, loading = false) {
  const i18n = createInstance();
  const copy = require(`../../../public/locales/${locale}/common.json`);
  await i18n.init({ lng: locale, defaultNS: 'common', resources: { [locale]: { common: copy } } });
  render(<I18nextProvider i18n={i18n}><SocialTrendsSection topics={data} locale={locale} loading={loading} /></I18nextProvider>);
  return copy.todayInSLP;
}

test.each(['en', 'es', 'de', 'ja'])('shows sourced conversations and verification dates in %s', async locale => {
  const copy = await renderSection(locale);
  expect(screen.getByRole('heading', { name: copy.trendingTitle })).toBeVisible();
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getAllByRole('link').map(link => link.getAttribute('href'))).toEqual(captured.map(topic => topic.url));
  expect(screen.getAllByText(new RegExp(copy.trendingChecked))).toHaveLength(3);
});

test.each([true, false])('keeps the section visible without topics, loading=%s', async loading => {
  const copy = await renderSection('en', [], loading);
  expect(screen.getByRole('heading', { name: copy.trendingTitle })).toBeVisible();
  expect(screen.getByRole('status')).toHaveTextContent(loading ? copy.trendingLoading : copy.trendingChecking);
  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.reddit.com/r/SanLuisPotosi/');
});
