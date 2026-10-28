import { useTranslation } from 'next-i18next';
import type { FaqItem } from '@/data/half-marathon-capital-2026';

interface PracticalItem {
  label: string;
  value: string;
}

export default function WalkingRouteInfo() {
  const { t } = useTranslation('seven-barrios');
  const practical = t('practical.items', { returnObjects: true }) as PracticalItem[];
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 pb-12 md:px-8">
      <section aria-labelledby="practical-title" className="rounded-3xl bg-[#011A42] p-6 text-white md:p-10">
        <h2 id="practical-title" className="font-serif text-3xl font-bold text-white">{t('practical.title')}</h2>
        <p className="mt-3 max-w-2xl text-slate-200">{t('practical.intro')}</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {practical.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <dt className="text-xs font-bold uppercase tracking-widest text-[#FFCB05]">{item.label}</dt>
              <dd className="mt-1 text-slate-100">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-serif text-3xl font-bold text-[#011A42]">{t('faq.title')}</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-[#011A42]/10 bg-white p-5">
              <summary className="cursor-pointer list-none font-bold text-[#011A42] marker:hidden">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-slate-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
