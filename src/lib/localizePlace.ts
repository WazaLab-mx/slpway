// Per-locale copy for places. `name` / `description` are the base (English);
// `name_es`, `description_de`, etc. override them when present. Anything
// untranslated falls back to the base per field.

const PLACE_LOCALES = ['es', 'de'] as const;
type PlaceLocale = (typeof PLACE_LOCALES)[number];

type PlaceLocaleFields = Partial<Record<`name_${PlaceLocale}` | `description_${PlaceLocale}`, string | null>>;

interface LocalizablePlace extends PlaceLocaleFields {
  name: string;
  description?: string | null;
}

export function localizePlace<T extends LocalizablePlace>(
  place: T,
  locale: string | undefined
): Omit<T, keyof PlaceLocaleFields> {
  const { name_es, name_de, description_es, description_de, ...rest } = place;
  const translations = { es: [name_es, description_es], de: [name_de, description_de] };
  if (locale !== 'es' && locale !== 'de') return rest;
  const [name, description] = translations[locale];
  return { ...rest, name: name || rest.name, description: description || rest.description };
}
