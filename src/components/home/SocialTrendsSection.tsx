import React from 'react';
import { useTranslation } from 'next-i18next';
import { ChatBubbleLeftRightIcon, FireIcon } from '@heroicons/react/24/outline';
import type { TrendingTopic } from '@/lib/api/dashboard-data';

interface Props {
  topics: TrendingTopic[];
  locale?: string;
  loading?: boolean;
}

const CHIP_STYLES: Record<TrendingTopic['category'], string> = {
  debate: 'bg-amber-100 text-amber-700', viral: 'bg-pink-100 text-pink-700',
  event: 'bg-indigo-100 text-indigo-700', controversy: 'bg-red-100 text-red-700',
  culture: 'bg-violet-100 text-violet-700', sports: 'bg-emerald-100 text-emerald-700',
  community: 'bg-blue-100 text-blue-700',
};

export default function SocialTrendsSection({ topics, locale = 'en', loading = false }: Props) {
  const { t } = useTranslation('common');
  const language = ({ es: 'Es', de: 'De', ja: 'Ja', en: 'En' } as const)[locale as 'es' | 'de' | 'ja' | 'en'] || 'En';

  return (
    <section className="mt-6" aria-labelledby="social-trends-title">
      <div className="flex items-center gap-2 mb-1">
        <FireIcon className="w-5 h-5 text-secondary" aria-hidden="true" />
        <h3 id="social-trends-title" className="font-semibold text-gray-800">{t('todayInSLP.trendingTitle')}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">{t('todayInSLP.trendingSubtitle')}</p>
      {topics.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topics.map(topic => (
            <article key={topic.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-100 text-blue-600">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${CHIP_STYLES[topic.category] || CHIP_STYLES.community}`}>
                    {t(`todayInSLP.trendingCategories.${topic.category}`)}
                  </span>
                  <h4 className="font-semibold text-gray-900 text-sm mt-1.5">{topic[`title${language}`]}</h4>
                  <p className="text-gray-600 text-xs mt-2">{topic[`summary${language}`]}</p>
                  {topic.verifiedAt && !Number.isNaN(Date.parse(topic.verifiedAt)) && (
                    <p className="text-xs text-gray-500 mt-3">
                      {t('todayInSLP.trendingChecked')} <time dateTime={topic.verifiedAt}>{new Date(topic.verifiedAt).toLocaleDateString(locale, {
                        month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Mexico_City',
                      })}</time>
                    </p>
                  )}
                  {topic.sourceUrl && (
                    <a href={topic.sourceUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex flex-wrap gap-1 text-xs font-medium text-secondary mt-3 hover:underline focus-visible:outline focus-visible:outline-2">
                      {t('todayInSLP.joinConversation')} · {topic.source} ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p role="status" className="text-sm text-gray-600">{t(loading ? 'todayInSLP.trendingLoading' : 'todayInSLP.trendingChecking')}</p>
          <a href="https://www.reddit.com/r/SanLuisPotosi/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-secondary hover:underline">
            {t('todayInSLP.joinConversation')} · Reddit ↗
          </a>
        </div>
      )}
    </section>
  );
}
