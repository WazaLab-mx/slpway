# Agent Context - San Luis Way Project

This document provides context for coding agents starting new sessions. Last updated: 2026-09-24

## Project Overview

**San Luis Way** (sanluisway.com) is a multilingual directory and guide for expats, tourists, and locals in San Luis Potosí, Mexico.

### Key Stats
- 15,000+ monthly visitors
- 850+ newsletter subscribers (30% open rate)
- 116+ businesses listed
- Content in 4 languages: English, Spanish, German, Japanese

### Primary Audiences
1. International expats (US, German, Japanese professionals from BMW/GM corridor)
2. Local Potosinos planning activities
3. Tourists researching SLP

## Tech Stack

### Frontend
- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **i18n**: next-i18next (ES/EN/DE/JA support)
- **UI Components**: Headless UI, Heroicons

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe (subscriptions)
- **API Routes**: Next.js API routes

### Infrastructure
- **Hosting**: Netlify (assumed from context)
- **Version Control**: GitHub (github.com/WazaLab-mx/slpway)

## Project Structure

```
/workspace
├── src/
│   ├── pages/
│   │   ├── api/              # Next.js API routes
│   │   │   ├── subscriptions/
│   │   │   └── webhook/stripe.ts
│   │   ├── business/         # Business dashboard pages
│   │   ├── advertise.tsx
│   │   ├── media-kit.tsx
│   │   └── join-directory.tsx
│   ├── components/
│   │   ├── common/
│   │   └── SubscriptionCTA.tsx
│   └── lib/
│       ├── supabase.ts
│       └── analytics.ts
├── supabase/
│   └── migrations/           # Database migrations
├── __tests__/
│   └── integration/
├── public/
│   └── locales/             # i18n translations
├── STRIPE_SETUP.md          # Stripe configuration guide
└── .cursor/
    ├── change-log.md        # Detailed change history
    └── agent-context.md     # This file
```

## Current Monetization Model

### Product: Featured Directory Ads

**Not a SaaS subscription** - businesses pay for priority placement in the directory.

**Pricing:**
- Monthly: 250 MXN/month
- Yearly: 2,500 MXN/year (17% savings)

**What businesses get:**
- Priority placement at top of directory
- `is_featured: true` flag in database
- Custom profile with photos, hours, WhatsApp button
- Analytics dashboard access
- Multilingual presence

### Checkout Flow

1. **Entry Points:**
   - `/business/subscription` - Main checkout page
   - `/advertise` - Links to checkout in packages section
   - `/media-kit` - First product card links to checkout
   - `/join-directory` - "Get Featured" CTA
   - `SubscriptionCTA` component - Throughout site

2. **Guest Checkout Enabled:**
   - No login required to start checkout
   - Stripe collects email during payment
   - Business profile created after payment via webhook

3. **Stripe Integration:**
   - Mode: `subscription` (recurring payments)
   - Price IDs: `STRIPE_MONTHLY_PRICE_ID` and `STRIPE_YEARLY_PRICE_ID`
   - Webhook: Activates `is_featured` status

4. **Success Path:**
   - Redirect to `/business/subscription-success?session_id={CHECKOUT_SESSION_ID}`
   - Webhook sets `business_profiles.is_featured = true`
   - Business appears at top of directory

## Database Schema (Relevant Tables)

### business_profiles
Key table for Featured ads:
```sql
business_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  business_name TEXT,
  business_category TEXT,
  is_featured BOOLEAN DEFAULT false,        -- Set by webhook
  subscription_status TEXT,                 -- 'active', 'canceled', etc.
  subscription_id TEXT,                     -- Stripe subscription ID
  subscription_end_date TIMESTAMP,
  stripe_customer_id TEXT,
  -- ... other fields
)
```

### subscriptions
Tracks subscription records:
```sql
subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  stripe_subscription_id TEXT UNIQUE,
  status TEXT,                              -- Synced from Stripe
  current_period_end TIMESTAMP,
  -- ... other fields
)
```

## Critical Environment Variables

### Stripe (Required for checkout)
```bash
STRIPE_SECRET_KEY=sk_live_...              # Stripe API secret key
STRIPE_PUBLISHABLE_KEY=pk_live_...         # Stripe public key
STRIPE_WEBHOOK_SECRET=whsec_...            # Webhook signing secret
STRIPE_MONTHLY_PRICE_ID=price_...          # 250 MXN/month price
STRIPE_YEARLY_PRICE_ID=price_...           # 2500 MXN/year price
```

