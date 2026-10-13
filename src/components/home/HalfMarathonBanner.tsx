import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';
import { HALF_MARATHON_IMAGE, HALF_MARATHON_PATH } from '@/data/half-marathon-capital-2026';

const DISTANCES = ['21K', '10K', '5K'];

// Promotes the Medio Maratón La Capital del Deporte 2026 guide on the home page.
export default function HalfMarathonBanner() {
  const { t } = useTranslation('half-marathon-capital');
  const cta = t('banner.cta');

  return (
    <section aria-labelledby="half-marathon-banner-title" className="relative isolate overflow-hidden bg-[#0b2420] text-white">
      <div className="absolute inset-0 -z-10 lg:left-1/3">
        <Image src={HALF_MARATHON_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2420] via-[#0b2420]/85 to-[#0b2420]/40" />
      </div>
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-300">
            {t('banner.badge')}
          </p>
          <h2 id="half-marathon-banner-title" className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t('banner.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-100 md:text-lg">{t('banner.description')}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm font-semibold text-emerald-50 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2"><CalendarDaysIcon aria-hidden="true" className="h-5 w-5 text-lime-300" />{t('banner.date')}</span>
            <span className="flex items-center gap-2"><MapPinIcon aria-hidden="true" className="h-5 w-5 text-lime-300" />{t('banner.location')}</span>
          </div>
          <ul className="mt-5 flex gap-2">
            {DISTANCES.map((d) => (
              <li key={d} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold">{d}</li>
            ))}
          </ul>
          <Link
            href={HALF_MARATHON_PATH}
            onClick={() => ConversionEvents.ctaClick('half-marathon-home-banner', cta, 'home')}
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 font-bold text-slate-950 transition-colors hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:w-auto"
          >
            {cta}
            <ArrowRightIcon aria-hidden="true" className="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
