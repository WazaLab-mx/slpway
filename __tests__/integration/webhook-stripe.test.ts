import { createMockRequest, createMockResponse } from '../helpers/api-test-helpers';

// Shared mutable mock refs - avoids jest.mock hoisting issues
const mocks = {
  constructEvent: jest.fn(),
  listLineItems: jest.fn().mockResolvedValue({ data: [] }),
  supabaseBrowserFrom: jest.fn(),
  supabaseAdminFrom: jest.fn(),
};

jest.mock('micro', () => ({
  buffer: jest.fn().mockResolvedValue(Buffer.from('raw-body')),
}));

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    webhooks: { constructEvent: (...args: any[]) => mocks.constructEvent(...args) },
    checkout: { 
      sessions: { 
        listLineItems: (...args: any[]) => mocks.listLineItems(...args),
        list: jest.fn().mockResolvedValue({ data: [] }),
      } 
    },
  }));
});

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: (...args: any[]) => mocks.supabaseAdminFrom(...args),
  })),
}));

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createPagesBrowserClient: jest.fn(() => ({
    from: (...args: any[]) => mocks.supabaseBrowserFrom(...args),
  })),
}));

jest.mock('@/lib/supabase', () => ({
  supabase: {
    from: (...args: any[]) => mocks.supabaseBrowserFrom(...args),
  },
}));

jest.mock('@/lib/logger', () => ({
  logger: { log: jest.fn(), error: jest.fn(), warn: jest.fn() },
}));

import webhookHandler from '@/pages/api/webhook/stripe';

