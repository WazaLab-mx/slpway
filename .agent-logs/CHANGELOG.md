# Agent Change Log

This log tracks all changes made to the project, including detailed descriptions for reference.

---

## 2026-09-30 - Fix Featured Directory Subscription Payment Issue

### Commits: `1868837`, `9c64ed9`, `ea4eccf`
**Branch:** `cursor/fix-featured-subscription-33c9`
**PR:** [#6](https://github.com/WazaLab-mx/slpway/pull/6)

### Problem Description
After successful Stripe Checkout payment for Featured Directory (250 MXN/mo), the `business_profiles.is_featured` flag remained `false`. Payment webhooks (`checkout.session.completed`, `customer.subscription.created`) fired correctly, but the Featured status was never updated in the database.

### Root Cause Analysis
1. **Subscription Creation Path** (`src/pages/api/subscriptions/create-subscription.ts`):
   - Created checkout sessions with user/business metadata
   - Never created or reused Stripe Customer for logged-in users
   - Never saved `stripe_customer_id` to users table
   - Metadata used inconsistent key: `userId` instead of `user_id`

2. **Webhook Handler** (`src/pages/api/webhook/stripe.ts`):
   - `handleSubscriptionChange` function looked up users exclusively by `stripe_customer_id`
   - When no user had matching `stripe_customer_id`, function returned early
   - Featured status was never updated because user was never found

3. **Result**: No durable link between Stripe subscription and app user → Featured status never set

### Solution Implemented

#### 1. Create/Reuse Stripe Customer (create-subscription.ts)
- **For logged-in users**:
  - Check if user has existing `stripe_customer_id` in database
  - If yes: reuse existing Stripe Customer
  - If no: create new Stripe Customer and save ID to users table
  - Attach Customer to checkout session via `customer` parameter
- **For guest checkout**: continues to work as before with `customer_email`
- **Optimization**: Reduced from 2 user queries to 1 (combined email and stripe_customer_id fetch)
- **Metadata fix**: Changed `userId` → `user_id` for consistency

#### 2. Add Webhook Fallback (webhook/stripe.ts)
- **Primary path**: Look up user by `stripe_customer_id` (works for all new subscriptions)
- **Fallback path** (when primary fails):
  1. Try to get `user_id` from subscription metadata
  2. If not in subscription, fetch checkout sessions for customer and check metadata
  3. Look up user by resolved `user_id`
  4. Backfill `stripe_customer_id` for future webhooks
- **Backward compatibility**: Handles historical subscriptions without `stripe_customer_id`

### Files Changed
1. `src/pages/api/subscriptions/create-subscription.ts` - 47 lines modified
2. `src/pages/api/webhook/stripe.ts` - 68 lines modified
3. `__tests__/integration/subscription-flow.test.ts` - 102 lines modified
4. `__tests__/integration/webhook-stripe.test.ts` - 94 lines modified

### Testing
- **Total tests**: 512 (all passing ✅)
- **New test coverage**:
  - Logged-in user with existing `stripe_customer_id`
  - Logged-in user without `stripe_customer_id` (creates new customer)
  - Webhook lookup via `stripe_customer_id` (primary path)
  - Webhook fallback via subscription metadata
  - Verification that `is_featured` is set to `true` for active subscriptions
  - Verification that `is_featured` is set to `false` for canceled subscriptions

### Impact
- **Risk**: Low (minimal changes, backward compatible)
- **Value**: High (fixes critical Featured Directory payment flow)
- **Breaking changes**: None (existing subscriptions and order flow unaffected)

### Manual Test Plan (Post-Deploy)
1. Create or use existing logged-in user
2. Navigate to Featured Directory checkout
3. Complete payment with Stripe test card (4242 4242 4242 4242)
4. Verify webhook processes successfully in Stripe dashboard
5. Check database: `business_profiles.is_featured = true` for user's business
6. Verify `stripe_customer_id` is saved in users table
7. Test subscription cancellation sets `is_featured = false`

### Hardening (commit `ea4eccf`)
- **Added `subscription_data.metadata`** to checkout session creation
- Stripe does not automatically copy Checkout Session metadata to Subscription object
- Without this, webhook's metadata fallback would read empty `subscription.metadata.user_id`
- Now metadata is explicitly copied: `user_id`, `business_id`, `interval`
- Ensures fallback path works even when `stripe_customer_id` lookup fails

### Technical Details
- **Stripe API version**: `2025-04-30.basil`
- **Price IDs**:
  - Monthly: `price_1RIgQNIg6TQpITo34AVnco2v`
  - Yearly: `price_1RIgTuIg6TQpITo3lX3tScvi`
- **Webhook events handled**:
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
- **Metadata paths**:
  - Session-level: For order tracking (kept for backward compatibility)
  - Subscription-level: For webhook fallback user resolution

---