### Supabase
```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...              # Used in webhooks
```

### Site
```bash
NEXT_PUBLIC_SITE_URL=https://sanluisway.com
```

## Recent Major Changes

### 2026-09-24: Fixed Featured Ad Checkout Funnel
**Branch**: `cursor/fix-featured-ad-checkout-8661`
**PR**: #1

**What was broken:**
- Guest checkout redirected to contact form
- Price IDs were placeholders
- Featured status not activated by webhook
- Marketing pages didn't link to checkout

**What was fixed:**
- Guest checkout enabled (Stripe collects email)
- Real price IDs via env vars
- Webhook sets `is_featured` on payment
- Marketing pages link to checkout
- Copy changed from "subscription" to "Featured ad"

See `.cursor/change-log.md` for detailed change history.

## Code Patterns & Conventions

### Authentication
- Use `useAuth()` hook from `@/lib/supabase-auth`
- Check `user` and `isLoading` states
- Guest users have `user === null`

### Database Queries
```typescript
import { supabase } from '@/lib/supabase';

const { data, error } = await supabase
  .from('business_profiles')
  .select('*')
  .eq('user_id', userId)
  .single();
```

### API Routes
- Use `NextApiRequest` and `NextApiResponse`
- Log with `logger.log()` and `logger.error()` from `@/lib/logger`
- Return consistent JSON responses

### i18n
```typescript
import { useTranslation } from 'next-i18next';
const { t } = useTranslation('common');
```

### Styling
- Tailwind utility classes
- Custom colors: `bg-primary`, `text-primary`, `bg-secondary`
- Responsive: `md:`, `lg:` breakpoints

## Testing

### Test Files
- `__tests__/integration/subscription-flow.test.ts` - Subscription API tests
- `__tests__/integration/webhook-stripe.test.ts` - Webhook tests

### Running Tests
```bash
npm test
```

### Test Patterns
```typescript
// Mock Stripe
jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    checkout: { sessions: { create: mockFn } }
  }));
});

// Mock Supabase
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({ from: mockFn }))
}));
```

## Common Development Tasks

### Adding a new page
1. Create file in `src/pages/`
2. Add i18n translations in `public/locales/{lang}/common.json`
3. Import shared components from `src/components/`
4. Use `serverSideTranslations` for SSG/SSR

### Modifying checkout flow
1. Update frontend: `src/pages/business/subscription.tsx`
2. Update API: `src/pages/api/subscriptions/create-subscription.ts`
3. Update webhook: `src/pages/api/webhook/stripe.ts`
4. Update tests: `__tests__/integration/subscription-flow.test.ts`

### Database changes
1. Create migration file: `supabase/migrations/YYYYMMDDHHMMSS_description.sql`
2. Apply locally: `supabase migration up`
3. Test thoroughly
4. Document in change log

## Important Rules (from AGENTS.md)

### Code Quality
- **Simplicity**: Prefer simple, direct solutions
- **Max 200 lines per file** - Split larger files into modules
- **Clean code**: Minimal comments, descriptive names
- **Refactor frequently**: Eliminate duplication

### Development Process
- **Commit frequently**: Each logical change gets a commit
- **Detailed logs**: Maintain `.cursor/change-log.md`
- **Test everything**: Unit and integration tests required
- **No mock data**: Use real data or controlled test environments

### Internationalization
- Implement i18n from the start
- Support ES/EN/DE/JA

### Responsive Design
- Mobile and web support required
- Test on multiple screen sizes

## Stripe Integration Notes

### Webhook Events
The webhook at `/api/webhook/stripe` handles:
- `checkout.session.completed` - Initial subscription creation
- `customer.subscription.created` - Subscription activated
- `customer.subscription.updated` - Status changes
- `customer.subscription.deleted` - Cancellation

### Featured Status Logic
```typescript
// In webhook handler
const isFeatured = ['active', 'trialing'].includes(subscription.status);

await supabase
  .from('business_profiles')
  .update({ is_featured: isFeatured })
  .eq('user_id', userId);
```

### Testing Stripe
**Test Mode:**
- Use test keys: `sk_test_...` and `pk_test_...`
- Test card: `4242 4242 4242 4242`

**Production:**
- Monitor webhook events in Stripe Dashboard
- Check logs for activation errors

