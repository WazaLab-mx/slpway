import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';

// Points new residents from the guides to the home services finder.
export default function HomeServicesCta({ source }: { source: string }) {
  const { t } = useTranslation('common');
  return (
    <section className="my-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <span className="rounded-full bg-white p-3 text-blue-600 shadow-sm">
          <WrenchScrewdriverIcon className="h-7 w-7" aria-hidden />
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{t('homeServiceFinder.cta.title')}</h2>
          <p className="mt-1 text-gray-700">{t('homeServiceFinder.cta.text')}</p>
        </div>
        <Link
          href="/san-luis-potosi-home-services#service-finder"
          onClick={() => ConversionEvents.ctaClick('home-services-cta', t('homeServiceFinder.cta.button'), source)}
          className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
        >
          {t('homeServiceFinder.cta.button')}
        </Link>
      </div>
    </section>
  );
}