describe('Stripe Webhook Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 405 for non-POST methods', async () => {
    const req = createMockRequest({ method: 'GET' });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
  });

  it('returns 400 when signature verification fails', async () => {
    mocks.constructEvent.mockImplementationOnce(() => {
      throw new Error('Invalid signature');
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_invalid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('handles checkout.session.completed - creates new order', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_completed',
          payment_status: 'paid',
          amount_total: 5000,
          metadata: { user_id: 'user-123' },
          customer_details: { email: 'buyer@example.com' },
          payment_intent: 'pi_test_123',
          mode: 'payment',
        },
      },
    });

    // Mock existing order check - not found (use admin client for service role)
    const existingOrderChain = {
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(existingOrderChain);

    // Mock order insert (use admin client for service role)
    const insertChain = {
      insert: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'order-new', order_number: 'SLP-123456', status: 'completed' },
        error: null,
      }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(insertChain);

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ 
        received: true,
        event: 'checkout.session.completed',
        result: expect.objectContaining({ success: true })
      })
    );
  });

  it('handles checkout.session.completed - updates existing order', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_existing',
          payment_status: 'paid',
          metadata: { user_id: 'user-123' },
          mode: 'payment',
        },
      },
    });

    // Mock existing order check - found (use admin client for service role)
    const existingOrderChain = {
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'order-existing', status: 'pending' },
        error: null,
      }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(existingOrderChain);

    // Mock order update (use admin client for service role)
    const updateChain = {
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'order-existing', status: 'completed' },
        error: null,
      }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(updateChain);

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ 
        received: true,
        event: 'checkout.session.completed',
        result: expect.objectContaining({ success: true })
      })
    );
  });

  it('handles unrecognized event types gracefully', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'payment_intent.succeeded',
      data: { object: { id: 'pi_test' } },
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ 
      received: true,
      event: 'payment_intent.succeeded'
    });
  });

  it('handles subscription created event with existing stripe_customer_id', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.created',
      data: {
        object: {
          id: 'sub_test_new',
          customer: 'cus_test_123',
          status: 'active',
          current_period_end: Math.floor(Date.now() / 1000) + 86400 * 30,
          metadata: {},
        },
      },
    });

    // Mock user lookup by stripe_customer_id
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-sub-1' },
        error: null,
      }),
    });

    // Mock business profile lookup
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'bp-1', user_id: 'user-sub-1' },
        error: null,
      }),
    });

    // Mock business profile update
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock subscriptions table upsert
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      upsert: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Subscription events don't explicitly return json on success, they break
    // The handler should not have returned a 500
    expect(res.status).not.toHaveBeenCalledWith(500);
  });

  it('handles subscription created event with metadata fallback when stripe_customer_id missing', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.created',
      data: {
        object: {
          id: 'sub_test_fallback',
          customer: 'cus_test_456',
          status: 'active',
          current_period_end: Math.floor(Date.now() / 1000) + 86400 * 30,
          metadata: {
            user_id: 'user-fallback-1',
            business_id: 'biz-fallback-1',
          },
        },
      },
    });

    // Mock user lookup by stripe_customer_id - returns null (not found)
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: null,
        error: { code: 'PGRST116' },
      }),
    });

    // Mock user lookup by user_id from metadata
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-fallback-1', email: 'fallback@example.com' },
        error: null,
      }),
    });

    // Mock updating user with stripe_customer_id
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock business profile lookup
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'bp-fallback-1', user_id: 'user-fallback-1', is_featured: false },
        error: null,
      }),
    });

    // Mock business profile update
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock subscriptions table upsert
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      upsert: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    expect(res.status).not.toHaveBeenCalledWith(500);
  });

  it('sets is_featured to true for active subscription', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.updated',
      data: {
        object: {
          id: 'sub_test_featured',
          customer: 'cus_test_789',
          status: 'active',
          current_period_end: Math.floor(Date.now() / 1000) + 86400 * 30,
          metadata: {},
        },
      },
    });

    // Mock user lookup
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-featured-1' },
        error: null,
      }),
    });

    // Mock business profile lookup
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'bp-featured-1', user_id: 'user-featured-1', is_featured: false },
        error: null,
      }),
    });

    // Mock business profile update - capture the call
    const updateMock = jest.fn().mockReturnThis();
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: updateMock,
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock subscriptions table upsert
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      upsert: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Verify is_featured was set to true
    expect(updateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        is_featured: true,
      })
    );
  });

  it('handles Basil-era subscription with current_period_end in items.data[0]', async () => {
    const periodEnd = Math.floor(Date.now() / 1000) + 86400 * 30;

    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.created',
      data: {
        object: {
          id: 'sub_test_basil',
          customer: 'cus_test_basil',
          status: 'active',
          current_period_end: null,
          items: {
            data: [
              {
                id: 'si_test',
                current_period_end: periodEnd,
              },
            ],
          },
          metadata: {
            user_id: 'user-basil-1',
          },
        },
      },
    });

    // Mock user lookup by stripe_customer_id - returns null
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: null,
        error: { code: 'PGRST116' },
      }),
    });

    // Mock user lookup by user_id from metadata
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-basil-1', email: 'basil@example.com' },
        error: null,
      }),
    });

    // Mock updating user with stripe_customer_id
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock business profile lookup
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'bp-basil-1', user_id: 'user-basil-1', is_featured: false },
        error: null,
      }),
    });

    // Mock business profile update
    const updateMock = jest.fn().mockReturnThis();
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: updateMock,
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock subscriptions table upsert
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      upsert: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Should not return 500 error
    expect(res.status).not.toHaveBeenCalledWith(500);

    // Verify is_featured was set to true
    expect(updateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        is_featured: true,
        subscription_end_date: new Date(periodEnd * 1000).toISOString(),
      })
    );
  });

  it('handles subscription without current_period_end gracefully', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.created',
      data: {
        object: {
          id: 'sub_test_no_period',
          customer: 'cus_test_no_period',
          status: 'active',
          current_period_end: null,
          items: {
            data: [],
          },
          metadata: {
            user_id: 'user-no-period-1',
          },
        },
      },
    });

    // Mock user lookup by stripe_customer_id - returns null
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: null,
        error: { code: 'PGRST116' },
      }),
    });

    // Mock user lookup by user_id from metadata
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-no-period-1', email: 'noperiod@example.com' },
        error: null,
      }),
    });

    // Mock updating user with stripe_customer_id
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Should return 200 with error to prevent Stripe retries (malformed subscription data)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        received: true,
        error: expect.any(String)
      })
    );
  });

  it('handles checkout.session.completed using service role client for orders', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_service_role',
          payment_status: 'paid',
          amount_total: 10000,
          metadata: { user_id: 'user-456' },
          customer_details: { email: 'servicerole@example.com' },
          payment_intent: 'pi_test_456',
          mode: 'payment',
        },
      },
    });

    // Mock existing order check - not found (should use supabaseAdminFrom for service role)
    const existingOrderChain = {
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(existingOrderChain);

    // Mock order insert (should use supabaseAdminFrom for service role)
    const insertChain = {
      insert: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'order-service-role', order_number: 'SLP-789012', status: 'completed' },
        error: null,
      }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(insertChain);

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Verify that supabaseAdminFrom was called (service role client)
    expect(mocks.supabaseAdminFrom).toHaveBeenCalledWith('orders');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ 
        received: true,
        result: expect.objectContaining({ success: true })
      })
    );
  });

  it('returns 200 even when orders table insert fails (non-fatal error)', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_order_fail',
          payment_status: 'paid',
          amount_total: 5000,
          metadata: { user_id: 'user-789' },
          customer_details: { email: 'orderfail@example.com' },
          payment_intent: 'pi_test_789',
          mode: 'payment',
        },
      },
    });

    // Mock existing order check - not found
    const existingOrderChain = {
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(existingOrderChain);

    // Mock order insert - fails with RLS error
    const insertChain = {
      insert: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: null,
        error: { message: 'new row violates row-level security policy', code: '42501' },
      }),
    };
    mocks.supabaseAdminFrom.mockReturnValueOnce(insertChain);

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Should return 200 with error details, not 500
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ 
        received: true,
        result: expect.objectContaining({ success: false })
      })
    );
  });

  it('subscription events always return 200 to prevent Stripe retries', async () => {
    mocks.constructEvent.mockReturnValueOnce({
      type: 'customer.subscription.created',
      data: {
        object: {
          id: 'sub_test_always_200',
          customer: 'cus_test_always_200',
          status: 'active',
          current_period_end: Math.floor(Date.now() / 1000) + 86400 * 30,
          metadata: {},
        },
      },
    });

    // Mock user lookup - succeeds
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'user-always-200' },
        error: null,
      }),
    });

    // Mock business profile lookup - succeeds
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: { id: 'bp-always-200', user_id: 'user-always-200' },
        error: null,
      }),
    });

    // Mock business profile update - succeeds
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      update: jest.fn().mockReturnThis(),
      eq: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock subscriptions table upsert - succeeds
    mocks.supabaseAdminFrom.mockReturnValueOnce({
      upsert: jest.fn().mockResolvedValue({ error: null }),
    });

    const req = createMockRequest({
      method: 'POST',
      headers: { 'stripe-signature': 'sig_valid' },
    });
    const res = createMockResponse();

    await webhookHandler(req, res);

    // Should always return 200 with received: true
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ 
        received: true,
        event: 'customer.subscription.created'
      })
    );
  });
});
