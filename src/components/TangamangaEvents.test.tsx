import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import TangamangaEvents from './TangamangaEvents';
import { Event } from '@/types';
import { buildEventPath } from '@/lib/event-slug';

// Organizer listing: https://app.sportwey.com/tournament/7b07bd83-99d8-11f1-93c0-0a2bbad5892d
const event: Event = {
  id: '7b07bd83-99d8-11f1-93c0-0a2bbad5892d', title: 'San Luis Bowl 2026',
  location: 'Parque Tangamanga I', start_date: '2026-09-18', end_date: '2026-09-20',
  category: 'sports', description: null, image_url: null, featured: false, family_friendly: true,
};

async function renderSection(locale: string, events: Event[] = [], unavailable = false) {
  const i18n = createInstance();
  const copy = require(`../../public/locales/${locale}/park-events.json`);
  await i18n.init({ lng: locale, defaultNS: 'park-events', resources: { [locale]: { 'park-events': copy } } });
  render(<I18nextProvider i18n={i18n}><TangamangaEvents events={events} unavailable={unavailable} /></I18nextProvider>);
  return copy;
}

test.each(['en', 'es', 'de', 'ja'])('keeps an honest localized empty state and calendar link in %s', async locale => {
  const copy = await renderSection(locale);
  expect(screen.getByRole('heading', { name: copy.title })).toBeVisible();
  expect(screen.getByRole('heading', { name: copy.emptyTitle })).toBeVisible();
  expect(screen.getByRole('link', { name: copy.allEvents })).toHaveAttribute('href', '/events');
});

test('distinguishes a loading failure from an empty calendar', async () => {
  const copy = await renderSection('es', [], true);
  expect(screen.getByText(copy.unavailableTitle)).toBeVisible();
  expect(screen.queryByText(copy.emptyTitle)).not.toBeInTheDocument();
});

test.each(['en', 'es', 'de', 'ja'])('localizes dates, categories and family labels without shifting date-only values in %s', async locale => {
  jest.useFakeTimers().setSystemTime(new Date('2026-09-08T18:00:00Z'));
  try {
    const copy = await renderSection(locale, [event]);
    expect(screen.getByText(copy.categories.sports)).toBeVisible();
    expect(screen.getByText(copy.familyFriendly)).toBeVisible();
    const format = (day: string) => new Intl.DateTimeFormat(locale, { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(day));
    expect(screen.getByText(`${format('2026-09-18')} – ${format('2026-09-20')}`)).toBeVisible();
  } finally { jest.useRealTimers(); }
});

test('links to the event detail and expires the event at the end of its local final day', async () => {
  jest.useFakeTimers().setSystemTime(new Date('2026-09-21T05:59:59Z'));
  try {
    const copy = await renderSection('en', [event]);
    expect(screen.getByRole('link', { name: /San Luis Bowl 2026/ })).toHaveAttribute('href', buildEventPath(event));
    act(() => { jest.advanceTimersByTime(30_000); });
    expect(screen.queryByText(event.title)).not.toBeInTheDocument();
    expect(screen.getByText(copy.emptyTitle)).toBeVisible();
  } finally {
    jest.useRealTimers();
  }
});
