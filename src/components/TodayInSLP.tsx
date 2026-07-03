import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  SunIcon,
  CloudIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  MapPinIcon,
  ClockIcon,
  TruckIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FireIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import type { WeatherData, ExchangeRate, NewsHeadline, CommunityNews, TrendingTopic } from '@/lib/api/dashboard-data';
import { getTipOfTheDay } from '@/data/daily-tips';

interface TodayEvent {
  id: string;
  title: string;
  location: string;
  time?: string;
}

interface TodayInSLPProps {
  todayEvents?: TodayEvent[];
}

const TRENDING_CHIP_STYLES: Record<TrendingTopic['category'], { iconBg: string; iconText: string; chip: string }> = {
  debate: { iconBg: 'bg-amber-100', iconText: 'text-amber-600', chip: 'bg-amber-100 text-amber-700' },
  viral: { iconBg: 'bg-pink-100', iconText: 'text-pink-600', chip: 'bg-pink-100 text-pink-700' },
  event: { iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', chip: 'bg-indigo-100 text-indigo-700' },
  controversy: { iconBg: 'bg-red-100', iconText: 'text-red-600', chip: 'bg-red-100 text-red-700' },
  culture: { iconBg: 'bg-violet-100', iconText: 'text-violet-600', chip: 'bg-violet-100 text-violet-700' },
  sports: { iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', chip: 'bg-emerald-100 text-emerald-700' },
  community: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', chip: 'bg-blue-100 text-blue-700' }
};

const trendingChipClasses = (category: TrendingTopic['category']) =>
  TRENDING_CHIP_STYLES[category] || TRENDING_CHIP_STYLES.community;

const TodayInSLP: React.FC<TodayInSLPProps> = ({ todayEvents = [] }) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [headlines, setHeadlines] = useState<NewsHeadline[]>([]);
  const [communityNews, setCommunityNews] = useState<CommunityNews[]>([]);
  const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch dashboard data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/dashboard-data');
        if (res.ok) {
          const data = await res.json();
          if (data.weather) setWeather(data.weather);
          if (data.exchangeRates?.length) setExchangeRates(data.exchangeRates);
          if (data.headlines?.length) setHeadlines(data.headlines);
          if (data.communityNews?.length) setCommunityNews(data.communityNews);
          if (data.trendingTopics?.length) setTrendingTopics(data.trendingTopics);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Time and currency rotation
  useEffect(() => {
    setCurrentDate(new Date());
    const updateTime = () => {
      const now = new Date();
      const localeMap: Record<string, string> = {
        es: 'es-MX',
        ja: 'ja-JP',
        de: 'de-DE',
        en: 'en-US'
      };
      setCurrentTime(now.toLocaleTimeString(localeMap[locale || 'en'] || 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Mexico_City'
      }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    const currencyInterval = setInterval(() => {
      setCurrencyIndex(prev => (prev + 1) % (exchangeRates.length || 5));
    }, 4000);
    return () => {
      clearInterval(timeInterval);
      clearInterval(currencyInterval);
    };
  }, [locale, exchangeRates.length]);

  const formatDate = (date: Date) => {
    const localeMap: Record<string, string> = {
      es: 'es-MX',
      ja: 'ja-JP',
      de: 'de-DE',
      en: 'en-US'
    };
    return date.toLocaleDateString(localeMap[locale || 'en'] || 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Mexico_City'
    });
  };

  /*
   * NEWS SOURCES (for internal reference - not displayed to users)
   * State Government: slp.gob.mx, Secretaría de Turismo SLP, Secretaría de Cultura SLP, SEDECO SLP, @GobEdoSLP
   * Municipal: sanluis.gob.mx, @SLPMunicipio
   * Media: El Sol de San Luis, Plano Informativo, Pulso SLP, Potosí Noticias, Código San Luis
   * CONTENT POLICY: Only positive/neutral news. NO: crimes, violence, arrests, accidents
   * Headlines are fetched from Supabase and updated daily at 7am via cron job with real web search
   */
  const getLocalizedText = (es: string, en: string, de: string, ja: string) => {
    if (locale === 'es') return es;
    if (locale === 'de') return de;
    if (locale === 'ja') return ja;
    return en;
  };

  const tickerHeadlines = headlines.map(h => ({
    id: h.id,
    text: getLocalizedText(h.textEs, h.textEn, h.textDe, h.textJa),
    summary: getLocalizedText(h.summaryEs, h.summaryEn, h.summaryDe, h.summaryJa),
    sourceUrl: h.sourceUrl ?? undefined,
    source: h.source ?? undefined
  }));
  const placeholderHeadline = { id: 'placeholder', text: t('todayInSLP.loadingNews'), summary: '', sourceUrl: undefined as string | undefined, source: undefined as string | undefined };
  const displayHeadlines = tickerHeadlines.length > 0 ? tickerHeadlines : [placeholderHeadline];

  // Auto-rotate news carousel every 8 seconds
  useEffect(() => {
    if (displayHeadlines.length <= 1) return;
    const interval = setInterval(() => {
      setNewsIndex(prev => (prev + 1) % displayHeadlines.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [displayHeadlines.length]);

  const todayTip = getTipOfTheDay();
  const dailyTip = locale === 'es' ? todayTip.es
    : locale === 'de' ? todayTip.de
    : locale === 'ja' ? todayTip.ja
    : todayTip.en;

  const getWeatherIcon = (condition?: string) => {
    switch (condition) {
      case 'cloudy':
        return <CloudIcon className="w-10 h-10 text-gray-400" />;
      case 'rainy':
        return <CloudIcon className="w-10 h-10 text-blue-400" />;
      default:
        return <SunIcon className="w-10 h-10 text-amber-500" />;
    }
  };

  const currentCurrency = exchangeRates[currencyIndex] || {
    code: 'USD', symbol: '$', name: 'Dólar', nameEn: 'US Dollar', rate: 0, flag: '🇺🇸'
  };

  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Main Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <MapPinIcon className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-semibold">San Luis Potosí</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('todayInSLP.title')}
          </h2>
          <p className="text-gray-500 capitalize">{currentDate ? formatDate(currentDate) : '\u00A0'}</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          {/* Weather Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
            <div className="flex items-start justify-between mb-3">
              {getWeatherIcon(weather?.condition)}
              {weather && (
                <span className="text-xs font-medium text-amber-800 bg-amber-100 px-2 py-1 rounded-full">
                  UV {weather.uvIndex}
                </span>
              )}
            </div>
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-10 bg-amber-200/50 rounded w-20 mb-2"></div>
                <div className="h-4 bg-amber-200/50 rounded w-16"></div>
              </div>
            ) : weather ? (
              <>
                <p className="text-4xl font-bold text-gray-900 mb-1">{weather.temp}°C</p>
                <p className="text-sm text-gray-600 mb-2">
                  {locale === 'es' ? weather.conditionEs : locale === 'ja' ? weather.conditionJa : weather.conditionEn}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>↓ {weather.tempMin}°</span>
                  <span>↑ {weather.tempMax}°</span>
                  <span>💧 {weather.humidity}%</span>
                </div>
                <div className="mt-3 pt-3 border-t border-amber-200/50 flex justify-between text-xs text-gray-500">
                  <span>🌅 {weather.sunrise}</span>
                  <span>🌇 {weather.sunset}</span>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">{t('todayInSLP.notAvailable')}</p>
            )}
          </div>

          {/* Exchange Rate Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 overflow-hidden">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{currentCurrency.flag}</span>
              <span className="text-xs font-medium text-emerald-800 bg-emerald-100 px-2 py-1 rounded-full">
                {t('todayInSLP.live')}
              </span>
            </div>
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-emerald-200/50 rounded w-24 mb-2"></div>
                <div className="h-4 bg-emerald-200/50 rounded w-20"></div>
              </div>
            ) : exchangeRates.length > 0 ? (
              <>
                <p className="text-3xl font-bold text-gray-900 mb-1 transition-all duration-300">
                  ${currentCurrency.rate.toFixed(currentCurrency.code === 'JPY' ? 3 : 2)}
                </p>
                <p className="text-sm text-gray-600 mb-2">{currentCurrency.code} → MXN</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    {locale === 'es' ? currentCurrency.name : currentCurrency.nameEn}
                  </p>
                  <div className="flex gap-1">
                    {exchangeRates.map((_, idx) => (
                      <span key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currencyIndex ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">{t('todayInSLP.notAvailable')}</p>
            )}
          </div>

          {/* Time & Events Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 border border-indigo-100">
            <div className="flex items-start justify-between mb-3">
              <ClockIcon className="w-10 h-10 text-indigo-600" />
              <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                CST
              </span>
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-1">{currentTime || '--:--'}</p>
            <p className="text-sm text-gray-600 mb-2">
              {t('todayInSLP.localTime')}
            </p>
            <Link href="/events/all" className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium">
              <CalendarDaysIcon className="w-3 h-3" />
              {todayEvents.length > 0 ? `${todayEvents.length} ${t('todayInSLP.eventsToday')}` : t('todayInSLP.viewCalendar')}
            </Link>
          </div>

          {/* Traffic Map Card */}
          <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-3 border border-cyan-100 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {t('todayInSLP.traffic')}
                </span>
              </div>
              <span className="text-xs font-medium text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-full">
                {t('todayInSLP.live')}
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden h-28 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29340.5!2d-100.9855!3d22.1565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1702500000000!5m2!1ses!2smx"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Luis Potosí Traffic Map"
              />
            </div>
            <a
              href="https://www.google.com/maps/@22.1565,-100.9855,14z/data=!5m1!1e1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 w-full py-1.5 bg-cyan-800 hover:bg-cyan-900 text-white text-xs font-semibold rounded-lg transition-colors"
              aria-label={`${t('todayInSLP.viewLiveTraffic')} (Google Maps)`}
            >
              {t('todayInSLP.viewLiveTraffic')}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Daily Tip Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                {t('todayInSLP.tipOfDay')}
              </p>
              <p className="text-gray-700">
                {dailyTip}
              </p>
            </div>
          </div>
        </div>

        {/* News Carousel */}
        <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl shadow-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <NewspaperIcon className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm">
                {t('todayInSLP.slpNews')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/70 text-sm">
                {newsIndex + 1} / {displayHeadlines.length}
              </span>
            </div>
          </div>

          <div className="relative">
            {(() => {
              const current = displayHeadlines[newsIndex];
              const headlineBody = (
                <>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    {current?.text}
                  </p>
                  {current?.summary && (
                    <p className="text-white/80 text-sm mt-2 leading-relaxed">
                      {current.summary}
                    </p>
                  )}
                  {current?.sourceUrl && (
                    <span className="inline-flex items-center gap-1 text-white/90 text-xs font-medium mt-3">
                      {current.source ? `${current.source} →` : t('todayInSLP.readMore', 'Read more')}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  )}
                </>
              );
              return current?.sourceUrl ? (
                <a
                  href={current.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-h-[100px] flex flex-col justify-center hover:bg-white/15 transition-colors"
                >
                  {headlineBody}
                </a>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-h-[100px] flex flex-col justify-center">
                  {headlineBody}
                </div>
              );
            })()}

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setNewsIndex(prev => prev === 0 ? displayHeadlines.length - 1 : prev - 1)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Previous news"
              >
                <ChevronLeftIcon className="w-5 h-5 text-white" />
              </button>

              <div className="flex gap-1">
                {displayHeadlines.map((_h, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setNewsIndex(idx)}
                    className="min-w-[24px] min-h-[24px] flex items-center justify-center"
                    aria-label={`Go to news ${idx + 1}`}
                    aria-current={idx === newsIndex ? 'true' : undefined}
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        idx === newsIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60 w-2'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setNewsIndex(prev => prev === displayHeadlines.length - 1 ? 0 : prev + 1)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Next news"
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Community News Section — only render when fresh data is available */}
        {communityNews.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <UserGroupIcon className="w-5 h-5 text-secondary" />
            <h3 className="font-semibold text-gray-800">
              {t('todayInSLP.communityLife')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityNews.map((news) => {
              const cardInner = (
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    news.category === 'social' ? 'bg-rose-100' :
                    news.category === 'community' ? 'bg-emerald-100' :
                    news.category === 'culture' ? 'bg-violet-100' :
                    'bg-blue-100'
                  }`}>
                    {news.category === 'social' && <HeartIcon className="w-5 h-5 text-rose-600" />}
                    {news.category === 'community' && <UserGroupIcon className="w-5 h-5 text-emerald-600" />}
                    {news.category === 'culture' && <SparklesIcon className="w-5 h-5 text-violet-600" />}
                    {news.category === 'local' && <BuildingOfficeIcon className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      news.category === 'social' ? 'text-rose-700' :
                      news.category === 'community' ? 'text-emerald-700' :
                      news.category === 'culture' ? 'text-violet-700' :
                      'text-blue-700'
                    }`}>
                      {t(`todayInSLP.${news.category}`)}
                    </span>
                    <h4 className="font-semibold text-gray-900 text-sm mt-1 line-clamp-2">
                      {getLocalizedText(news.titleEs, news.titleEn, news.titleDe, news.titleJa)}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                      {getLocalizedText(news.summaryEs, news.summaryEn, news.summaryDe, news.summaryJa)}
                    </p>
                    {news.sourceUrl && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary mt-2">
                        {t('todayInSLP.readMore', 'Read more')}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              );

              return news.sourceUrl ? (
                <a
                  key={news.id}
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all block"
                >
                  {cardInner}
                </a>
              ) : (
                <div
                  key={news.id}
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
        )}

        {/* Trending Conversation Topics — what the city is talking about */}
        {trendingTopics.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-1">
            <FireIcon className="w-5 h-5 text-secondary" />
            <h3 className="font-semibold text-gray-800">
              {t('todayInSLP.trendingTitle')}
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            {t('todayInSLP.trendingSubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trendingTopics.map((topic) => {
              const chipClasses = trendingChipClasses(topic.category);
              const cardInner = (
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${chipClasses.iconBg}`}>
                    <ChatBubbleLeftRightIcon className={`w-5 h-5 ${chipClasses.iconText}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${chipClasses.chip}`}>
                      {t(`todayInSLP.trendingCategories.${topic.category}`)}
                    </span>
                    <h4 className="font-semibold text-gray-900 text-sm mt-1.5 line-clamp-2">
                      {getLocalizedText(topic.titleEs, topic.titleEn, topic.titleDe, topic.titleJa)}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-3">
                      {getLocalizedText(topic.summaryEs, topic.summaryEn, topic.summaryDe, topic.summaryJa)}
                    </p>
                    {topic.sourceUrl && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary mt-2">
                        {topic.source ? `${topic.source} →` : t('todayInSLP.readMore', 'Read more')}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              );

              return topic.sourceUrl ? (
                <a
                  key={topic.id}
                  href={topic.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all block"
                >
                  {cardInner}
                </a>
              ) : (
                <div
                  key={topic.id}
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default TodayInSLP;
