import Image from 'next/image';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/common/SEO';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'xantolo'])) },
});

const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500';

export default function Xantolo2026() {
  const { t } = useTranslation('xantolo');
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} ogImage="/images/events/xantolo-image-3.jpg" />
      <section className="relative isolate overflow-hidden bg-[#101b32] text-white">
        <div className="absolute inset-0 -z-10 md:left-1/3">
          <Image src="/images/events/xantolo-image-3.jpg" alt={t('hero.alt')} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101b32] via-[#101b32]/80 to-[#101b32]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101b32] via-transparent to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">{t('hero.eyebrow')}</p>
          <h1 className="font-serif text-5xl font-bold leading-none text-white sm:text-7xl lg:text-8xl">Xantolo 2026</h1>
          <p className="mt-5 max-w-xl font-serif text-3xl text-amber-200 sm:text-4xl">{t('hero.subtitle')}</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 md:text-lg">{t('hero.description')}</p>
          <Link href="#guide" className={`${buttonClass} mt-8 bg-primary text-slate-950 hover:bg-amber-300`}>
            {t('banner.cta')}<ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </Link>
          <div className="mt-14 flex flex-col gap-6 border-t border-white/20 pt-6 sm:flex-row sm:gap-12">
            <div className="flex items-start gap-3"><CalendarDaysIcon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-orange-300" /><div><p className="font-semibold text-white">{t('hero.date')}</p><p className="mt-1 text-xs text-slate-300">{t('hero.dateLabel')}</p></div></div>
            <div className="flex items-start gap-3"><MapPinIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-orange-300" /><p className="font-semibold text-white">{t('hero.location')}</p></div>
          </div>
        </div>
      </section>

      <div className="bg-[#faf7f0] text-slate-800">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <aside className="border-l-4 border-orange-500 bg-white p-5 sm:p-6">
            <h2 className="font-bold text-slate-900">{t('status.title')}</h2>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">{t('status.description')}</p>
          </aside>
        </div>

        <section id="guide" className="mx-auto grid max-w-6xl scroll-mt-24 gap-8 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">{t('intro.eyebrow')}</p><h2 className="font-serif text-4xl font-bold leading-tight text-[#101b32] md:text-5xl">{t('intro.title')}</h2></div>
          <p className="text-lg leading-relaxed text-slate-600">{t('intro.description')}</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <h2 className="mb-8 font-serif text-3xl font-bold text-[#101b32] sm:text-4xl">{t('places.title')}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {(['capital', 'huasteca'] as const).map((place, index) => (
              <article key={place} className={`rounded-2xl p-7 sm:p-9 ${index === 0 ? 'bg-[#101b32] text-white' : 'border border-orange-200 bg-[#f6ead7] text-[#101b32]'}`}>
                <p className={`mb-6 text-xs font-bold uppercase tracking-wider ${index === 0 ? 'text-amber-300' : 'text-amber-800'}`}>{t(`places.${place}.tag`)}</p>
                <h3 className={`font-serif text-3xl font-bold ${index === 0 ? 'text-white' : 'text-[#101b32]'}`}>{t(`places.${place}.title`)}</h3>
                <p className={`mt-4 leading-relaxed ${index === 0 ? 'text-slate-200' : 'text-slate-700'}`}>{t(`places.${place}.description`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <h2 className="mb-8 font-serif text-3xl font-bold text-[#101b32] sm:text-4xl">{t('traditions.title')}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {['offerings', 'dance', 'food', 'remembrance'].map((key, index) => (
              <article key={key} className="border-t border-orange-300 pt-5"><span aria-hidden="true" className="font-serif text-3xl text-amber-800">0{index + 1}</span><h3 className="mb-3 mt-4 text-lg font-bold">{t(`traditions.${key}.title`)}</h3><p className="text-sm leading-relaxed text-slate-600">{t(`traditions.${key}.description`)}</p></article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-9">
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#101b32] sm:text-4xl">{t('planning.title')}</h2>
            <div className="grid gap-7 md:grid-cols-3">{['transport', 'essentials', 'family'].map((key) => <div key={key}><h3 className="mb-3 font-bold">{t(`planning.${key}.title`)}</h3><p className="text-sm leading-relaxed text-slate-600">{t(`planning.${key}.description`)}</p></div>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16 pt-4 md:px-8">
          <h2 className="font-serif text-2xl font-bold">{t('sources.title')}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{t('sources.description')}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-amber-900">
            <a className="underline underline-offset-4 hover:text-slate-900" href="https://inah.gob.mx/images/interactivos/20251031_Dia_De_Muertos/">{t('sources.inah')}</a>
            <a className="underline underline-offset-4 hover:text-slate-900" href="https://www.gob.mx/cultura/prensa/mexico-se-prepara-para-celebrar-a-sus-muertos">{t('sources.culture')}</a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={`${buttonClass} bg-[#101b32] text-white hover:bg-slate-700`} href="https://cultura.slp.gob.mx/">{t('actions.official')}<ArrowRightIcon aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            <Link className={`${buttonClass} border border-slate-300 text-slate-900 hover:bg-white`} href="/events/all">{t('actions.calendar')}</Link>
          </div>
        </section>
      </div>
    </>
  );
}
