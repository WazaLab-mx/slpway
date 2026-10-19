import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { NACIONAL_CHARRO_MAPS_URL, NACIONAL_CHARRO_OFFICIAL_URL, NACIONAL_CHARRO_TICKETS_URL } from '@/data/nacional-charro-2026';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

interface Fact { label: string; value: string }
interface Price { zone: string; weekday: string; weekend: string }
interface FinalPrice { zone: string; price: string }
interface Tip { title: string; description: string }

const heading = 'font-serif text-3xl font-bold text-[#0f2a1d] sm:text-4xl';
const card = 'rounded-2xl border border-emerald-950/10 bg-white p-6';
const button = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors';
const link = 'text-sm text-emerald-800 underline underline-offset-4 hover:text-slate-900';

// Essentials, ticket prices, what to watch, tips, FAQ and sources for the national championship.
export default function NacionalCharroDetails() {
  const { t } = useTranslation('nacional-charro');
  const facts = t('facts.items', { returnObjects: true }) as Fact[];
  const prices = t('tickets.qualifiers', { returnObjects: true }) as Price[];
  const finals = t('tickets.finals', { returnObjects: true }) as FinalPrice[];
  const notes = t('tickets.notes', { returnObjects: true }) as string[];
  const events = t('watch.items', { returnObjects: true }) as Tip[];
  const tips = t('tips.items', { returnObjects: true }) as Tip[];
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 md:px-8 md:py-16">
      <section id="detalles" className="scroll-mt-24">
        <h2 className={heading}>{t('facts.title')}</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className={card}>
              <dt className="text-xs font-bold uppercase tracking-wider text-emerald-700">{f.label}</dt>
              <dd className="mt-2 font-semibold text-slate-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className={heading}>{t('tickets.title')}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{t('tickets.description')}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className={`${card} overflow-x-auto`}>
            <h3 className="font-bold text-slate-900">{t('tickets.qualifiersTitle')}</h3>
            <table className="mt-4 w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-emerald-700">
                <tr><th className="py-2 pr-4">{t('tickets.zone')}</th><th className="py-2 pr-4">{t('tickets.weekday')}</th><th className="py-2">{t('tickets.weekend')}</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((p) => (
                  <tr key={p.zone}><td className="py-2 pr-4 font-semibold text-slate-900">{p.zone}</td><td className="py-2 pr-4">{p.weekday}</td><td className="py-2">{p.weekend}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={card}>
            <h3 className="font-bold text-slate-900">{t('tickets.finalsTitle')}</h3>
            <ul className="mt-4 divide-y divide-slate-100 text-sm">
              {finals.map((p) => (
                <li key={p.zone} className="flex justify-between gap-4 py-2"><span className="font-semibold text-slate-900">{p.zone}</span><span>{p.price}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
        <a href={NACIONAL_CHARRO_TICKETS_URL} target="_blank" rel="noopener noreferrer" className={`${button} mt-5 bg-[#0f2a1d] text-white hover:bg-emerald-900`}>
          {t('actions.tickets')}
        </a>
      </section>

      {[{ key: 'watch', items: events }, { key: 'tips', items: tips }].map(({ key, items }) => (
        <section key={key}>
          <h2 className={heading}>{t(`${key}.title`)}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.title} className={card}>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-3xl">
        <h2 className={heading}>{t('faq.title')}</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-emerald-950/10 bg-white p-5">
              <summary className="cursor-pointer font-bold text-slate-900">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-bold text-[#0f2a1d]">{t('sources.title')}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">{t('sources.description')}</p>
        <div className="mt-3 flex flex-col gap-2">
          <a className={link} href={NACIONAL_CHARRO_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">{t('sources.official')}</a>
          <a className={link} href={NACIONAL_CHARRO_MAPS_URL} target="_blank" rel="noopener noreferrer">{t('sources.maps')}</a>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/events" className={`${button} border border-slate-300 text-slate-900 hover:bg-white`}>{t('actions.events')}</Link>
          <Link href="/cultural" className={`${button} border border-slate-300 text-slate-900 hover:bg-white`}>{t('actions.culture')}</Link>
        </div>
      </section>
    </div>
  );
}
