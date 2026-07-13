import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Event } from '@/types';
import {
  CalendarIcon,
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { buildEventPath } from '@/lib/event-slug';

interface EventsPreviewProps {
  events: Event[];
  locale?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  'arts-culture': 'bg-pink-500',
  culinary: 'bg-orange-500',
  music: 'bg-purple-500',
  'kids-family': 'bg-cyan-500',
  sports: 'bg-green-500',
  traditional: 'bg-yellow-500',
  wellness: 'bg-teal-500',
  'community-social': 'bg-blue-500',
};

const CARD_GAP = 24; // matches gap-6

export default function EventsPreview({ events }: EventsPreviewProps) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = events.slice(0, 8);

  const stepSize = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>('[data-card]');
    return card ? card.offsetWidth + CARD_GAP : track?.clientWidth ?? 0;
  }, []);

  const scrollByDir = useCallback(
    (dir: 1 | -1) => {
      trackRef.current?.scrollBy({ left: dir * stepSize(), behavior: 'smooth' });
    },
    [stepSize],
  );

  const scrollToIndex = (index: number) => {
    const card = trackRef.current?.querySelectorAll<HTMLElement>('[data-card]')[index];
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / stepSize()));
  };

  // Gentle autoplay: advances one card every 6s, loops at the end, pauses on
  // hover/touch, and stays off when the user prefers reduced motion.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    track.addEventListener('pointerenter', pause);
    track.addEventListener('pointerleave', resume);
    track.addEventListener('pointerdown', pause);

    const id = window.setInterval(() => {
      if (paused) return;
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: stepSize(), behavior: 'smooth' });
      }
    }, 6000);

    return () => {
      window.clearInterval(id);
      track.removeEventListener('pointerenter', pause);
      track.removeEventListener('pointerleave', resume);
      track.removeEventListener('pointerdown', pause);
    };
  }, [items.length, stepSize]);

  if (events.length === 0) return null;

  return (
    <section id="events-001" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-800 font-semibold text-sm tracking-widest uppercase mb-4">{t('homepage.events.badge')}</span>
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t('homepage.events.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('homepage.events.description')}
            </p>
          </div>
          <Link
            href="/events/all"
            className="hidden md:inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors group"
          >
            {t('homepage.events.viewAll')}
            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((event) => {
              const start = new Date(event.start_date);
              const multiDay =
                new Date(event.start_date).toDateString() !== new Date(event.end_date).toDateString();
              return (
                <Link
                  key={event.id}
                  data-card
                  href={buildEventPath(event)}
                  className="group snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[31.5%] bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    {event.image_url && (
                      // Plain img avoids next/image remote-domain config for arbitrary event URLs.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={event.image_url}
                        alt={event.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center shadow-sm">
                      <div className="text-xl font-bold text-primary-900 leading-none">
                        {start.toLocaleDateString(locale, { day: 'numeric', timeZone: 'America/Mexico_City' })}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                        {start.toLocaleDateString(locale, { month: 'short', timeZone: 'America/Mexico_City' })}
                      </div>
                    </div>

                    {event.category && (
                      <span
                        className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wide ${
                          CATEGORY_COLORS[event.category] || 'bg-gray-600'
                        }`}
                      >
                        {event.category.replace('-', ' ')}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                    )}

                    <div className="space-y-1.5 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      {multiDay && (
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>
                            {t('homepage.events.until')}{' '}
                            {new Date(event.end_date).toLocaleDateString(locale, { month: 'short', day: 'numeric', timeZone: 'America/Mexico_City' })}
                          </span>
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                      {t('homepage.events.details')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollByDir(-1)}
                aria-label={t('homepage.events.prev')}
                className="hidden md:flex items-center justify-center absolute -left-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-primary hover:scale-110 transition-all z-10"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByDir(1)}
                aria-label={t('homepage.events.next')}
                className="hidden md:flex items-center justify-center absolute -right-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-primary hover:scale-110 transition-all z-10"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {items.map((event, index) => (
              <button
                key={event.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`${t('homepage.events.details')} ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className="min-w-[24px] min-h-[24px] flex items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* This-week deep link — routes weekly-intent searches to /events/this-week */}
        <div className="mt-12 text-center">
          <Link
            href="/events/this-week"
            className="inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary-900 px-8 py-4 rounded-full font-semibold transition-all group"
          >
            <CalendarIcon className="w-5 h-5 text-primary" />
            {t('homepage.events.thisWeek')}
            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/events/all"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all"
          >
            {t('homepage.events.viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
