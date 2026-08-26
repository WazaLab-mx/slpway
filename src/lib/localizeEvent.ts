// Per-locale copy for events. `title` / `description` are the English base;
// `title_es` etc. are optional overrides (same scheme as blog_posts). Every
// page that serves events runs rows through here so the reader's locale wins
// and anything untranslated falls back to English per field.

const EXTRA_LOCALES = ['es', 'de', 'ja'] as const;
type ExtraLocale = (typeof EXTRA_LOCALES)[number];

export type EventLocaleFields = Partial<
  Record<`title_${ExtraLocale}` | `description_${ExtraLocale}`, string | null>
>;

// Append to explicit `.select(...)` lists that don't use '*'.
export const EVENT_LOCALE_COLUMNS =
  'title_es, title_de, title_ja, description_es, description_de, description_ja';

interface LocalizableEvent extends EventLocaleFields {
  title: string;
  description: string | null;
  /** English base title, kept so URL slugs stay identical across locales. */
  base_title?: string;
}

export type LocalizedEvent<T extends LocalizableEvent> = Omit<T, keyof EventLocaleFields> & { base_title: string };

function isExtraLocale(locale: string | undefined): locale is ExtraLocale {
  return (EXTRA_LOCALES as readonly string[]).includes(locale ?? '');
}

// Resolves title/description for the locale and drops the per-locale columns
// so page props / API payloads don't ship every translation to the client.
export function localizeEvent<T extends LocalizableEvent>(event: T, locale: string | undefined): LocalizedEvent<T> {
  const { title_es, title_de, title_ja, description_es, description_de, description_ja, ...rest } = event;
  const translations = { es: [title_es, description_es], de: [title_de, description_de], ja: [title_ja, description_ja] };
  const base_title = event.base_title ?? event.title;
  if (!isExtraLocale(locale)) return { ...rest, base_title };
  const [title, description] = translations[locale];
  return {
    ...rest,
    base_title,
    title: title && title.trim() ? title : event.title,
    description: description && description.trim() ? description : event.description,
  };
}

export function localizeEvents<T extends LocalizableEvent>(events: T[], locale: string | undefined): LocalizedEvent<T>[] {
  return events.map((event) => localizeEvent(event, locale));
}
