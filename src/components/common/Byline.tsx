import Link from 'next/link';
import { useRouter } from 'next/router';

interface BylineProps {
  /** ISO 8601 publish date (e.g. "2026-04-07T12:00:00Z" or "2026-04-07") */
  publishedAt?: string;
  /** ISO 8601 modified date — shown as "Updated" when different from publishedAt */
  modifiedAt?: string;
  /** Author display name. Defaults to the editorial team. */
  authorName?: string;
  /** Author bio URL — href on the byline link. Defaults to /about. */
  authorUrl?: string;
  /** Author avatar URL — when set, renders a photo chip (E-E-A-T signal). */
  authorAvatarUrl?: string;
  /** Author role/title shown under the name when an avatar is present. */
  authorRole?: string;
  className?: string;
}

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  es: 'es-MX',
  de: 'de-DE',
  ja: 'ja-JP',
};

const LABELS: Record<string, { by: string; updated: string }> = {
  en: { by: 'By', updated: 'Updated' },
  es: { by: 'Por', updated: 'Actualizado' },
  de: { by: 'Von', updated: 'Aktualisiert' },
  ja: { by: '執筆', updated: '更新' },
};

function formatDate(iso: string, locale: string): string {
  try {
    const date = new Date(iso);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  } catch {
    return iso;
  }
}

/**
 * Visible author byline for editorial content. Renders "By <Author> · <date>"
 * under an article h1. Uses `<time dateTime>` so crawlers get structured
 * dates alongside the Article JSON-LD.
 */
export default function Byline({
  publishedAt,
  modifiedAt,
  authorName = 'San Luis Way Editorial',
  authorUrl = '/about',
  authorAvatarUrl,
  authorRole,
  className = '',
}: BylineProps) {
  const { locale } = useRouter();
  const key = locale && LABELS[locale] ? locale : 'en';
  const intlLocale = LOCALE_MAP[key];
  const labels = LABELS[key];

  const showModified = modifiedAt && publishedAt && modifiedAt.slice(0, 10) !== publishedAt.slice(0, 10);
  const dateToShow = showModified ? modifiedAt! : publishedAt;
  const dateLabel = showModified ? labels.updated : '';

  const dateNode = dateToShow && (
    <time dateTime={dateToShow}>
      {dateLabel ? `${dateLabel} ` : ''}
      {formatDate(dateToShow, intlLocale)}
    </time>
  );

  // Rich variant: photo chip with name + role, used for named authors.
  if (authorAvatarUrl) {
    return (
      <div className={`flex items-center gap-3 text-sm ${className}`}>
        <Link href={authorUrl} className="shrink-0">
          {/* Plain img with fixed dimensions avoids next/image remote config and reserves space (no CLS). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={authorAvatarUrl}
            alt={authorName}
            width={44}
            height={44}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover border border-gray-200"
          />
        </Link>
        <div className="leading-tight">
          <div>
            {labels.by}{' '}
            <Link href={authorUrl} className="font-semibold hover:underline">
              {authorName}
            </Link>
          </div>
          <div className="text-xs text-gray-500">
            {authorRole}
            {authorRole && dateToShow ? ' · ' : ''}
            {dateNode}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${className}`}>
      <span>
        {labels.by}{' '}
        <Link href={authorUrl} className="font-semibold hover:underline">
          {authorName}
        </Link>
      </span>
      {dateToShow && (
        <>
          <span aria-hidden="true">·</span>
          {dateNode}
        </>
      )}
    </div>
  );
}
