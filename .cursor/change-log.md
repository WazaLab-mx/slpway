# San Luis Way Project Change Log

This log tracks all changes made to the project for agent context and rollback reference.

## 2026-09-24 - Fixed Featured Ad Checkout Funnel

**Commit**: `e42bcde` - Fix Featured ad checkout funnel for guest and logged-in users
**Branch**: `cursor/fix-featured-ad-checkout-8661`
**PR**: https://github.com/WazaLab-mx/slpway/pull/1

### Problem Statement
The Stripe checkout funnel for business monetization was broken:
1. Guest users were redirected to /contact instead of Stripe Checkout
2. Price IDs were placeholders (`price_placeholder`) instead of real values
3. Webhook didn't set `is_featured` status on business_profiles after payment
4. Marketing pages only linked to contact form, not checkout
5. UX copy referred to "subscription" instead of "Featured ad" product

### Product Decision (from owner)
- Monetization pivot: Sell **Featured directory ads**, not business SaaS subscriptions
- Product: Featured placement in directory
- Pricing: Reuse existing Stripe prices (250 MXN/month, 2500 MXN/year)
- Goal: Business pays → listing marked featured/active

### Changes Made

#### 1. Subscription Page (`src/pages/business/subscription.tsx`)
- **Removed** forced redirect to /contact for logged-out users
- **Added** guest checkout support - Stripe collects email
- **Updated** all copy from "subscription" to "Featured ad" / "anuncio destacado"
- **Changed** feature list to emphasize directory prominence:
  - "Posición destacada en el directorio"
  - "Perfil personalizado con fotos y detalles"
  - "Aparece primero en búsquedas"
- **Changed** CTA button: "Destacar mi Negocio" (was "Suscribirse Ahora")

#### 2. Create Subscription API (`src/pages/api/subscriptions/create-subscription.ts`)
- **Removed** requirement for `user_id` - now optional
- **Added** support for guest checkout without user account
- **Modified** to conditionally set `customer_email` for Stripe to collect
- **Updated** metadata to include null userId for guests

#### 3. Stripe Webhook (`src/pages/api/webhook/stripe.ts`)
- **Added** `is_featured` status management:
  - Sets `is_featured: true` when subscription is 'active' or 'trialing'
  - Sets `is_featured: false` when subscription is 'canceled'
- **Enhanced** logging for featured status changes
- **Added** business_name default when creating new profiles from webhook

#### 4. Marketing Pages

**`src/pages/advertise.tsx`**
- Added callout above packages: "Get a Featured Directory Ad for $250 MXN/month"
- Links directly to `/business/subscription`

**`src/pages/media-kit.tsx`**
- Changed first product from "Featured business listing" to "Featured directory ad"
- Added `cta_link` property to link directly to checkout (not contact)
- CTA button changes from "Request details" to "Get started" for Featured ad

**`src/pages/join-directory.tsx`**
- Changed "Business Listing" section to "Featured Directory Ad"
- Updated copy to emphasize priority placement and visitor reach
- Updated benefits list:
  - "Priority placement at top of directory"
  - "Reach 15,000+ monthly visitors"
  - "From $250 MXN/month"
- Changed CTA from "Share Your Business" to "Get Featured"

#### 5. SubscriptionCTA Component (`src/components/SubscriptionCTA.tsx`)
- **Inline variant**: Changed emoji from 🏪 to ⭐, copy to "Get featured"
- **Card variant**: Title changed to "Get Featured", copy updated
- **Banner variant**: Title changed to "Get Featured — Reach 15,000+ Monthly Visitors"
- All CTA buttons now say "Get Featured" instead of "List Your Business"

#### 6. Success Page (`src/pages/business/subscription-success.tsx`)
- Page title: "¡Anuncio Destacado Activado!" (was "¡Suscripción Confirmada!")
- Updated all messaging to "Featured ad" language
- Benefits section now emphasizes:
  - "Posición Prioritaria" - top of directory placement
  - "Perfil Completo" - custom profile with photos
  - "15,000+ Visitantes" - reach metrics
- Added support email in error message

#### 7. Tests (`__tests__/integration/subscription-flow.test.ts`)
- Updated test for missing fields to expect "Missing required field" (singular)
- Replaced "user not found" test with guest checkout test
- Guest checkout test verifies:
  - 200 status for guest users
  - Checkout session created successfully
  - Metadata includes `userId: null`

