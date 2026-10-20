import React, { useState } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';

interface CompactNewsletterSignupProps {
  source: 'inline_article' | 'inline_guide' | 'footer';
  className?: string;
  title?: string;
  description?: string;
}

const CompactNewsletterSignup: React.FC<CompactNewsletterSignupProps> = ({
  source,
  className = '',
  title = 'Get the SLP Weekly Newsletter',
  description = 'Weekly local news, events, and tips for expats in San Luis Potosí — delivered every Sunday.',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
          source: `site_${source}` 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      if (!data.alreadySubscribed) {
        ConversionEvents.newsletterSignup(`site_${source}`, {
          content_name: 'slp_weekly',
          content_category: 'newsletter',
        });
      }
      setMessage(
        data.alreadySubscribed
          ? "You're already subscribed!"
          : data.resubscribed
          ? 'Welcome back! You have been resubscribed.'
          : "Success! Check your inbox for a welcome email."
      );
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 8000);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex-shrink-0">
            <EnvelopeIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading' || status === 'success'}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading'
                ? 'Subscribing...'
                : status === 'success'
                ? '✓ Subscribed'
                : 'Subscribe'}
            </button>
          </div>

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
          Free, no spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default CompactNewsletterSignup;
