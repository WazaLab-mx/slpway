-- Discover/hook headline, separate from the SEO title.
-- The SEO <title> tag stays keyword-optimized (title / meta_title); the
-- discover_title (when set) drives the scroll-stopping headline that Google
-- Discover, social cards (og:title) and the visible H1 show. Falls back to
-- title when null. One column per locale to match the blog_posts i18n scheme.
ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS discover_title    text,
  ADD COLUMN IF NOT EXISTS discover_title_es text,
  ADD COLUMN IF NOT EXISTS discover_title_de text,
  ADD COLUMN IF NOT EXISTS discover_title_ja text;
