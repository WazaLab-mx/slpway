import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { WrenchScrewdriverIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { ConversionEvents } from '@/lib/analytics';

const FEATURED_CATEGORIES = ['plumbing', 'electrical', 'locksmith', 'hvac', 'appliance_repair', 'cleaning'];

// Promotes the home services finder on the home page.
export default function HomeServicesBanner() {
  const { t } = useTranslation('common');
  const button = t('homeServiceFinder.homeBanner.button');

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <Image
        src="/images/housing-services/hero.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-blue-900/60" />

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-300">
            <WrenchScrewdriverIcon className="h-4 w-4" aria-hidden />
            {t('homeServiceFinder.homeBanner.badge')}
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {t('homeServiceFinder.homeBanner.title')}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {t('homeServiceFinder.homeBanner.text')}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {FEATURED_CATEGORIES.map((category) => (
              <li
                key={category}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
              >
                {t(`homeServiceFinder.categories.${category}`)}
              </li>
            ))}
          </ul>

          <Link
            href="/san-luis-potosi-home-services#service-finder"
            onClick={() => ConversionEvents.ctaClick('home-services-home-banner', button, 'home')}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-colors hover:bg-yellow-300 sm:w-auto"
          >
            {button}
            <ArrowRightIcon className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
