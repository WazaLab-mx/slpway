import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { logger } from '@/lib/logger';

// Initialize Stripe
const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
  logger.error('Missing Stripe secret key - subscriptions will not work');
}

const stripe = new Stripe(stripeKey || 'sk_test_dummy', {
  apiVersion: '2025-04-30.basil',
});

// Subscription plan prices (hardcoded fallbacks in case DB lookup fails)
const MONTHLY_PRICE_ID = process.env.STRIPE_MONTHLY_PRICE_ID || 'price_placeholder';
const YEARLY_PRICE_ID = process.env.STRIPE_YEARLY_PRICE_ID || 'price_placeholder';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log request details for debugging
    logger.log('Request body:', {
      plan: req.body.plan,
      user_id: req.body.user_id,
      business_id: req.body.business_id
    });

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    logger.log('Environment:', {
      hasSupabaseUrl: !!supabaseUrl,
      hasSupabaseKey: !!supabaseKey,
      hasStripeKey: !!stripeKey,
    });

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ message: 'Missing Supabase configuration' });
    }

    if (!stripeKey) {
      return res.status(500).json({ message: 'Missing Stripe configuration' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

        // Extract parameters from request body
    const { plan, user_id, business_id } = req.body;

    if (!plan || !user_id) {
      return res.status(400).json({ message: 'Missing required fields: plan and user_id' });
    }

    // Get user details for checkout
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select("*")
      .eq('id', user_id)
      .single();

    if (userError) {
      logger.error('Error fetching user:', userError);
      return res.status(500).json({ message: 'Error fetching user information' });
    }

    if (!userData || !userData.email) {
      return res.status(404).json({ message: 'User not found or missing email' });
    }

    // Get the right Stripe price ID based on plan
    const stripePriceId = plan === 'yearly' ? YEARLY_PRICE_ID : MONTHLY_PRICE_ID;

    logger.log('Creating Stripe checkout session with price ID:', stripePriceId);

    // Prepare checkout session data
    const checkoutSessionData: any = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/business/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/business/subscription`,
      customer_email: userData.email,
      metadata: {
        userId: user_id,
        businessId: business_id || null,
        interval: plan,
      }
    };

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create(checkoutSessionData);

    logger.log('Checkout session created with ID:', checkoutSession.id);

    return res.status(200).json({
      message: 'Checkout session created successfully',
      checkoutUrl: checkoutSession.url,
      sessionId: checkoutSession.id
    });
  } catch (error: any) {
    logger.error('Subscription creation error:', error);
    return res.status(500).json({
      message: error?.message || 'Error creating subscription',
      stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
    });
  }
}