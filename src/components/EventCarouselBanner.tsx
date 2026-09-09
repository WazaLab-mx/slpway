import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

export default function EventCarouselBanner() {
  const { t } = useTranslation('xantolo');
  return (
    <section aria-labelledby="xantolo-banner-title" className="relative isolate overflow-hidden bg-[#101b32] text-white">
      <div className="absolute inset-0 -z-10 lg:left-1/3">
        <Image src="/images/events/xantolo-image-3.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101b32] via-[#101b32]/85 to-[#101b32]/40" />
      </div>
      <div className="container mx-auto px-5 py-14 md:px-8 md:py-20 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300"><span aria-hidden="true" className="h-px w-8 bg-orange-400" />{t('banner.badge')}</p>
          <h2 id="xantolo-banner-title" className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{t('banner.title')}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">{t('banner.description')}</p>
          <p className="mt-6 text-sm font-semibold text-amber-200">2026 <span aria-hidden="true" className="mx-2">/</span> {t('hero.location')}</p>
          <Link href="/events/xantolo-2026" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-bold text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
            {t('banner.cta')}<ArrowRightIcon aria-hidden="true" className="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
