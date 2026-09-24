# Stripe Featured Ad Checkout Setup Guide

This guide explains how to configure the Stripe checkout funnel for Featured directory ads.

## Product Overview

The site sells **Featured directory ads** (not SaaS subscriptions):
- **Monthly Featured Ad**: 250 MXN/month
- **Yearly Featured Ad**: 2,500 MXN/year

When a business pays, their `business_profiles` record gets `is_featured: true` and appears at the top of the directory.

## Required Environment Variables

Add these to your hosting environment (Netlify, Vercel, etc.) and to your local `.env.local`:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_live_...                    # From Stripe Dashboard > Developers > API Keys
STRIPE_PUBLISHABLE_KEY=pk_live_...              # From Stripe Dashboard > Developers > API Keys
STRIPE_WEBHOOK_SECRET=whsec_...                  # From Stripe Dashboard > Developers > Webhooks

# Stripe Price IDs (CRITICAL - must match your Stripe products)
STRIPE_MONTHLY_PRICE_ID=price_...               # Monthly recurring price ID
STRIPE_YEARLY_PRICE_ID=price_...                # Yearly recurring price ID

# Site URL
NEXT_PUBLIC_SITE_URL=https://sanluisway.com     # Your production URL

# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Step 1: Create Stripe Products and Prices

### Option A: Use Existing Product (Recommended)

You mentioned the prices already exist in Stripe product `prod_SD6d4YEFBe8eNr` ("Pro Subscription"):

1. Go to Stripe Dashboard > Products
2. Find product `prod_SD6d4YEFBe8eNr`
3. Optionally rename it to "Featured Directory Ad" (display name only, for clarity)
4. Find the two prices:
   - 250 MXN/month recurring
   - 2,500 MXN/year recurring
5. Copy each price ID (starts with `price_...`)
6. Set environment variables:
   ```bash
   STRIPE_MONTHLY_PRICE_ID=price_1abc123...
   STRIPE_YEARLY_PRICE_ID=price_1def456...
   ```

### Option B: Create New Product

If you need to create new prices:

1. Go to Stripe Dashboard > Products > Add Product
2. Name: "Featured Directory Ad"
3. Create two prices:
   - **Monthly**: 250 MXN, recurring monthly
   - **Yearly**: 2,500 MXN, recurring yearly
4. Copy the price IDs and set the environment variables

## Step 2: Configure Stripe Webhook

The webhook activates Featured status when payment completes.

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://sanluisway.com/api/webhook/stripe`
4. Listen to these events:
   ```
   checkout.session.completed
   checkout.session.expired
   customer.subscription.created
   customer.subscription.updated
   customer.subscription.deleted
   account.updated
   ```
5. Copy the webhook signing secret (starts with `whsec_...`)
6. Set environment variable:
   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_abc123...
   ```

## Step 3: Test the Checkout Flow

### Using Stripe Test Mode

1. Use test keys: `sk_test_...` and `pk_test_...`
2. Use test price IDs from your test-mode product
3. Use test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
4. Any future expiry date and any CVC

### Test Flow

1. Visit `/business/subscription` (guest or logged-in both work)
2. Select Monthly or Yearly plan
3. Click "Destacar mi Negocio"
4. Complete Stripe Checkout
5. Verify redirection to `/business/subscription-success`
6. Check database:
   ```sql
   SELECT business_name, is_featured, subscription_status 
   FROM business_profiles 
   WHERE is_featured = true;
   ```

## Step 4: Verify Database Schema

The `business_profiles` table must have:
- `is_featured` (boolean)
- `subscription_status` (text)
- `subscription_id` (text)
- `subscription_end_date` (timestamp)
- `stripe_customer_id` (text)

These columns were added in migration `20240610000000_fix_subscriptions.sql`.

## How It Works

### Guest Checkout Flow

1. User visits `/business/subscription` (no login required)
2. Selects plan (monthly/yearly)
3. Clicks checkout button
4. API creates Stripe Checkout session with:
   - `mode: 'subscription'`
   - `customer_email` collected by Stripe if not logged in
   - Metadata: `userId`, `businessId`, `interval`
5. User completes payment in Stripe
6. Stripe sends webhook `checkout.session.completed`
7. Webhook handler:
   - Creates/finds user account
   - Creates/updates `business_profiles` record
   - Sets `is_featured: true` and `subscription_status: 'active'`
8. User lands on success page

### Logged-In Flow

Same as guest, but user's email is pre-filled and `business_profiles` record is linked immediately.

## Troubleshooting

### Checkout returns error "Missing Stripe configuration"

Check `STRIPE_SECRET_KEY` is set in environment.

### Checkout redirects to Stripe but payment doesn't activate Featured

1. Check webhook is receiving events: Stripe Dashboard > Developers > Webhooks > [your webhook] > Events
2. Check webhook secret matches: `STRIPE_WEBHOOK_SECRET` in environment
3. Check webhook handler logs for errors

### Featured status not set after payment

Check webhook handler logs. The webhook should:
1. Find or create user by `stripe_customer_id`
2. Update `business_profiles` with `is_featured: true`

### Price IDs not working

Verify:
1. Price IDs match exactly (copy from Stripe Dashboard)
2. Price IDs are for the correct mode (test vs live)
3. Price IDs are in the environment variables, not hardcoded placeholders

## Marketing Page Links

The following pages now link to `/business/subscription` for Featured ads:
- `/advertise` - "Featured Directory Ad" in packages section
- `/media-kit` - First product card links directly to checkout
- `/join-directory` - "Get Featured" CTA

Components updated:
- `SubscriptionCTA` - All variants now say "Get Featured"

## Copy Changes

All UI copy changed from "subscription" to "Featured ad" / "anuncio destacado":
- Page title: "Featured Directory Ad"
- Hero: "Destaca y Llega a 15,000+ Visitantes"
- CTA: "Destacar mi Negocio"
- Success page: "¡Anuncio Destacado Activado!"

## Support Contact

If a customer has payment issues, direct them to: sanluisway@wazalab.mx
