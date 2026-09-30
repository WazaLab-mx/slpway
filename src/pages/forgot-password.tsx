import { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useAuth } from '@/lib/supabase-auth';

// Asks Supabase to email a recovery link that lands on /reset-password.
export default function ForgotPasswordPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    const { error } = await forgotPassword(email.trim(), locale);
    // Same message whether or not the account exists, so emails can't be probed.
    setStatus(error && error.status !== 400 && error.status !== 404 ? 'error' : 'sent');
  };

  return (
    <>
      <Head>
        <title>{`${t('passwordReset.forgotTitle')} | San Luis Way`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('passwordReset.forgotTitle')}</h1>

          {status === 'sent' ? (
            <p role="status" className="mt-4 rounded-md bg-green-50 p-4 text-green-800">
              {t('passwordReset.sent')}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <p className="text-gray-600">{t('passwordReset.forgotIntro')}</p>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('passwordReset.emailLabel')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm"
                  disabled={status === 'sending'}
                />
              </div>
              {status === 'error' && (
                <p role="alert" className="text-sm text-red-600">{t('passwordReset.sendError')}</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-md bg-primary px-4 py-3 font-semibold text-white hover:bg-primary/90 disabled:opacity-60"
              >
                {status === 'sending' ? t('passwordReset.sending') : t('passwordReset.sendLink')}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm">
            <Link href="/signin" className="text-primary hover:underline">{t('passwordReset.backToSignIn')}</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});
