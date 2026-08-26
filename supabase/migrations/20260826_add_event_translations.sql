-- Per-locale event copy. `title` / `description` stay the English canonical
-- text (the site's default locale, and what 18 of the 27 upcoming events were
-- already written in). One nullable column per extra locale, matching the
-- blog_posts / discover_title i18n scheme. Pages fall back to title /
-- description when a locale column is null, so existing rows keep rendering.
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS title_es       text,
  ADD COLUMN IF NOT EXISTS title_de       text,
  ADD COLUMN IF NOT EXISTS title_ja       text,
  ADD COLUMN IF NOT EXISTS description_es text,
  ADD COLUMN IF NOT EXISTS description_de text,
  ADD COLUMN IF NOT EXISTS description_ja text;
