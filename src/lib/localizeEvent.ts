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

export type LocalizedEvent<T extends LocalizableEvent> = T & { base_title: string };

function isExtraLocale(locale: string | undefined): locale is ExtraLocale {
  return (EXTRA_LOCALES as readonly string[]).includes(locale ?? '');
}

export function localizeEvent<T extends LocalizableEvent>(event: T, locale: string | undefined): LocalizedEvent<T> {
  const base_title = event.base_title ?? event.title;
  if (!isExtraLocale(locale)) return { ...event, base_title };
  const title = event[`title_${locale}`];
  const description = event[`description_${locale}`];
  return {
    ...event,
    base_title,
    title: title && title.trim() ? title : event.title,
    description: description && description.trim() ? description : event.description,
  };
}

export function localizeEvents<T extends LocalizableEvent>(events: T[], locale: string | undefined): LocalizedEvent<T>[] {
  return events.map((event) => localizeEvent(event, locale));
}
