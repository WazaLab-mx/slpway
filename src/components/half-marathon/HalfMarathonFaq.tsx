import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { HALF_MARATHON_SOURCES, type FaqItem } from '@/data/half-marathon-capital-2026';

const button = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300';

// FAQ, sources and closing calls to action.
export default function HalfMarathonFaq() {
  const { t } = useTranslation('half-marathon-capital');
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];
  const sources = Object.entries(HALF_MARATHON_SOURCES) as [keyof typeof HALF_MARATHON_SOURCES, string][];

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <h2 className="font-serif text-3xl font-bold text-[#0b2420] sm:text-4xl">{t('faq.title')}</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-emerald-900/10 bg-white p-5 open:shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden">{f.q}</summary>
              <p className="mt-3 break-words text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-8">
        <h2 className="font-serif text-2xl font-bold text-[#0b2420]">{t('sources.title')}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{t('sources.description')}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-800">
          {sources.map(([key, url]) => (
            <li key={key}>
              <a className="underline underline-offset-4 hover:text-slate-900" href={url} target="_blank" rel="noopener noreferrer">{t(`sources.${key}`)}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#0b2420] text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center md:px-8">
          <h2 className="font-serif text-3xl font-bold text-white">{t('actions.title')}</h2>
          <p className="mt-3 text-emerald-100">{t('actions.description')}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={HALF_MARATHON_SOURCES.convocatoria} target="_blank" rel="noopener noreferrer" className={`${button} bg-lime-400 text-slate-950 hover:bg-lime-300`}>
              {t('actions.official')}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link href="/events/medio-maraton-uaslp-2026" className={`${button} border border-white/30 bg-white/10 hover:bg-white/20`}>{t('actions.uaslp')}</Link>
            <Link href="/events/this-week" className={`${button} border border-white/30 bg-white/10 hover:bg-white/20`}>{t('actions.events')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
