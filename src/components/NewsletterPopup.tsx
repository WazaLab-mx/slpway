import React, { useState, useEffect } from 'react';
import { XMarkIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { ConversionEvents } from '@/lib/analytics';

const POPUP_STORAGE_KEY = 'slp_newsletter_popup_dismissed';
const SUBSCRIBED_STORAGE_KEY = 'slp_newsletter_subscribed';
const DISMISS_DURATION_DAYS = 14;
const SCROLL_THRESHOLD = 0.5;
const TIME_DELAY_MS = 30000;

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const excludedPaths = ['/join', '/checkout', '/account', '/order-confirmation', '/signin', '/signup'];
    const isExcluded = excludedPaths.some(path => router.pathname.startsWith(path));

    if (isExcluded) return;

    const dismissedAt = localStorage.getItem(POPUP_STORAGE_KEY);
    const hasSubscribed = localStorage.getItem(SUBSCRIBED_STORAGE_KEY);

    if (hasSubscribed) return;

    if (dismissedAt) {
      const dismissTime = new Date(dismissedAt).getTime();
      const currentTime = new Date().getTime();
      const daysSinceDismiss = (currentTime - dismissTime) / (1000 * 60 * 60 * 24);
      
      if (daysSinceDismiss < DISMISS_DURATION_DAYS) return;
    }

    let hasShown = false;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (hasShown) return;

      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrolled / (documentHeight - viewportHeight);

      if (scrollPercentage >= SCROLL_THRESHOLD) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    const handleTimeDelay = () => {
      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    timeoutId = setTimeout(handleTimeDelay, TIME_DELAY_MS);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [router.pathname]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(POPUP_STORAGE_KEY, new Date().toISOString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email.toLowerCase(), 
          source: 'site_popup' 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      if (!data.alreadySubscribed) {
        ConversionEvents.newsletterSignup('site_popup', {
          content_name: 'slp_weekly',
          content_category: 'newsletter',
        });
      }
      setMessage(
        data.alreadySubscribed
          ? "You're already subscribed!"
          : "Success! Check your inbox for a welcome email."
      );
      setEmail('');
      
      localStorage.setItem(SUBSCRIBED_STORAGE_KEY, 'true');

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      <div className="fixed inset-x-0 bottom-0 md:bottom-8 md:right-8 md:left-auto z-50 md:max-w-md">
        <div 
          className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up"
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-popup-title"
        >
          <div className="relative p-6 md:p-8">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close newsletter popup"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex-shrink-0">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 id="newsletter-popup-title" className="text-xl font-bold text-gray-900">
                  Stay in the Loop
                </h3>
                <p className="text-sm text-gray-600">SLP Weekly Newsletter</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Get weekly local news, events, and expat tips delivered to your inbox every Sunday.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'loading' || status === 'success'}
                required
                aria-label="Email address"
              />
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? 'Subscribing...'
                  : status === 'success'
                  ? '✓ Subscribed!'
                  : 'Subscribe Free'}
              </button>

              {message && (
                <div
                  className={`p-3 rounded-lg flex items-center text-sm ${
                    status === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                  role="alert"
                >
                  {status === 'success' && <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />}
                  <span>{message}</span>
                </div>
              )}
            </form>

            <p className="text-xs text-gray-500 text-center mt-3">
              Free, no spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        @media (min-width: 768px) {
          @keyframes slide-up {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
};

export default NewsletterPopup;
