import { useTranslation } from 'next-i18next';

interface Card { title: string; description: string }

const heading = 'font-serif text-3xl font-bold text-[#0b2420] sm:text-4xl';

// Registration, kit pickup, rules and race-day tips.
export default function HalfMarathonLogistics() {
  const { t } = useTranslation('half-marathon-capital');
  const registration = t('registration.items', { returnObjects: true }) as Card[];
  const rules = t('rules.items', { returnObjects: true }) as string[];
  const tips = t('tips.items', { returnObjects: true }) as Card[];

  return (
    <>
      <section id="inscripcion" className="scroll-mt-24 bg-[#0b2420] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">{t('registration.title')}</h2>
          <p className="mt-3 text-lg font-semibold text-lime-300">{t('registration.intro')}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {registration.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="font-bold text-lime-200">{item.title}</h3>
                <p className="mt-2 break-words text-sm leading-relaxed text-emerald-100">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-emerald-100/80">{t('registration.kitIncludes')}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className={heading}>{t('kits.title')}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(['when', 'where', 'bring'] as const).map((key) => (
            <p key={key} className="rounded-2xl border border-emerald-900/10 bg-white p-6 text-sm leading-relaxed text-slate-700">{t(`kits.${key}`)}</p>
          ))}
        </div>
        <p role="note" className="mt-5 border-l-4 border-orange-500 bg-orange-50 p-4 text-sm font-semibold text-orange-900">{t('kits.warning')}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
        <div>
          <h2 className={heading}>{t('rules.title')}</h2>
          <ul className="mt-6 space-y-4">
            {rules.map((rule) => (
              <li key={rule} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={heading}>{t('tips.title')}</h2>
          <div className="mt-6 space-y-5">
            {tips.map((tip) => (
              <div key={tip.title}>
                <h3 className="font-bold text-slate-900">{tip.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