#### 8. Documentation (`STRIPE_SETUP.md` - NEW)
Complete setup guide covering:
- Product overview and pricing
- Required environment variables with examples
- Step-by-step Stripe product/price setup
- Webhook configuration instructions
- Testing procedures (test mode and production)
- Database schema requirements
- Troubleshooting common issues
- How the guest/logged-in flows work
- Support contact information

### Environment Variables Required

**New/Critical:**
```bash
STRIPE_MONTHLY_PRICE_ID=price_...    # 250 MXN/month recurring
STRIPE_YEARLY_PRICE_ID=price_...     # 2500 MXN/year recurring
STRIPE_WEBHOOK_SECRET=whsec_...      # From Stripe webhook config
```

**Existing (already configured):**
```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://sanluisway.com
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

### Database Impact

Uses existing schema from migration `20240610000000_fix_subscriptions.sql`:
- `business_profiles.is_featured` - boolean flag
- `business_profiles.subscription_status` - text
- `business_profiles.subscription_id` - text
- `business_profiles.subscription_end_date` - timestamp
- `business_profiles.stripe_customer_id` - text

**No migration needed** - columns already exist.

### Testing Performed

**Manual Testing Required** (not automated):
1. Guest checkout flow
2. Logged-in checkout flow
3. Webhook activation of is_featured
4. Success page display
5. Marketing page links

### Deployment Checklist

Before deploying to production:
- [ ] Set `STRIPE_MONTHLY_PRICE_ID` in hosting environment
- [ ] Set `STRIPE_YEARLY_PRICE_ID` in hosting environment
- [ ] Set `STRIPE_WEBHOOK_SECRET` in hosting environment
- [ ] Configure Stripe webhook endpoint at `https://sanluisway.com/api/webhook/stripe`
- [ ] Test guest checkout with real payment (can refund)
- [ ] Verify is_featured status set in database
- [ ] Monitor Stripe webhook events for success

### Rollback Instructions

If issues occur:
```bash
git checkout main
git revert e42bcde
git push origin main
```

Or merge a revert PR.

**Note**: Any payments made while this code is active will have created subscriptions in Stripe. Reverting the code won't cancel those subscriptions - handle via Stripe Dashboard if needed.

### What Broke vs. What We Changed

**What was broken:**
1. Guest checkout impossible - forced redirect to contact
2. Placeholder price IDs meant checkout would fail
3. Featured status never activated after payment
4. No clear path from marketing pages to checkout
5. Confusing "subscription" language

**What we changed:**
1. ✅ Guest checkout enabled - Stripe collects email
2. ✅ Real price IDs via environment variables
3. ✅ Webhook sets is_featured on payment
4. ✅ Marketing pages link directly to checkout
5. ✅ Copy changed to "Featured ad" throughout

### Owner Action Items

1. **Configure Stripe** (critical):
   - Get price IDs from product `prod_SD6d4YEFBe8eNr`
   - Set env vars in Netlify/hosting
   - Add webhook endpoint

2. **Test**: 
   - Try guest checkout
   - Verify featured status in database

3. **Monitor**: 
   - Check Stripe webhooks for errors
   - Watch for support emails

### Files Modified

```
__tests__/integration/subscription-flow.test.ts
src/components/SubscriptionCTA.tsx
src/pages/advertise.tsx
src/pages/api/subscriptions/create-subscription.ts
src/pages/api/webhook/stripe.ts
src/pages/business/subscription-success.tsx
src/pages/business/subscription.tsx
src/pages/join-directory.tsx
src/pages/media-kit.tsx
STRIPE_SETUP.md (new)
```

### Technical Debt / Future Improvements

1. Create proper signup flow for guests after payment (currently creates basic profile)
2. Add admin dashboard to view Featured businesses
3. Add analytics tracking for Featured ad conversions
4. Consider tiered Featured placement (e.g., top 3 vs top 10)
5. Add Featured badge/indicator on business listings

### Related Documentation

- `STRIPE_SETUP.md` - Complete Stripe configuration guide
- `README.md` - Updated with Stripe subscription section
- `supabase/migrations/20240610000000_fix_subscriptions.sql` - Schema reference

---

## Previous Changes

(Add previous changes above this line as they happen)
