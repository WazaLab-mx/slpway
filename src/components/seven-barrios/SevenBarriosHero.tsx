import { useTranslation } from 'next-i18next';
import { ArrowTopRightOnSquareIcon, MapIcon } from '@heroicons/react/24/outline';
import { buildWalkingRouteUrl } from '@/lib/seven-barrios';

const button =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFCB05]';

export default function SevenBarriosHero() {
  const { t } = useTranslation('seven-barrios');

  return (
    <section className="bg-[#011A42] text-white">
      <div className="mx-auto max-w-5xl px-4 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
        <p className="mb-5 inline-flex rounded-full border border-[#FFCB05]/40 bg-[#FFCB05]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFCB05]">
          {t('hero.eyebrow')}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{t('hero.title')}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">{t('hero.intro')}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#map" className={`${button} bg-[#FFCB05] text-[#011A42] hover:bg-[#ffd83d]`}>
            <MapIcon aria-hidden="true" className="h-5 w-5" />
            {t('hero.ctaMap')}
          </a>
          <a
            href={buildWalkingRouteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} border border-white/30 bg-white/10 text-white hover:bg-white/20`}
          >
            {t('hero.ctaRoute')}
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
