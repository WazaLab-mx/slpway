import { render, screen } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import EventsPreview from './EventsPreview';
import { Event } from '@/types';

it('omits the end-date range when an upcoming event has no end date', async () => {
  const i18n = createInstance();
  await i18n.init({ lng: 'en', resources: { en: { common: require('../../../public/locales/en/common.json') } }, defaultNS: 'common' });
  const event = {
    id: 'open-ended', title: 'Open-ended event', start_date: '2099-09-08T18:00:00-06:00',
    end_date: null, location: 'San Luis Potosi', category: 'music', image_url: null,
  } as unknown as Event;
  render(<I18nextProvider i18n={i18n}><EventsPreview events={[event]} /></I18nextProvider>);
  expect(screen.getByText(event.title)).toBeInTheDocument();
  expect(screen.queryByText(new RegExp(i18n.t('homepage.events.until')))).not.toBeInTheDocument();
});
