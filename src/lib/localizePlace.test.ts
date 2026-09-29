import { localizePlace } from './localizePlace';

const place = {
  id: 'p1',
  name: 'Jijos del Mar',
  description: 'Busy open-air seafood spot.',
  name_es: 'Jijos del Mar',
  description_es: 'Marisquería al aire libre.',
  name_de: null,
  description_de: 'Open-Air-Fischrestaurant.',
};

describe('localizePlace', () => {
  it('uses the Spanish description for es', () => {
    expect(localizePlace(place, 'es').description).toBe('Marisquería al aire libre.');
  });

  it('uses the German description for de and falls back to the base name', () => {
    const out = localizePlace(place, 'de');
    expect(out.description).toBe('Open-Air-Fischrestaurant.');
    expect(out.name).toBe('Jijos del Mar');
  });

  it('keeps the English base for en and ja', () => {
    expect(localizePlace(place, 'en').description).toBe('Busy open-air seafood spot.');
    expect(localizePlace(place, 'ja').description).toBe('Busy open-air seafood spot.');
  });

  it('drops the per-locale columns from the result', () => {
    expect(Object.keys(localizePlace(place, 'es'))).toEqual(['id', 'name', 'description']);
  });
});
