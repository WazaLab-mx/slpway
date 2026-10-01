import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});

export default function JoinNewsletterPage() {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage(t('newsletter.invalidEmail'));
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase(), source: 'join_landing_page' }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      if (!data.alreadySubscribed) {
        ConversionEvents.newsletterSignup('join_landing_page');
      }
      setMessage(data.alreadySubscribed
        ? t('newsletter.alreadySubscribed')
        : data.resubscribed
          ? t('newsletter.welcomeBack')
          : t('newsletter.thankYou'));
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 8000);

    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : t('newsletter.errorGeneric'));
    }
  };

  return (
    <>
      <Head>
        <title>Join the San Luis Potosí Expat Newsletter | San Luis Way</title>
        <meta
          name="description"
          content="Get weekly expat tips for San Luis Potosí: neighborhood guides, visa updates, English-speaking doctors, events, and cost-of-living insights. Free arrival checklist included."
        />
        <meta name="robots" content="noindex,nofollow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Get the San Luis Potosí Expat Insider Newsletter" />
        <meta
          property="og:description"
          content="Weekly tips for living in SLP: neighborhoods, visas, doctors, events & more. Free for expats & digital nomads."
        />
        <meta property="og:url" content="https://www.sanluisway.com/join" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get the San Luis Potosí Expat Insider Newsletter" />
        <meta
          name="twitter:description"
          content="Weekly tips for living in SLP: neighborhoods, visas, doctors, events & more."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <EnvelopeIcon className="h-4 w-4" />
              {t('newsletter.joinPage.freeBadge')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t('newsletter.joinPage.title')}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              {t('newsletter.joinPage.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 border border-gray-100">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What You'll Get Every Week:
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { key: 'bullet1', icon: '🏘️' },
                  { key: 'bullet2', icon: '🛂' },
                  { key: 'bullet3', icon: '🏥' },
                  { key: 'bullet4', icon: '🎉' }
                ].map(({ key, icon }) => (
                  <div key={key} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <p className="text-gray-700 font-medium pt-1">
                      {t(`newsletter.joinPage.${key}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  {t('newsletter.joinPage.leadMagnetTitle')}
                </h3>
                <p className="text-gray-700">
                  {t('newsletter.joinPage.leadMagnetDesc')}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email-signup" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email-signup"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="w-full px-4 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'loading' || status === 'success'}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-6 py-4 text-lg rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed bg-secondary hover:bg-secondary-light text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {status === 'loading' 
                  ? t('newsletter.subscribing') 
                  : status === 'success' 
                    ? t('newsletter.subscribed') 
                    : t('newsletter.subscribe')}
              </button>
            </form>

            {message && (
              <div
                className={`mt-4 p-4 rounded-lg flex items-center text-sm ${
                  status === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status === 'success' && <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />}
                <span>{message}</span>
              </div>
            )}

            <p className="text-center text-sm text-gray-500 mt-4">
              {t('newsletter.joinPage.trustLine')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/resources/arrival-checklist"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-all duration-200 text-center"
            >
              📋 {t('newsletter.joinPage.downloadChecklist')}
            </Link>
            
            <Link
              href="/resources/living-guide"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-all duration-200 text-center"
            >
              📖 {t('newsletter.joinPage.secondaryCta')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
