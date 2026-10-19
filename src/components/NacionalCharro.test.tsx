import { render, screen, fireEvent } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import NacionalCharroBanner from './home/NacionalCharroBanner';
import NacionalCharro2026 from '@/pages/events/nacional-charro-2026';
import { buildNacionalCharroSchema, NACIONAL_CHARRO_PATH, NACIONAL_CHARRO_TICKETS_URL } from '@/data/nacional-charro-2026';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'en', asPath: '/events/nacional-charro-2026' }) }));

const locales = ['en', 'es', 'de', 'ja'];
const load = (locale: string) => require(`../../public/locales/${locale}/nacional-charro.json`);

async function renderWith(locale: string, ui: React.ReactElement) {
  const i18n = createInstance();
  await i18n.init({ lng: locale, resources: { [locale]: { 'nacional-charro': load(locale) } }, defaultNS: 'nacional-charro', interpolation: { escapeValue: false } });
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
}

describe('Nacional Charro 2026', () => {
  test.each(locales)('home banner links to the guide and tracks the click in %s', async (locale) => {
    const gtag = jest.fn();
    (window as unknown as { gtag: jest.Mock }).gtag = gtag;
    await renderWith(locale, <NacionalCharroBanner />);
    const link = screen.getByRole('link', { name: load(locale).banner.cta });
    expect(link.getAttribute('href')).toBe(NACIONAL_CHARRO_PATH);
    fireEvent.click(link);
    expect(gtag).toHaveBeenCalled();
  });

  test.each(locales)('renders the guide with real translations in %s', async (locale) => {
    const content = load(locale);
    const { container } = await renderWith(locale, <NacionalCharro2026 />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(content.banner.title);
    for (const faq of content.faq.items) expect(screen.getByText(faq.q)).toBeTruthy();
    expect(screen.getByRole('link', { name: content.hero.ctaTickets }).getAttribute('href')).toBe(NACIONAL_CHARRO_TICKETS_URL);
    expect(container.textContent).not.toMatch(/\b(hero|banner|faq|tickets|facts|watch|tips)\.\w+/);
  });

  test.each(locales)('keeps the official ticket prices and team counts in %s', (locale) => {
    const text = JSON.stringify(load(locale));
    for (const fact of ['115', '175', '290', '345', '2,300|2.300', '5,265|5.265', '5,850|5.850', '171', '160']) {
      expect(text).toMatch(new RegExp(fact));
    }
  });

  it('describes an Oct 9 – Nov 1 championship at Arena Potosí', () => {
    const [event, faq] = buildNacionalCharroSchema(load('es').faq.items)['@graph'] as Array<Record<string, any>>;
    expect(event.startDate).toBe('2026-10-09');
    expect(event.endDate).toBe('2026-11-01');
    expect(event.location.name).toBe('Arena Potosí');
    expect(event.offers.map((o: { price: string }) => o.price)).toEqual(['115', '290', '175', '345', '2300', '5265', '5850']);
    expect(faq.mainEntity).toHaveLength(load('es').faq.items.length);
  });
});
