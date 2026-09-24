-- Removes the business-subscription coupon system (added in
-- 20241201000000_add_coupon_system.sql). The code that used it was removed in
-- d51e564; the business model moved from subscriptions to selling ads.
-- Data at drop time: admin_coupons had 1 row (AMIGOSSLPWAY), coupon_usage 0 rows.
-- Backup: backups/coupons-drop-2026-09-23/before.json (git-ignored).
DROP TABLE IF EXISTS public.coupon_usage;
DROP TABLE IF EXISTS public.admin_coupons;

-- These columns were never applied in production; IF EXISTS keeps this safe
-- for any environment where they were.
ALTER TABLE public.business_profiles
  DROP COLUMN IF EXISTS coupon_used,
  DROP COLUMN IF EXISTS coupon_applied_at,
  DROP COLUMN IF EXISTS coupon_discount_amount,
  DROP COLUMN IF EXISTS coupon_discount_percent;
