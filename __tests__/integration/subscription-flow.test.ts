import { createMockRequest, createMockResponse } from '../helpers/api-test-helpers';

// Use shared mutable refs that jest.mock factories can capture
const mocks = {
  stripeSessionCreate: jest.fn(),
  supabaseFrom: jest.fn(),
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    checkout: {
      sessions: { create: (...args: any[]) => mocks.stripeSessionCreate(...args) },
    },
  }));
});

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: (...args: any[]) => mocks.supabaseFrom(...args),
  })),
}));

jest.mock('@/lib/logger', () => ({
  logger: { log: jest.fn(), error: jest.fn(), warn: jest.fn() },
}));

import subscriptionHandler from '@/pages/api/subscriptions/create-subscription';

describe('Subscription Flow Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mocks.stripeSessionCreate.mockResolvedValue({
      id: 'cs_test_session_123',
      url: 'https://checkout.stripe.com/pay/cs_test_session_123',
    });
  });

  describe('POST /api/subscriptions/create-subscription', () => {
    it('returns 405 for non-POST methods', async () => {
      const req = createMockRequest({ method: 'GET' });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(405);
      expect(res._json.message).toBe('Method not allowed');
    });

    it('returns 400 when missing required fields', async () => {
      const req = createMockRequest({
        method: 'POST',
        body: {},
      });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res._json.message).toContain('Missing required field');
    });

    it('creates checkout for guest user without user_id', async () => {
      const req = createMockRequest({
        method: 'POST',
        body: { plan: 'monthly' },
      });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res._json).toMatchObject({
        message: 'Checkout session created successfully',
        sessionId: 'cs_test_session_123',
      });
      expect(mocks.stripeSessionCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          mode: 'subscription',
          metadata: expect.objectContaining({ userId: null, interval: 'monthly' }),
        })
      );
    });

    it('creates monthly subscription checkout successfully', async () => {
      // Mock user lookup
      mocks.supabaseFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: { id: 'user-123', email: 'user@example.com' },
          error: null,
        }),
      });

      const req = createMockRequest({
        method: 'POST',
        body: { plan: 'monthly', user_id: 'user-123' },
      });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res._json).toMatchObject({
        message: 'Checkout session created successfully',
        sessionId: 'cs_test_session_123',
      });
      expect(mocks.stripeSessionCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          mode: 'subscription',
          customer_email: 'user@example.com',
          metadata: expect.objectContaining({ userId: 'user-123', interval: 'monthly' }),
        })
      );
    });

    it('creates yearly subscription checkout successfully', async () => {
      mocks.supabaseFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: { id: 'user-456', email: 'yearly@example.com' },
          error: null,
        }),
      });

      const req = createMockRequest({
        method: 'POST',
        body: { plan: 'yearly', user_id: 'user-456' },
      });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(mocks.stripeSessionCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          metadata: expect.objectContaining({ interval: 'yearly' }),
        })
      );
    });

    it('returns 500 when Stripe session creation fails', async () => {
      mocks.supabaseFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: { id: 'user-123', email: 'user@example.com' },
          error: null,
        }),
      });

      mocks.stripeSessionCreate.mockRejectedValueOnce(new Error('Stripe API error'));

      const req = createMockRequest({
        method: 'POST',
        body: { plan: 'monthly', user_id: 'user-123' },
      });
      const res = createMockResponse();

      await subscriptionHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
