import { useTranslation } from 'next-i18next';

interface ScheduleItem { time: string; title: string; description: string }
interface Distance { name: string; label: string; description: string }
interface CategoryGroup { name: string; list: string }

const heading = 'font-serif text-3xl font-bold text-[#0b2420] sm:text-4xl';

// Race-day schedule, distances and categories.
export default function HalfMarathonRace() {
  const { t } = useTranslation('half-marathon-capital');
  const schedule = t('schedule.items', { returnObjects: true }) as ScheduleItem[];
  const distances = t('distances.items', { returnObjects: true }) as Distance[];
  const groups = t('categories.groups', { returnObjects: true }) as CategoryGroup[];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className={heading}>{t('schedule.title')}</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {schedule.map((item) => (
            <li key={item.time} className="rounded-2xl border border-emerald-900/10 bg-white p-6">
              <p className="font-serif text-3xl font-bold text-emerald-700">{item.time}</p>
              <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className={heading}>{t('distances.title')}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{t('distances.intro')}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {distances.map((d, index) => (
            <article key={d.name} className={`rounded-2xl p-7 ${index === 0 ? 'bg-[#0b2420] text-white' : 'border border-emerald-900/10 bg-white text-slate-900'}`}>
              <p className={`text-xs font-bold uppercase tracking-wider ${index === 0 ? 'text-lime-300' : 'text-emerald-700'}`}>{d.label}</p>
              <h3 className={`mt-2 font-serif text-4xl font-bold ${index === 0 ? 'text-white' : 'text-[#0b2420]'}`}>{d.name}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${index === 0 ? 'text-emerald-100' : 'text-slate-600'}`}>{d.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className={heading}>{t('categories.title')}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{t('categories.intro')}</p>
        <dl className="mt-8 divide-y divide-emerald-900/10 rounded-2xl border border-emerald-900/10 bg-white">
          {groups.map((g) => (
            <div key={g.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-8">
              <dt className="w-16 shrink-0 font-bold text-emerald-700">{g.name}</dt>
              <dd className="text-sm leading-relaxed text-slate-700">{g.list}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm font-semibold text-slate-700">🏅 {t('categories.medal')}</p>
      </section>
    </>
  );
}
