import { render, screen, fireEvent } from '@testing-library/react';
import { existsSync } from 'fs';
import path from 'path';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import InstagramLinkHub from '@/pages/ig';
import { LINK_HUB_ITEMS } from '@/data/ig-link-hub';

jest.mock('next/router', () => ({ useRouter: () => ({ locale: 'es', asPath: '/ig' }) }));

const locales = ['en', 'es', 'de', 'ja'];
const load = (locale: string) => require(`../../public/locales/${locale}/link-hub.json`);

async function renderIn(locale: string) {
  const i18n = createInstance();
  await i18n.init({ lng: locale, resources: { [locale]: { 'link-hub': load(locale) } }, defaultNS: 'link-hub', interpolation: { escapeValue: false } });
  return render(<I18nextProvider i18n={i18n}><InstagramLinkHub /></I18nextProvider>);
}

describe('Instagram link hub (/ig)', () => {
  test.each(locales)('lists every guide with a real label and tracks taps in %s', async (locale) => {
    const gtag = jest.fn();
    (window as unknown as { gtag: jest.Mock }).gtag = gtag;
    const { container } = await renderIn(locale);
    for (const item of LINK_HUB_ITEMS) {
      const link = screen.getByText(load(locale).items[item.id].label).closest('a');
      expect(link?.getAttribute('href')).toBe(item.href);
    }
    fireEvent.click(screen.getByText(load(locale).items[LINK_HUB_ITEMS[0].id].label));
    expect(gtag).toHaveBeenCalled();
    expect(container.textContent).not.toMatch(/items\.\w+\.(label|detail)/);
  });

  it('only links to pages that exist', () => {
    for (const { href } of LINK_HUB_ITEMS) {
      const base = path.join(__dirname, '../pages', href);
      const blogPost = path.join(__dirname, '../pages/blog/[slug].tsx');
      const isPostSlug = /^\/blog\/[a-z0-9-]+$/.test(href) && existsSync(blogPost);
      expect(existsSync(`${base}.tsx`) || existsSync(path.join(base, 'index.tsx')) || isPostSlug).toBe(true);
    }
  });
});
