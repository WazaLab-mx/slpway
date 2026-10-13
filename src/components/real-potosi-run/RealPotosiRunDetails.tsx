import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { REAL_POTOSI_REGISTRATION_URL } from '@/data/real-potosi-run-2026';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

interface Fact { label: string; value: string }
interface Tip { title: string; description: string }

const heading = 'font-serif text-3xl font-bold text-[#0a1230] sm:text-4xl';
const card = 'rounded-2xl border border-indigo-950/10 bg-white p-6';
const button = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors';

// Essentials, kit, registration, tips, FAQ and sources for the night race.
export default function RealPotosiRunDetails() {
  const { t } = useTranslation('real-potosi-run');
  const facts = t('facts.items', { returnObjects: true }) as Fact[];
  const kit = t('kit.items', { returnObjects: true }) as string[];
  const tips = t('tips.items', { returnObjects: true }) as Tip[];
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 md:px-8 md:py-16">
      <p role="note" className="rounded-xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-orange-950">
        <strong className="block text-slate-900">{t('status.title')}</strong>
        {t('status.description')}
      </p>

      <section id="detalles" className="scroll-mt-24">
        <h2 className={heading}>{t('facts.title')}</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className={card}>
              <dt className="text-xs font-bold uppercase tracking-wider text-indigo-700">{f.label}</dt>
              <dd className="mt-2 font-semibold text-slate-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className={heading}>{t('kit.title')}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {kit.map((item) => (
              <li key={item} className="rounded-full bg-[#0a1230] px-4 py-2 text-sm font-semibold text-cyan-100">{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">{t('kit.sizes')}</p>
        </div>
        <div>
          <h2 className={heading}>{t('registration.title')}</h2>
          <p className="mt-6 leading-relaxed text-slate-700">{t('registration.description')}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{t('registration.policy')}</p>
          <a href={REAL_POTOSI_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={`${button} mt-5 bg-[#0a1230] text-white hover:bg-indigo-900`}>
            {t('actions.official')}
          </a>
        </div>
      </section>

      <section>
        <h2 className={heading}>{t('tips.title')}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <div key={tip.title} className={card}>
              <h3 className="font-bold text-slate-900">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl">
        <h2 className={heading}>{t('faq.title')}</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-indigo-950/10 bg-white p-5">
              <summary className="cursor-pointer font-bold text-slate-900">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-bold text-[#0a1230]">{t('sources.title')}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">{t('sources.description')}</p>
        <a className="mt-3 inline-block text-sm text-indigo-800 underline underline-offset-4 hover:text-slate-900" href={REAL_POTOSI_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          {t('sources.official')}
        </a>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/events/medio-maraton-capital-del-deporte-2026" className={`${button} border border-slate-300 text-slate-900 hover:bg-white`}>{t('actions.halfMarathon')}</Link>
          <Link href="/parque-tangamanga" className={`${button} border border-slate-300 text-slate-900 hover:bg-white`}>{t('actions.tangamanga')}</Link>
        </div>
      </section>
    </div>
  );
}
