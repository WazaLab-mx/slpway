import i18next from 'i18next';
import { humanizeCategory, placeCategoryLabel } from './placeCategoryLabel';
import es from '../../public/locales/es/common.json';
import en from '../../public/locales/en/common.json';
import de from '../../public/locales/de/common.json';
import ja from '../../public/locales/ja/common.json';

const translatorFor = async (lng: string, resources: object) => {
  const i18n = i18next.createInstance();
  await i18n.init({ lng, resources: { [lng]: { common: resources } }, defaultNS: 'common' });
  return (key: string, fallback: string) => i18n.t(key, fallback);
};

describe('placeCategoryLabel', () => {
  it('humanizes slugs', () => {
    expect(humanizeCategory('local-food')).toBe('Local Food');
  });

  it('shows "Marisquerías" for seafood in Spanish', async () => {
    expect(placeCategoryLabel('seafood', await translatorFor('es', es))).toBe('Marisquerías');
  });

  it.each([['en', en], ['de', de], ['ja', ja]])('has a seafood label in %s', async (lng, resources) => {
    const label = placeCategoryLabel('seafood', await translatorFor(lng, resources));
    expect(label).not.toBe('placeCategories.seafood');
    expect(label.length).toBeGreaterThan(0);
  });

  it('falls back to the humanized slug for untranslated categories', async () => {
    expect(placeCategoryLabel('local-food', await translatorFor('es', es))).toBe('Local Food');
  });
});
