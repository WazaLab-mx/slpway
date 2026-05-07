declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackFbEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

const GOOGLE_ADS_NEWSLETTER_CONVERSION = 'AW-18144279003/0m7bCMjy56gcENvz7stD';

export function trackGoogleAdsConversion(sendTo: string, value: number, currency: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', { send_to: sendTo, value, currency });
  }
}

// Conversion events
export const ConversionEvents = {
  // Fires three signals on a successful newsletter signup:
  //   1. GA4 `newsletter_signup` (lifetime metric + still importable into Ads)
  //   2. Meta `Lead` standard event (Meta Ads lead-gen optimization)
  //   3. Google Ads `conversion` to AW-18144279003 (Search campaign optimization)
  newsletterSignup: (source: string) => {
    trackEvent('newsletter_signup', { source, method: 'email' });
    trackFbEvent('Lead', { content_name: 'newsletter', source });
    trackGoogleAdsConversion(GOOGLE_ADS_NEWSLETTER_CONVERSION, 1.0, 'MXN');
  },

  contactFormSubmit: (subject?: string) =>
    trackEvent('contact_form_submit', { subject: subject || 'general' }),

  outboundMapClick: (placeName: string, page: string) =>
    trackEvent('outbound_click', { link_type: 'google_maps', place_name: placeName, page }),

  outboundAffiliateClick: (partner: string, destination: string, page: string) =>
    trackEvent('outbound_click', { link_type: 'affiliate', partner, destination, page }),

  ctaClick: (ctaId: string, ctaText: string, page: string) =>
    trackEvent('cta_click', { cta_id: ctaId, cta_text: ctaText, page }),

  guideEngagement: (guidePath: string, section: string) =>
    trackEvent('guide_section_view', { guide: guidePath, section }),
};

// Subscription funnel events
export const SubscriptionEvents = {
  viewPricing: () => trackEvent('view_pricing', { page: 'business_subscription' }),
  selectPlan: (plan: string) => trackEvent('select_plan', { plan }),
  startCheckout: (plan: string, value: number) => {
    trackEvent('begin_checkout', { plan, value, currency: 'MXN' });
    trackFbEvent('InitiateCheckout', { value, currency: 'MXN' });
  },
  completeSubscription: (plan: string, value: number) => {
    trackEvent('purchase', { plan, value, currency: 'MXN', transaction_id: `sub_${Date.now()}` });
    trackFbEvent('Subscribe', { value, currency: 'MXN' });
  },
  applyCoupon: (code: string) => trackEvent('apply_coupon', { coupon_code: code }),
};
