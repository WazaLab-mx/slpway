import { render, screen } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import EventCarouselBanner from './EventCarouselBanner';
import Xantolo2026 from '@/pages/events/xantolo-2026';
import { getServerSideProps } from '@/pages/events/fenapo-2026';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'en', asPath: '/events/xantolo-2026' }) }));

const locales = ['en', 'es', 'de', 'ja'];
describe('Xantolo seasonal feature', () => {
  test.each(locales)('renders the guide and home link in %s with real translations', async (locale) => {
    const content = require(`../../public/locales/${locale}/xantolo.json`);
    const i18n = createInstance();
    await i18n.init({ lng: locale, resources: { [locale]: { xantolo: content } }, defaultNS: 'xantolo', interpolation: { escapeValue: false } });
    const { container } = render(<I18nextProvider i18n={i18n}><EventCarouselBanner /><Xantolo2026 /></I18nextProvider>);
    expect(screen.getAllByRole('link', { name: content.banner.cta }).map(link => link.getAttribute('href'))).toContain('/events/xantolo-2026');
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Xantolo 2026');
    expect(screen.getByText(content.status.description)).toBeTruthy();
    expect(screen.getByRole('link', { name: content.actions.official }).getAttribute('href')).toBe('https://cultura.slp.gob.mx/');
    expect(container.textContent).not.toMatch(/FENAPO|hero\.|banner\.|status\./);
  });

  test.each(locales)('redirects the retired fair route preserving %s', async (locale) => {
    const result = await getServerSideProps({ locale, defaultLocale: 'en' } as never);
    expect(result).toEqual({ redirect: { destination: `${locale === 'en' ? '' : `/${locale}`}/events/xantolo-2026`, permanent: false } });
  });
});
