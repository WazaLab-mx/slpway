import { render, screen, fireEvent } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import RealPotosiRunBanner from './home/RealPotosiRunBanner';
import CarreraRealDelPotosi2026 from '@/pages/events/carrera-real-del-potosi-2026';
import { buildRealPotosiSchema, REAL_POTOSI_PATH, REAL_POTOSI_REGISTRATION_URL } from '@/data/real-potosi-run-2026';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'en', asPath: '/events/carrera-real-del-potosi-2026' }) }));

const locales = ['en', 'es', 'de', 'ja'];
const load = (locale: string) => require(`../../public/locales/${locale}/real-potosi-run.json`);

async function renderWith(locale: string, ui: React.ReactElement) {
  const i18n = createInstance();
  await i18n.init({ lng: locale, resources: { [locale]: { 'real-potosi-run': load(locale) } }, defaultNS: 'real-potosi-run', interpolation: { escapeValue: false } });
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
}

describe('Carrera Real del Potosí 2026', () => {
  test.each(locales)('slim home banner links to the guide and tracks the click in %s', async (locale) => {
    const gtag = jest.fn();
    (window as unknown as { gtag: jest.Mock }).gtag = gtag;
    await renderWith(locale, <RealPotosiRunBanner />);
    const link = screen.getByRole('link', { name: load(locale).banner.cta });
    expect(link.getAttribute('href')).toBe(REAL_POTOSI_PATH);
    fireEvent.click(link);
    expect(gtag).toHaveBeenCalled();
  });

  test.each(locales)('renders the guide with real translations in %s', async (locale) => {
    const content = load(locale);
    const { container } = await renderWith(locale, <CarreraRealDelPotosi2026 />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(content.banner.title);
    for (const faq of content.faq.items) expect(screen.getByText(faq.q)).toBeTruthy();
    expect(screen.getByRole('link', { name: content.hero.ctaRegister }).getAttribute('href')).toBe(REAL_POTOSI_REGISTRATION_URL);
    expect(container.textContent).not.toMatch(/\b(hero|banner|faq|kit|facts)\.\w+/);
  });

  test.each(locales)('keeps the core race facts in %s', (locale) => {
    const text = JSON.stringify(load(locale));
    for (const fact of ['375', '10', '17']) expect(text).toContain(fact);
  });

  it('describes a $375 MXN race on October 17 at 7 p.m.', () => {
    const [event, faq] = buildRealPotosiSchema(load('es').faq.items)['@graph'] as Array<Record<string, any>>;
    expect(event.startDate).toBe('2026-10-17T19:00:00-06:00');
    expect(event.offers.map((o: { name: string; price: string }) => `${o.name}:${o.price}`)).toEqual(['3K:375', '6K:375', '10K:375']);
    expect(faq.mainEntity).toHaveLength(load('es').faq.items.length);
  });
});
