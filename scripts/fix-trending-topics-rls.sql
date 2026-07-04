-- FIX: the home "temas de conversación" block stayed empty in production because
-- trending_topics has RLS enabled but no public-read policy, so the anon role
-- (used by the site) got 0 rows while service_role saw the data.
-- Run this in the Supabase SQL Editor. Mirrors the working news_headlines pattern.

ALTER TABLE trending_topics ENABLE ROW LEVEL SECURITY;

-- Public (anon) can read only active topics
DROP POLICY IF EXISTS "Allow public read access to active trending" ON trending_topics;
CREATE POLICY "Allow public read access to active trending"
ON trending_topics FOR SELECT
USING (active = true);

-- Service role keeps full access (insert/rotate from the cron)
DROP POLICY IF EXISTS "Allow service role full access trending" ON trending_topics;
CREATE POLICY "Allow service role full access trending"
ON trending_topics FOR ALL
USING (auth.role() = 'service_role');
