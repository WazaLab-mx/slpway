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

## 2026-09-30 - Fix Stripe Webhook RangeError and RLS Issues on Live Payment

### Commit: `a54cc36`
**Branch:** `cursor/fix-stripe-subscription-webhook-915e`
**PR:** [#7](https://github.com/WazaLab-mx/slpway/pull/7)

### Problem Description
After a live Featured subscription payment (logged-in smoke test), Stripe fired `customer.subscription.created` and `checkout.session.completed`, but `business_profiles.is_featured` never became true.

Production Netlify function logs (2026-09-30 ~15:47 UTC) showed:
1. `Error processing webhook: RangeError: Invalid time value` at `Date.toISOString` inside `pages/api/webhook/stripe`
2. For checkout.session.completed: `Error creating order: ... new row violates row-level security policy for table "orders"`

### Root Cause Analysis
1. **RangeError on current_period_end**:
   - Code tried to access `subscription.current_period_end` directly
   - In Basil-era Stripe API (2025-04-30.basil), this field is `null` on top-level
   - Actual period timestamp lives at `subscription.items.data[0].current_period_end`
   - Handler crashed with "Invalid time value" → 500 → Stripe retries → Featured never set

2. **RLS Policy Violation**:
   - `handleCheckoutSession` used anon Supabase client (`supabase`) for orders table operations
   - RLS policies require service role permissions for webhook writes
   - Result: "new row violates row-level security policy" → 500

3. **Metadata Key Mismatch** (secondary):
   - `create-subscription.ts` writes `user_id` in metadata
   - `check-session.ts` reads `userId`
   - May cause UI to show "could not confirm" even after successful payment

### Solution Implemented

#### 1. Fix Basil API current_period_end Extraction (webhook/stripe.ts)
```typescript
// Extract current_period_end - handle Basil-era API where it may be on items
let currentPeriodEndTimestamp: number | null = null;

// Try top-level first (older API versions)
if (subscription.current_period_end) {
  currentPeriodEndTimestamp = subscription.current_period_end;
}
// Fall back to subscription items (Basil-era API)
else if (subscription.items?.data?.[0]?.current_period_end) {
  currentPeriodEndTimestamp = subscription.items.data[0].current_period_end;
}

if (!currentPeriodEndTimestamp) {
  throw new Error('Missing current_period_end in subscription data');
}

const currentPeriodEnd = new Date(currentPeriodEndTimestamp * 1000).toISOString();
```

#### 2. Fix RLS Policy Violations (webhook/stripe.ts)
Changed all orders table operations in `handleCheckoutSession` to use `supabaseClient` (service role) instead of `supabase` (anon client):
- `existingOrder` query now uses service role client
- Order `insert` operations now use service role client
- Order `update` operations now use service role client

#### 3. Fix Metadata Key Compatibility (check-session.ts)
Updated to support both `userId` and `user_id` metadata keys:
```typescript
const userId = checkoutSession.metadata?.userId || checkoutSession.metadata?.user_id;
```

### Files Changed
1. `src/pages/api/webhook/stripe.ts` - 23 lines modified
   - Fixed `current_period_end` extraction (lines 291-307)
   - Changed orders operations to use `supabaseClient` (lines 33, 52, 90)
2. `src/pages/api/subscriptions/check-session.ts` - 4 lines modified
   - Added fallback for both metadata key formats (lines 44, 91)
3. `__tests__/integration/webhook-stripe.test.ts` - 200 lines added
   - Added test for Basil-era subscription structure
   - Added test for missing current_period_end graceful error
   - Added test for service role client usage
   - Updated existing tests to use admin client mock

### Testing
- **Total tests**: 11/11 passing ✅
- **New test coverage**:
  - Basil-era subscription with `current_period_end` in `items.data[0]`
  - Graceful error handling when `current_period_end` completely missing
  - Verification that orders table operations use service role client
  - All existing subscription and checkout flow tests still pass

### Impact
- **Risk**: Low (backward compatible, no breaking changes)
- **Value**: Critical (fixes production payment flow)
- **Backward compatibility**: Handler now supports both old and new Stripe API versions

### Technical Details
- **Stripe API version**: `2025-04-30.basil`
- **API structure change**: `current_period_end` moved from top-level to `items.data[0]`
- **Supabase clients**:
  - `supabase` (anon client): Read-only operations
  - `supabaseClient` (service role): Webhook write operations
- **Webhook events affected**:
  - `customer.subscription.created` ✅ Fixed
  - `customer.subscription.updated` ✅ Fixed
  - `checkout.session.completed` ✅ Fixed

### Verification
Handler now:
1. ✅ No longer throws `RangeError` on Basil-shaped subscriptions
2. ✅ Successfully sets `business_profiles.is_featured = true` on active/trialing subscriptions
3. ✅ No longer returns 500 on orders RLS policy violations
4. ✅ Maintains backward compatibility with existing clients

### Rollback
- Revert commit `a54cc36`
- No database changes required (all fixes are code-only)

---