## Troubleshooting

### Checkout not working
1. Check `STRIPE_MONTHLY_PRICE_ID` and `STRIPE_YEARLY_PRICE_ID` are set
2. Verify price IDs match Stripe Dashboard
3. Check Stripe secret key is live/test mode appropriate

### Featured status not activating
1. Check webhook endpoint configured in Stripe
2. Verify `STRIPE_WEBHOOK_SECRET` matches Stripe
3. Check webhook handler logs for errors
4. Verify `is_featured` column exists in `business_profiles`

### Build errors
1. Check all imports are correct
2. Verify environment variables are set
3. Run `npm install` to ensure dependencies are updated

## Support Contacts

- **Business inquiries**: sanluisway@wazalab.mx
- **GitHub**: github.com/WazaLab-mx/slpway

## Next Steps / Known TODO

1. Create proper signup flow for guests after payment
2. Add admin dashboard to view Featured businesses
3. Add analytics tracking for Featured ad conversions
4. Consider tiered Featured placement options
5. Add Featured badge on directory listings
6. Improve business onboarding flow

## Documentation Links

- **Stripe Setup**: `STRIPE_SETUP.md` - Complete configuration guide
- **Change Log**: `.cursor/change-log.md` - Detailed change history
- **README**: `README.md` - General project documentation
- **Migrations**: `supabase/migrations/` - Database schema history

---

**For coding agents**: This context should give you a solid foundation. When starting work:
1. Read relevant sections above
2. Check `.cursor/change-log.md` for recent changes
3. Review code files you'll be modifying
4. Follow the rules in `AGENTS.md`
5. Update this file if you learn something new about the project

## Recent Major Changes (continued)

### 2026-09-24: SEO Quick Fixes - Internal Linking & User Experience
**Branch**: `cursor/seo-quick-fixes-8704`
**PR**: #2

**Purpose:** Implement four SEO improvements from SEO review to enhance crawlability, internal linking, and user experience.

**Changes made:**

1. **Homepage → Resources Hub Internal Linking**
   - Added prominent Resources Hub CTA section on homepage (`src/pages/index.tsx`)
   - Clear, crawlable `<a href="/resources">` link after Practical Guides section
   - Gradient background, descriptive copy, fully responsive
   - Impact: Search engines can easily discover Resources hub from homepage

2. **Health Guide Page Optimization** (`src/pages/resources/health-guide.tsx`)
   - Title shortened: "Ultimate Health Services Guide..." (78 chars) → "Healthcare Guide SLP: Hospitals, Doctors & Insurance" (59 chars)
   - H1 updated to match title intent: "Healthcare Guide: Hospitals, Doctors & Insurance"
   - Added 3 contextual CTA cards after overview:
     * English-Speaking Doctors Directory → `/category/english-speaking-healthcare`
     * Health Insurance Section → smooth scroll to `#insurance`
     * Pharmacies Section → smooth scroll to `#pharmacies`
   - Impact: Better SERP snippet, clearer page focus, improved internal navigation

3. **Community CTA → Newsletter Signup Promotion**
   - Files: `src/components/header/HeaderNavigation.tsx`, `src/components/Header.tsx`
   - Moved Newsletter/Subscribe (`/subscribe`) before Community in navigation
   - Newsletter gets "Join" badge (emerald gradient), Community keeps "Soon" badge
   - Applied to both desktop dropdown and mobile menu
   - Community page itself unchanged (as requested)
   - Impact: Reduces dead-end navigation, increases newsletter signups

4. **Digital Nomad Guide in Resources Hub**
   - Added Digital Nomad Guide as first card in Resources hub index (`src/pages/resources/index.tsx`)
   - Links to existing `/digital-nomad-guide` URL (no redirect needed)
   - Cyan-to-blue gradient, laptop icon, clear description
   - Impact: Guide now discoverable from Resources hub while preserving existing URL

**Translation keys added:**
- `homepage.resourcesHub.title`, `homepage.resourcesHub.description`, `homepage.resourcesHub.cta`
- `nav.newsletter`
- English fallbacks provided; Spanish/German/Japanese can be added as follow-up

**What was NOT changed:**
- No Stripe/checkout code modifications
- Community page (`src/pages/community.tsx`) preserved
- No new visa or cost-of-living pages created
- All existing URLs working (no redirects needed)

See `COMMIT_LOG.md` (2026-09-24 entry) for full technical details.

