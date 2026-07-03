-- Create trending_topics table for "talk of the town" social conversation topics
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS trending_topics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_es TEXT NOT NULL,
  title_en TEXT,
  title_de TEXT,
  title_ja TEXT,
  summary_es TEXT,
  summary_en TEXT,
  summary_de TEXT,
  summary_ja TEXT,
  category TEXT, -- debate | viral | event | controversy | culture | sports | community
  source TEXT,
  url TEXT,
  priority INT DEFAULT 1,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for the active-rotation read pattern (active rows ordered by priority)
CREATE INDEX IF NOT EXISTS idx_trending_topics_active_priority
  ON trending_topics (active, priority);

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_trending_topics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS trigger_trending_topics_updated_at ON trending_topics;
CREATE TRIGGER trigger_trending_topics_updated_at
  BEFORE UPDATE ON trending_topics
  FOR EACH ROW
  EXECUTE FUNCTION update_trending_topics_updated_at();

-- Grant permissions for anon role (for public API access)
GRANT SELECT ON trending_topics TO anon;
GRANT SELECT ON trending_topics TO authenticated;
