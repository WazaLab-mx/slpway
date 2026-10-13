import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';
import { REAL_POTOSI_IMAGE, REAL_POTOSI_PATH } from '@/data/real-potosi-run-2026';

// Slim, low-key home promo for the Carrera Real del Potosí night race.
export default function RealPotosiRunBanner() {
  const { t } = useTranslation('real-potosi-run');
  const cta = t('banner.cta');

  return (
    <aside aria-labelledby="real-potosi-banner-title" className="container mx-auto px-4 py-6 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-indigo-950/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-6">
        <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
          <Image src={REAL_POTOSI_IMAGE} alt="" fill sizes="(min-width: 640px) 128px, 100vw" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">{t('banner.badge')}</p>
          <h2 id="real-potosi-banner-title" className="mt-1 text-lg font-bold text-slate-900">{t('banner.title')}</h2>
          <p className="mt-1 text-sm text-slate-600">{t('banner.text')}</p>
        </div>
        <Link
          href={REAL_POTOSI_PATH}
          onClick={() => ConversionEvents.ctaClick('real-potosi-home-banner', cta, 'home')}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {cta}
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
