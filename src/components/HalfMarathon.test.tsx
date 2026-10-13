import { render, screen, fireEvent } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import HalfMarathonBanner from './home/HalfMarathonBanner';
import MedioMaratonCapitalDelDeporte2026 from '@/pages/events/medio-maraton-capital-del-deporte-2026';
import { buildHalfMarathonSchema, HALF_MARATHON_PATH, HALF_MARATHON_SOURCES } from '@/data/half-marathon-capital-2026';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'en', asPath: '/events/medio-maraton-capital-del-deporte-2026' }) }));

const locales = ['en', 'es', 'de', 'ja'];
const load = (locale: string) => require(`../../public/locales/${locale}/half-marathon-capital.json`);

async function renderWith(locale: string, ui: React.ReactElement) {
  const i18n = createInstance();
  await i18n.init({ lng: locale, resources: { [locale]: { 'half-marathon-capital': load(locale) } }, defaultNS: 'half-marathon-capital', interpolation: { escapeValue: false } });
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
}

describe('Medio Maratón La Capital del Deporte 2026', () => {
  test.each(locales)('home banner links to the guide and tracks the click in %s', async (locale) => {
    const gtag = jest.fn();
    (window as unknown as { gtag: jest.Mock }).gtag = gtag;
    const content = load(locale);
    await renderWith(locale, <HalfMarathonBanner />);
    const link = screen.getByRole('link', { name: content.banner.cta });
    expect(link.getAttribute('href')).toBe(HALF_MARATHON_PATH);
    fireEvent.click(link);
    expect(gtag).toHaveBeenCalled();
  });

  test.each(locales)('renders the full guide with real translations in %s', async (locale) => {
    const content = load(locale);
    const { container } = await renderWith(locale, <MedioMaratonCapitalDelDeporte2026 />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(content.banner.title);
    expect(screen.getByText(content.kits.warning)).toBeTruthy();
    for (const faq of content.faq.items) expect(screen.getByText(faq.q)).toBeTruthy();
    const official = screen.getAllByRole('link', { name: content.hero.ctaRegister });
    expect(official[0].getAttribute('href')).toBe(HALF_MARATHON_SOURCES.convocatoria);
    expect(container.textContent).not.toMatch(/\b(hero|banner|faq|kits|registration)\.\w+/);
  });

  test.each(locales)('keeps the core race facts in %s', (locale) => {
    const text = JSON.stringify(load(locale));
    for (const fact of ['7:05', '5,000', 'slp.deportesocial2427@gmail.com', '1580']) {
      expect(text.replace('5.000', '5,000')).toContain(fact);
    }
  });

  it('describes a free race on November 8 in structured data', () => {
    const schema = buildHalfMarathonSchema(load('es').faq.items);
    const [event, faq] = schema['@graph'] as Array<Record<string, any>>;
    expect(event.startDate).toBe('2026-11-08T07:05:00-06:00');
    expect(event.isAccessibleForFree).toBe(true);
    expect(event.offers.every((o: { price: string }) => o.price === '0')).toBe(true);
    expect(faq.mainEntity).toHaveLength(load('es').faq.items.length);
  });
});
