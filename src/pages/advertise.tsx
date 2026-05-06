import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import {
  MegaphoneIcon,
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon,
  NewspaperIcon,
  PhotoIcon,
  CameraIcon,
  EnvelopeIcon,
  TrophyIcon,
  StarIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

type ColorKey = 'blue' | 'amber' | 'green' | 'purple' | 'orange';

const COLOR_CLASSES: Record<ColorKey, { iconBg: string; iconText: string; button: string }> = {
  blue: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
  amber: { iconBg: 'bg-amber-100', iconText: 'text-amber-700', button: 'bg-amber-600 hover:bg-amber-700' },
  green: { iconBg: 'bg-green-100', iconText: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
  purple: { iconBg: 'bg-purple-100', iconText: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
  orange: { iconBg: 'bg-orange-100', iconText: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
};

type OptionKey = 'siteBanners' | 'newsletterSponsorship' | 'sponsoredContent' | 'brandStories' | 'specialMentions';

const OFFERINGS: { key: OptionKey; icon: typeof PhotoIcon; color: ColorKey; subject: string }[] = [
  { key: 'siteBanners', icon: PhotoIcon, color: 'blue', subject: 'Site Banners Inquiry' },
  { key: 'newsletterSponsorship', icon: EnvelopeIcon, color: 'amber', subject: 'Newsletter Sponsorship Inquiry' },
  { key: 'sponsoredContent', icon: NewspaperIcon, color: 'green', subject: 'Sponsored Content Inquiry' },
  { key: 'brandStories', icon: CameraIcon, color: 'purple', subject: 'Brand Story Inquiry' },
  { key: 'specialMentions', icon: SparklesIcon, color: 'orange', subject: 'Special Mention Inquiry' },
];

type PackageKey = 'basic' | 'premium' | 'enterprise';

const PACKAGES: { key: PackageKey; subject: string; highlighted: boolean }[] = [
  { key: 'basic', subject: 'Basic Package Inquiry', highlighted: false },
  { key: 'premium', subject: 'Premium Package Inquiry', highlighted: true },
  { key: 'enterprise', subject: 'Enterprise Package Inquiry', highlighted: false },
];

const WHY_US: { key: 'audience' | 'authority' | 'results'; icon: typeof UserGroupIcon }[] = [
  { key: 'audience', icon: UserGroupIcon },
  { key: 'authority', icon: TrophyIcon },
  { key: 'results', icon: ChartBarIcon },
];

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
});

export default function Advertise() {
  const { t } = useTranslation('common');
  const buildLink = (subject: string) => `/contact?subject=${encodeURIComponent(subject)}`;
  const arr = (key: string) => t(key, { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('advertise.seo.title')}
        description={t('advertise.seo.description')}
        keywords={t('advertise.seo.keywords')}
        ogType="website"
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <MegaphoneIcon className="w-20 h-20 mx-auto mb-6 text-white/90" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('advertise.hero.titlePrefix')}{' '}
                <span className="text-yellow-300">{t('advertise.hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                {t('advertise.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={buildLink('Advertising Inquiry')}
                  className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  {t('advertise.hero.ctaPrimary')}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="#options"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  {t('advertise.hero.ctaSecondary')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('advertise.whyUs.title')}</h2>
              <p className="text-lg md:text-xl text-gray-600">{t('advertise.whyUs.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {WHY_US.map(({ key, icon: Icon }) => (
                <div key={key} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{t(`advertise.whyUs.${key}.title`)}</h3>
                  <p className="text-gray-600">{t(`advertise.whyUs.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Options */}
        <section id="options" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('advertise.options.title')}</h2>
              <p className="text-lg md:text-xl text-gray-600">{t('advertise.options.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {OFFERINGS.map(({ key, icon: Icon, color, subject }) => {
                const c = COLOR_CLASSES[color];
                return (
                  <div
                    key={key}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${c.iconBg} rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${c.iconText}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{t(`advertise.options.${key}.title`)}</h3>
                        <p className="text-gray-600">{t(`advertise.options.${key}.subtitle`)}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {arr(`advertise.options.${key}.bullets`).map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <StarIcon className={`w-5 h-5 ${c.iconText} mr-3 mt-0.5 flex-shrink-0`} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={buildLink(subject)}
                      className={`block text-center text-white px-6 py-3 rounded-lg font-semibold transition-colors ${c.button}`}
                    >
                      {t(`advertise.options.${key}.cta`)}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('advertise.packages.title')}</h2>
              <p className="text-lg md:text-xl text-gray-600">{t('advertise.packages.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PACKAGES.map(({ key, subject, highlighted }) => (
                <div
                  key={key}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative flex flex-col ${
                    highlighted ? 'border-4 border-primary' : 'border-2 border-gray-200'
                  }`}
                >
                  {highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        {t('advertise.packages.popular')}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`advertise.packages.${key}.name`)}</h3>
                    <p className="text-gray-600">{t(`advertise.packages.${key}.tagline`)}</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className={`text-4xl font-bold ${highlighted ? 'text-primary' : 'text-gray-900'}`}>
                      {t(`advertise.packages.${key}.price`)}
                    </span>
                    <span className="text-gray-600">{t('advertise.packages.perMonth')}</span>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {key === 'enterprise'
                        ? t('advertise.packages.enterprise.priceNote')
                        : t('advertise.packages.yearlySavings')}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {arr(`advertise.packages.${key}.features`).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={buildLink(subject)}
                    className={`block text-center text-white px-6 py-3 rounded-lg font-semibold transition-colors ${
                      highlighted ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {t(`advertise.packages.${key}.cta`)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('advertise.process.title')}</h2>
              <p className="text-lg md:text-xl text-gray-600">{t('advertise.process.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {(t('advertise.process.steps', { returnObjects: true }) as { title: string; desc: string }[]).map(
                (step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('advertise.cta.title')}</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">{t('advertise.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={buildLink('Start My Campaign')}
                  className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  {t('advertise.cta.primary')}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href={buildLink('Advertising Information Request')}
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  {t('advertise.cta.secondary')}
                </Link>
              </div>
              <p className="text-sm mt-6 opacity-75">{t('advertise.cta.note')}</p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">{t('advertise.questions.title')}</h3>
              <p className="text-gray-600 mb-6">{t('advertise.questions.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  {t('advertise.questions.sendMessage')}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
                <span className="text-gray-400">•</span>
                <a
                  href="mailto:sanluisway@waza.baby"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  sanluisway@waza.baby
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
