import { useTranslation } from 'next-i18next';
import { CheckBadgeIcon, ShieldCheckIcon, BoltIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid';
import { ConversionEvents } from '@/lib/analytics';
import { buildWhatsAppUrl } from '@/lib/whatsapp-url';
import type { HomeServiceProvider } from '@/lib/home-services-providers';

// Jev review judgments worth surfacing as positive highlights.
const RELIABLE_SCORE = 2.2;
const RESPONSIVE_PROBABILITY = 0.7;

function Badge({ icon, label, tone }: { icon: React.ReactNode; label: string; tone: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${tone}`}>
      {icon}
      {label}
    </span>
  );
}

export default function ProviderCard({ provider }: { provider: HomeServiceProvider }) {
  const { t } = useTranslation('common');
  const track = (type: string) => ConversionEvents.businessContactClick(type, provider.id, provider.name);
  const whatsapp = provider.phone ? buildWhatsAppUrl(provider.phone, provider.name) : null;
  const webUrl = provider.website || provider.socialUrl;
  const link = 'inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors';

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
      {provider.address && <p className="mt-1 text-sm text-gray-500">{provider.address}</p>}

      <p className="mt-3 flex items-center gap-1 text-sm text-gray-700">
        {provider.googleRating != null ? (
          <>
            <StarIcon className="h-4 w-4 text-yellow-500" aria-hidden />
            <span className="font-semibold">{provider.googleRating.toFixed(1)}</span>
            <span className="text-gray-500">{t('homeServiceFinder.reviews', { count: provider.googleReviewCount })}</span>
          </>
        ) : (
          <span className="text-gray-500">{t('homeServiceFinder.noReviews')}</span>
        )}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {provider.slwVerified && (
          <Badge tone="bg-blue-100 text-blue-800" icon={<CheckBadgeIcon className="h-4 w-4" aria-hidden />} label={t('homeServiceFinder.badges.slwVerified')} />
        )}
        {provider.autoVerified && (
          <Badge tone="bg-green-100 text-green-800" icon={<ShieldCheckIcon className="h-4 w-4" aria-hidden />} label={t('homeServiceFinder.badges.autoVerified')} />
        )}
        {provider.offersEmergency && (
          <Badge tone="bg-red-100 text-red-800" icon={<BoltIcon className="h-4 w-4" aria-hidden />} label={t('homeServiceFinder.badges.emergency')} />
        )}
        {(provider.jev.reliability ?? 0) >= RELIABLE_SCORE && (
          <Badge tone="bg-gray-100 text-gray-800" icon={<CheckBadgeIcon className="h-4 w-4" aria-hidden />} label={t('homeServiceFinder.badges.reliable')} />
        )}
        {(provider.jev.responsive ?? 0) >= RESPONSIVE_PROBABILITY && (
          <Badge tone="bg-gray-100 text-gray-800" icon={<ClockIcon className="h-4 w-4" aria-hidden />} label={t('homeServiceFinder.badges.responsive')} />
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp')}
            className={`${link} bg-green-600 text-white hover:bg-green-700`}>
            WhatsApp
          </a>
        )}
        {provider.phone && (
          <a href={`tel:${provider.phone.replace(/\s/g, '')}`} onClick={() => track('phone')}
            className={`${link} bg-blue-600 text-white hover:bg-blue-700`}>
            {t('homeServiceFinder.call')}
          </a>
        )}
        {webUrl && (
          <a href={webUrl} target="_blank" rel="noopener noreferrer nofollow" onClick={() => track('website')}
            className={`${link} border border-gray-300 text-gray-700 hover:bg-gray-50`}>
            {t('homeServiceFinder.website')}
          </a>
        )}
        {provider.mapsUrl && (
          <a href={provider.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('directions')}
            className={`${link} border border-gray-300 text-gray-700 hover:bg-gray-50`}>
            {t('homeServiceFinder.maps')}
          </a>
        )}
      </div>
    </article>
  );
}
