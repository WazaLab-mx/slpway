import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { HALF_MARATHON_IMAGE, HALF_MARATHON_SOURCES } from '@/data/half-marathon-capital-2026';

const STATS = ['date', 'cost', 'distances', 'kits'] as const;
const button = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300';

export default function HalfMarathonHero() {
  const { t } = useTranslation('half-marathon-capital');
  const facts = [
    { Icon: CalendarDaysIcon, text: t('hero.date') },
    { Icon: ClockIcon, text: t('hero.time') },
    { Icon: MapPinIcon, text: t('hero.location') },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0b2420] text-white">
      <div className="absolute inset-0 -z-10 md:left-1/3">
        <Image src={HALF_MARATHON_IMAGE} alt={t('hero.alt')} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2420] via-[#0b2420]/85 to-[#0b2420]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2420] via-transparent to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <p className="mb-5 inline-flex rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-300">
          {t('hero.eyebrow')}
        </p>
        <h1 className="max-w-3xl font-serif text-white text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{t('banner.title')}</h1>
        <p className="mt-4 max-w-2xl text-xl font-semibold text-lime-200 md:text-2xl">{t('hero.subtitle')}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-100 md:text-lg">{t('hero.description')}</p>
        <ul className="mt-6 space-y-2">
          {facts.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-emerald-50 md:text-base">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-lime-300" />
              {text}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={HALF_MARATHON_SOURCES.convocatoria} target="_blank" rel="noopener noreferrer" className={`${button} bg-lime-400 text-slate-950 hover:bg-lime-300`}>
            {t('hero.ctaRegister')}
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </a>
          <Link href="#inscripcion" className={`${button} border border-white/30 bg-white/10 text-white hover:bg-white/20`}>
            {t('hero.ctaGuide')}
          </Link>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/20 pt-6 sm:grid-cols-4">
          {STATS.map((key) => (
            <div key={key}>
              <dt className="text-xs uppercase tracking-wider text-emerald-100/80">{t(`stats.${key}.label`)}</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{t(`stats.${key}.value`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
