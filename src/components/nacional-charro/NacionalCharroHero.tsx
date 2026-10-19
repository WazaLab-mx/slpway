import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { NACIONAL_CHARRO_IMAGE, NACIONAL_CHARRO_TICKETS_URL } from '@/data/nacional-charro-2026';

const button = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300';

export default function NacionalCharroHero() {
  const { t } = useTranslation('nacional-charro');
  const facts = [
    { Icon: CalendarDaysIcon, text: t('hero.date') },
    { Icon: ClockIcon, text: t('hero.time') },
    { Icon: MapPinIcon, text: t('hero.location') },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0f2a1d] text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f2a1d] via-[#143a27] to-[#5a2a0c]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-14 md:grid-cols-[1fr_auto] md:px-8 md:pb-20 md:pt-20">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
            {t('hero.eyebrow')}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{t('banner.title')}</h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-amber-200 md:text-2xl">{t('hero.subtitle')}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-50 md:text-lg">{t('hero.description')}</p>
          <ul className="mt-6 space-y-2">
            {facts.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-emerald-50 md:text-base">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-amber-300" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={NACIONAL_CHARRO_TICKETS_URL} target="_blank" rel="noopener noreferrer" className={`${button} bg-amber-300 text-slate-950 hover:bg-amber-200`}>
              {t('hero.ctaTickets')}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link href="#detalles" className={`${button} border border-white/30 bg-white/10 text-white hover:bg-white/20`}>
              {t('hero.ctaGuide')}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 sm:w-64 md:w-72">
          <Image src={NACIONAL_CHARRO_IMAGE} alt={t('hero.alt')} fill priority sizes="(min-width: 768px) 288px, 256px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
