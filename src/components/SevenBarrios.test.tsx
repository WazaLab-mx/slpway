import { render, screen, within } from '@testing-library/react';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import SevenBarriosPage from '@/pages/seven-barrios-san-luis-potosi';
import { BARRIOS, buildPlaceUrl, buildWalkingRouteUrl } from '@/lib/seven-barrios';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'en', asPath: '/seven-barrios-san-luis-potosi' }) }));

const locales = ['en', 'es', 'de', 'ja'];
const load = (locale: string) => require(`../../public/locales/${locale}/seven-barrios.json`);

function keyPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return value.flatMap((v, i) => keyPaths(v, `${prefix}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k));
  }
  return [prefix];
}

async function renderIn(locale: string) {
  const i18n = createInstance();
  await i18n.init({ lng: locale, resources: { [locale]: { 'seven-barrios': load(locale) } }, defaultNS: 'seven-barrios', interpolation: { escapeValue: false } });
  return render(<I18nextProvider i18n={i18n}><SevenBarriosPage /></I18nextProvider>);
}

describe('Seven barrios page', () => {
  test.each(locales.slice(1))('%s locale has exactly the same keys as en', (locale) => {
    expect(keyPaths(load(locale)).sort()).toEqual(keyPaths(load('en')).sort());
  });

  test.each(locales)('renders real translations, the map and every barrio in %s', async (locale) => {
    const content = load(locale);
    const { container } = await renderIn(locale);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(content.hero.title);

    const map = screen.getByRole('img', { name: content.map.svgTitle });
    BARRIOS.forEach((barrio, index) => {
      const label = content.map.markerLabel.replace('{{number}}', String(index + 1)).replace('{{name}}', barrio.name);
      expect(within(map).getByRole('group', { name: label })).toBeTruthy();
      expect(screen.getByRole('heading', { level: 3, name: `Barrio de ${barrio.name}` })).toBeTruthy();
      expect(container.querySelector(`a[href="${buildPlaceUrl(barrio)}"]`)).not.toBeNull();
    });

    const routeLink = screen.getByRole('link', { name: content.route.cta });
    expect(routeLink.getAttribute('href')).toBe(buildWalkingRouteUrl());
    for (const faq of content.faq.items) expect(screen.getByText(faq.q)).toBeTruthy();
    expect(container.textContent).not.toMatch(/\b(hero|map|route|barrios|practical|faq)\.[a-z]/);
  });

  test.each(locales)('keeps the verified founding years and the 1948 monument in %s', (locale) => {
    const text = JSON.stringify(load(locale));
    for (const fact of ['1592', '1597', '1603', '1676', '1888', '1948', '1772', '13 km']) expect(text).toContain(fact);
    expect(text).not.toMatch(/Otom|Taras|1551/);
  });
});
