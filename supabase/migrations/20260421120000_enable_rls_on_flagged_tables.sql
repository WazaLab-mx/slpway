-- Supabase Advisor flagged 5 public-schema tables as missing RLS
-- (rls_disabled_in_public, 2026-04-21). Enabling RLS + adding the minimum
-- policies each needs:
--
--  * categories, brands_categories, events_categories, services_categories
--    are read-only reference / join tables used by the public site. They
--    should be readable by anon (for the frontend) and writable only by
--    service_role (bypasses RLS automatically, no explicit policy needed).
--
--  * places_backup is a throwaway backup of an old snapshot. Nothing on the
--    public site needs to read it. Enable RLS without any permissive
--    policy — service_role still bypasses RLS for our own admin scripts.

-- === categories (reference) ===========================================
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "categories_public_read" ON public.categories;
CREATE POLICY "categories_public_read" ON public.categories
  FOR SELECT
  USING (true);

-- === brands_categories (join) =========================================
ALTER TABLE public.brands_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "brands_categories_public_read" ON public.brands_categories;
CREATE POLICY "brands_categories_public_read" ON public.brands_categories
  FOR SELECT
  USING (true);

-- === events_categories (join) =========================================
ALTER TABLE public.events_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "events_categories_public_read" ON public.events_categories;
CREATE POLICY "events_categories_public_read" ON public.events_categories
  FOR SELECT
  USING (true);

-- === services_categories (join) =======================================
ALTER TABLE public.services_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "services_categories_public_read" ON public.services_categories;
CREATE POLICY "services_categories_public_read" ON public.services_categories
  FOR SELECT
  USING (true);

-- === places_backup (not for public consumption) =======================
ALTER TABLE public.places_backup ENABLE ROW LEVEL SECURITY;
-- no permissive policy — only service_role (which bypasses RLS) can touch it
