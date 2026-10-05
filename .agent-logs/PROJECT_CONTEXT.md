# Project Context for Coding Agents

This document provides context for coding agents to understand the project when starting a new session.

---

## Project Overview
**Name:** San Luis Way Directory (slp-directory)
**Type:** Next.js (Pages Router) TypeScript Application
**Purpose:** Expat-focused directory and guide for San Luis Potosí, Mexico

### Key Features
- Business directory with featured listings
- Subscription-based Featured Directory ads (250 MXN/month or yearly)
- Event calendar and guides
- Multi-language support (ES, EN, DE, JA)
- Stripe integration for payments
- Supabase for database and auth

---

## Recent Work

### 2026-10-05: Meta Pixel Lead Tracking for Newsletter Signups
**Problem Solved:** Meta Pixel was not tracking Lead events on successful newsletter subscriptions from `/join` page, preventing Meta Ads optimization.

**Key Changes:**
1. Enhanced `ConversionEvents.newsletterSignup()` to accept optional custom parameters
2. Added page-specific Meta Pixel Lead tracking with `content_name: 'expat_insider_join'`
3. Maintained backward compatibility for other newsletter forms

**Files to Know:**
- `src/lib/analytics.ts` - Analytics tracking utilities and Meta Pixel integration
- `src/pages/join.tsx` - Main newsletter landing page
- `src/components/NewsletterSignup.tsx` - Reusable newsletter signup component

**Technical Notes:**
- Meta Pixel (1916912242550142) loaded via GTM (GTM-T4LHTQ9C)
- Lead event fires only on successful subscribe (not validation errors or already-subscribed)
- Safe no-op if `window.fbq` undefined (async Pixel loading)

### 2026-09-30: Featured Directory Subscription Fix
**Problem Solved:** Featured Directory subscription payments were not updating `business_profiles.is_featured` status.

**Key Changes:**
1. Stripe Customer creation/reuse for logged-in users
2. Webhook fallback lookup via subscription metadata
3. Consistent metadata keys (`user_id` instead of `userId`)

**Files to Know:**
- `src/pages/api/subscriptions/create-subscription.ts` - Subscription checkout creation
- `src/pages/api/webhook/stripe.ts` - Stripe webhook handler
- `src/pages/business/subscription.tsx` - Frontend subscription page
- `src/pages/business/profile.tsx` - Business profile management

---

## Architecture

### Frontend
- **Framework:** Next.js 15 (Pages Router)
- **Styling:** Tailwind CSS
- **State Management:** React hooks, Context API
- **i18n:** next-i18next

### Backend
- **API Routes:** Next.js API routes in `src/pages/api/`
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Email:** Nodemailer
- **Analytics:** Google Analytics (GA4), Meta Pixel, Google Ads (via GTM)

### Key Database Tables
- `users` - User accounts (includes `stripe_customer_id`)
- `business_profiles` - Business listings (includes `is_featured`, `subscription_status`)
- `subscriptions` - Subscription tracking
- `orders` - Order history
- `places` - Directory listings
- `events` - Event calendar

---

## Stripe Integration

### Subscription Flow
1. User navigates to `/business/subscription`
2. Frontend calls `POST /api/subscriptions/create-subscription`
3. API creates/retrieves Stripe Customer
4. API creates Checkout Session with Customer attached
5. User completes payment on Stripe Checkout
6. Stripe sends webhook to `/api/webhook/stripe`
7. Webhook handler updates `business_profiles.is_featured = true`

### Important Concepts
- **stripe_customer_id**: Durable link between Stripe and app user
- **Metadata**: `user_id` and `business_id` stored in checkout sessions for fallback
- **Featured Status**: `is_featured` flag set `true` for active/trialing subscriptions

### Price IDs (Live Mode)
- Monthly: `price_1RIgQNIg6TQpITo34AVnco2v`
- Yearly: `price_1RIgTuIg6TQpITo3lX3tScvi`

---

## Testing

### Test Structure
- Integration tests in `__tests__/integration/`
- Unit tests in `__tests__/` and co-located with source
- Test helpers in `__tests__/helpers/`

### Running Tests
```bash
npm test                    # Run all tests
npm test -- <file>          # Run specific test file
npm test:watch              # Watch mode
npm test:coverage           # Coverage report
```

