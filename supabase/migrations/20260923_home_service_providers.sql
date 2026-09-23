-- Home-service providers (plumbing, electrical, ...) for /san-luis-potosi-home-services.
-- Rows come from scripts/home-services/discover.js: Google Places for hard data,
-- web search as a second source, Jev (TypeSafe) for review judgments.
-- No review text is stored — only Google's place_id, the aggregate rating
-- (refreshed on every run, see rating_checked_at) and our own derived scores.
CREATE TABLE IF NOT EXISTS public.home_service_providers (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_place_id     text UNIQUE NOT NULL,
  name                text NOT NULL,
  category            text NOT NULL CHECK (category IN (
    'plumbing', 'electrical', 'locksmith', 'hvac', 'appliance_repair', 'carpentry',
    'painting', 'masonry', 'waterproofing', 'ironwork', 'gardening', 'cleaning',
    'pest_control', 'glass'
  )),
  phone               text,
  website             text,
  social_url          text,
  address             text,
  maps_url            text,
  business_status     text,
  offers_emergency    boolean NOT NULL DEFAULT false,
  google_rating       numeric(2, 1),
  google_review_count integer NOT NULL DEFAULT 0,
  rating_checked_at   timestamptz,
  -- Automatic verification: operating on Google + phone + an independent web presence.
  auto_verified       boolean NOT NULL DEFAULT false,
  verification        jsonb NOT NULL DEFAULT '{}'::jsonb,
  -- Manual badge: set only after San Luis Way confirms the business by phone/WhatsApp.
  slw_verified_at     timestamptz,
  jev_scores          jsonb NOT NULL DEFAULT '{}'::jsonb,
  jev_evaluated_at    timestamptz,
  rank_score          numeric(5, 4) NOT NULL DEFAULT 0,
  active              boolean NOT NULL DEFAULT true,
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS home_service_providers_category_rank_idx
  ON public.home_service_providers (category, rank_score DESC)
  WHERE active;

ALTER TABLE public.home_service_providers ENABLE ROW LEVEL SECURITY;

-- Public read of active rows only; writes go through the service role (bypasses RLS).
DROP POLICY IF EXISTS "Active home service providers are public" ON public.home_service_providers;
CREATE POLICY "Active home service providers are public"
  ON public.home_service_providers FOR SELECT
  TO anon, authenticated
  USING (active);
