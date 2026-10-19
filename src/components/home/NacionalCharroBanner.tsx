import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';
import { NACIONAL_CHARRO_IMAGE, NACIONAL_CHARRO_PATH } from '@/data/nacional-charro-2026';

// Home promo for the national charrería championship running at Arena Potosí.
export default function NacionalCharroBanner() {
  const { t } = useTranslation('nacional-charro');
  const cta = t('banner.cta');

  return (
    <aside aria-labelledby="nacional-charro-banner-title" className="container mx-auto px-4 py-6 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f2a1d] to-[#143a27] p-4 text-white shadow-sm sm:flex-row sm:items-center sm:gap-6">
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-24">
          <Image src={NACIONAL_CHARRO_IMAGE} alt="" fill sizes="(min-width: 640px) 96px, 100vw" className="object-cover object-top" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-300">{t('banner.badge')}</p>
          <h2 id="nacional-charro-banner-title" className="mt-1 text-lg font-bold text-white">{t('banner.title')}</h2>
          <p className="mt-1 text-sm text-emerald-50">{t('banner.text')}</p>
        </div>
        <Link
          href={NACIONAL_CHARRO_PATH}
          onClick={() => ConversionEvents.ctaClick('nacional-charro-home-banner', cta, 'home')}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          {cta}
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