### Current Test Status
- **Total tests:** 512
- **Status:** All passing ✅
- **Coverage areas:**
  - API routes (subscriptions, webhooks)
  - Business flow
  - Auth flow
  - Contact flow
  - Reviews flow

---

## Environment Variables

### Required for Subscription Flow
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret
- `STRIPE_MONTHLY_PRICE_ID` - Monthly subscription price ID
- `STRIPE_YEARLY_PRICE_ID` - Yearly subscription price ID
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (for webhooks)

---

## Development Guidelines

### Code Style (from AGENTS.md)
1. **Simplicity**: Prioritize simple, direct solutions
2. **Refactoring**: Refactor frequently for readability
3. **Clean Code**: Use comments sparingly, maintain consistent formatting
4. **Modularization**: Keep files under 200 lines, divide into focused modules
5. **Testing**: Implement unit and integration tests for all changes
6. **No Mock Data**: Use real data or controlled test environments

### Git Workflow
1. Create feature branch: `git checkout -b cursor/<descriptive-name>-<hash>`
2. Make changes and commit frequently with descriptive messages
3. Push to remote: `git push -u origin <branch-name>`
4. Create PR against `main`
5. Update change logs

### Commit Message Format
```
<type>: <short description>

<detailed description of the problem>

Changes:
- <change 1>
- <change 2>
- ...

Testing:
- <test summary>

Result: <outcome>
```

---

## Common Issues & Solutions

### Issue: Featured status not updating
**Cause:** Missing `stripe_customer_id` or metadata
**Solution:** Ensure Stripe Customer is created and linked, webhook has fallback

### Issue: Tests failing after dependency install
**Cause:** Missing or stale node_modules
**Solution:** `rm -rf node_modules && npm install`

### Issue: Webhook signature verification fails
**Cause:** Wrong webhook secret or malformed request
**Solution:** Check `STRIPE_WEBHOOK_SECRET` matches Stripe dashboard

---

## Next Steps & TODOs

### Subscription Flow
- [ ] Monitor Featured subscription success rate post-deploy
- [ ] Add admin dashboard for managing Featured businesses
- [ ] Implement subscription analytics

### Testing
- [ ] Add E2E tests for subscription flow
- [ ] Add webhook event simulation tests

### Documentation
- [ ] Document Stripe webhook setup for new developers
- [ ] Create runbook for subscription troubleshooting

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server on port 3001
npm run build            # Build for production
npm run start            # Start production server

# Testing
npm test                 # Run all tests
npm run test:coverage    # Generate coverage report

# Linting
npm run lint             # Run ESLint

# Database
# (Use Supabase dashboard for schema changes)
```

---

## Resources

- **Repository:** https://github.com/WazaLab-mx/slpway
- **Stripe Dashboard:** (see team credentials)
- **Supabase Dashboard:** (see team credentials)
- **Deployment:** Netlify (connected to main branch)

---

## Analytics & Tracking

### Google Tag Manager (GTM)
- **GTM ID:** GTM-T4LHTQ9C
- Loads on all pages via `_app.tsx`
- Manages Meta Pixel, Google Analytics, and Google Ads tags

### Meta Pixel
- **Pixel ID:** 1916912242550142 ("SLW 2")
- Initialized via GTM on page load
- Key events tracked:
  - `PageView` - Automatic on all pages
  - `Lead` - Newsletter signups (configurable by source)
  - `InitiateCheckout` - Subscription checkout started
  - `Subscribe` - Subscription completed

### Conversion Tracking
Centralized in `src/lib/analytics.ts`:
- `ConversionEvents.newsletterSignup()` - Newsletter subscriptions (GA4 + Meta Lead + Google Ads)
- `SubscriptionEvents.startCheckout()` - Featured checkout (GA4 + Meta InitiateCheckout)
- `SubscriptionEvents.completeSubscription()` - Featured purchase (GA4 + Meta Subscribe)

### Meta Pixel Lead Parameters
- `/join` page: `content_name: 'expat_insider_join'`, `content_category: 'newsletter'`
- Other forms: `content_name: 'newsletter'`, `content_category: 'newsletter'`
- Safe fallback if `window.fbq` undefined (async loading via GTM)

---

**Last Updated:** 2026-10-05
**Last Updated By:** Cursor Agent (cursor/meta-pixel-lead-tracking-join-fc32)
