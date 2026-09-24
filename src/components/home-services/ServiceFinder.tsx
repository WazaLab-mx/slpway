import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { CATEGORY_KEYS, MAX_PROBLEM_LENGTH } from '@/lib/home-services-categories';
import { selectProviders, featuredProviders, type HomeServiceProvider } from '@/lib/home-services-providers';
import type { MatchResult } from '@/lib/home-services-match';
import ProviderCard from './ProviderCard';

const INITIAL_VISIBLE = 3;

export default function ServiceFinder({ providers }: { providers: HomeServiceProvider[] }) {
  const { t } = useTranslation('common');
  const [problem, setProblem] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [match, setMatch] = useState<MatchResult | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const pick = (key: string) => {
    setCategory(key);
    setShowAll(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/home-services/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem }),
      });
      if (!response.ok) throw new Error(`Match failed: ${response.status}`);
      const result: MatchResult = await response.json();
      setMatch(result);
      setCategory(result.category);
      setShowAll(false);
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  const results = category ? selectProviders(providers, category, Boolean(match?.urgent)) : [];
  const visible = showAll ? results : results.slice(0, INITIAL_VISIBLE);
  const chip = (key: string, active: boolean) =>
    `rounded-full border px-3 py-1.5 text-sm transition-colors ${active
      ? 'border-blue-600 bg-blue-600 text-white'
      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'}`;

  return (
    <section id="service-finder" className="mx-auto max-w-5xl scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8 lg:p-10">
      <h2 className="text-center text-3xl font-bold text-gray-900">{t('homeServiceFinder.title')}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">{t('homeServiceFinder.subtitle')}</p>
      <p className="mx-auto mt-4 flex max-w-3xl gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden />
        <span>{t('homeServiceFinder.disclaimer')}</span>
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
        <label htmlFor="home-problem" className="sr-only">{t('homeServiceFinder.placeholder')}</label>
        <input
          id="home-problem"
          value={problem}
          onChange={e => setProblem(e.target.value)}
          maxLength={MAX_PROBLEM_LENGTH}
          minLength={3}
          required
          placeholder={t('homeServiceFinder.placeholder')}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" disabled={status === 'loading'}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50">
          {status === 'loading' ? t('homeServiceFinder.searching') : t('homeServiceFinder.submit')}
        </button>
      </form>
      {status === 'error' && <p className="mt-3 text-center text-red-600">{t('homeServiceFinder.error')}</p>}

      {match && !match.category && (
        <p className="mt-4 text-center text-gray-700">
          {match.alternatives.length ? t('homeServiceFinder.unsure') : t('homeServiceFinder.noMatch')}
        </p>
      )}
      {match?.urgent && category && (
        <p className="mx-auto mt-4 max-w-2xl rounded-lg bg-red-50 p-3 text-center text-sm text-red-800">{t('homeServiceFinder.urgentNotice')}</p>
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {(match && !match.category && match.alternatives.length ? match.alternatives : CATEGORY_KEYS).map(key => (
          <button key={key} type="button" onClick={() => pick(key)} className={chip(key, key === category)}>
            {t(`homeServiceFinder.categories.${key}`)}
          </button>
        ))}
      </div>

      {!category && !(match && !match.category) && (
        <div className="mt-8">
          <h3 className="text-center text-lg font-semibold text-gray-900">{t('homeServiceFinder.featured')}</h3>
          <p className="mt-1 text-center text-sm text-gray-500">{t('homeServiceFinder.featuredHint')}</p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProviders(providers).map(p => <ProviderCard key={p.id} provider={p} showCategory />)}
          </div>
        </div>
      )}

      {category && (
        <div className="mt-8">
          {results.length === 0 ? (
            <p className="text-center text-gray-600">{t('homeServiceFinder.noProviders')}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {visible.map(p => <ProviderCard key={p.id} provider={p} />)}
              </div>
              {results.length > INITIAL_VISIBLE && !showAll && (
                <div className="mt-6 text-center">
                  <button type="button" onClick={() => setShowAll(true)} className="font-semibold text-blue-600 hover:underline">
                    {t('homeServiceFinder.showMore', { count: results.length - INITIAL_VISIBLE })}
                  </button>
                </div>
              )}
              <p className="mt-6 text-center text-xs text-gray-500">{t('homeServiceFinder.rankingNote')}</p>
            </>
          )}
        </div>
      )}
    </section>
  );
}
