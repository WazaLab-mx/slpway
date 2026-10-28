import { useTranslation } from 'next-i18next';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { BARRIOS, buildPlaceUrl } from '@/lib/seven-barrios';

export default function BarrioCards() {
  const { t } = useTranslation('seven-barrios');

  return (
    <section aria-labelledby="barrios-title" className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <h2 id="barrios-title" className="font-serif text-3xl font-bold text-[#011A42] md:text-4xl">{t('barrios.title')}</h2>
      <ol className="mt-8 grid gap-5 md:grid-cols-2">
        {BARRIOS.map((barrio, index) => (
          <li key={barrio.id} id={barrio.id} className="flex flex-col rounded-2xl border border-[#011A42]/10 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#011A42] bg-[#FFCB05] font-extrabold text-[#011A42]">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#011A42]">Barrio de {barrio.name}</h3>
                <p className="text-sm font-semibold text-[#011A42]/70">
                  {barrio.foundedYear ? t('barrios.founded', { year: barrio.foundedYear }) : t('barrios.foundedUnknown')}
                </p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-slate-700">{t(`barrios.items.${barrio.id}.history`)}</p>
            <p className="mt-4 text-sm text-slate-700">
              <span className="font-bold text-[#011A42]">{t('barrios.seeTitle')}: </span>
              {t(`barrios.items.${barrio.id}.see`)}
            </p>
            <a
              href={buildPlaceUrl(barrio)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[#011A42]/20 px-4 py-2 text-sm font-bold text-[#011A42] transition-colors hover:bg-[#FFCB05]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011A42]"
            >
              <MapPinIcon aria-hidden="true" className="h-4 w-4" />
              {t('barrios.openMaps')}
              <span className="sr-only"> · Barrio de {barrio.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
