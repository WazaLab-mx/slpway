import { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useAuth } from '@/lib/supabase-auth';
import { NewPasswordError, readRecoveryLinkError, validateNewPassword } from '@/lib/password-reset';

// Landing page of the recovery email. Supabase exchanges the link's code for a
// session on load; with that session the user can set a new password.
export default function ResetPasswordPage() {
  const { t } = useTranslation('common');
  const { session, isLoading, resetPassword } = useAuth();
  const [linkError, setLinkError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [formError, setFormError] = useState<NewPasswordError | 'saveFailed'>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done'>('idle');

  useEffect(() => {
    setLinkError(readRecoveryLinkError(window.location.search, window.location.hash));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validation = validateNewPassword(password, confirmation);
    setFormError(validation);
    if (validation) return;
    setStatus('saving');
    const { error } = await resetPassword(password);
    if (error) {
      setFormError('saveFailed');
      setStatus('idle');
      return;
    }
    setStatus('done');
  };

  const linkInvalid = !isLoading && (Boolean(linkError) || !session);

  return (
    <>
      <Head>
        <title>{`${t('passwordReset.resetTitle')} | San Luis Way`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('passwordReset.resetTitle')}</h1>

          {isLoading && <p className="mt-4 text-gray-600">{t('passwordReset.checkingLink')}</p>}

          {status === 'done' && (
            <div role="status" className="mt-4 space-y-4">
              <p className="rounded-md bg-green-50 p-4 text-green-800">{t('passwordReset.done')}</p>
              <Link href="/business/dashboard" className="inline-block font-semibold text-primary hover:underline">
                {t('passwordReset.goToDashboard')} →
              </Link>
            </div>
          )}

          {status !== 'done' && linkInvalid && (
            <div role="alert" className="mt-4 space-y-4">
              <p className="rounded-md bg-red-50 p-4 text-red-800">{t('passwordReset.invalidLink')}</p>
              <Link href="/forgot-password" className="inline-block font-semibold text-primary hover:underline">
                {t('passwordReset.requestNewLink')} →
              </Link>
            </div>
          )}

          {status !== 'done' && !isLoading && !linkInvalid && (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {t('passwordReset.newPassword')}
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700">
                  {t('passwordReset.confirmPassword')}
                </label>
                <input
                  id="confirmation"
                  type="password"
                  autoComplete="new-password"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm"
                />
              </div>
              {formError && (
                <p role="alert" className="text-sm text-red-600">{t(`passwordReset.errors.${formError}`)}</p>
              )}
              <button
                type="submit"
                disabled={status === 'saving'}
                className="w-full rounded-md bg-primary px-4 py-3 font-semibold text-white hover:bg-primary/90 disabled:opacity-60"
              >
                {status === 'saving' ? t('passwordReset.saving') : t('passwordReset.save')}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});
