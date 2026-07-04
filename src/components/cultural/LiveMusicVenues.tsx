import Image from 'next/image';
import { liveMusicVenues, type LiveMusicVenue } from '@/data/liveMusicVenues';

function VenueCard({ venue }: { venue: LiveMusicVenue }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
      {/* Header: real photo when available, otherwise a styled gradient banner */}
      <div className={`relative h-40 bg-gradient-to-br ${venue.accent}`}>
        {venue.image ? (
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-14 h-14 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-gray-800">{venue.type}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{venue.name}</h3>

        <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
          <span className="text-amber-500">📍</span>
          <span>{venue.area}</span>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
          <span className="text-amber-500">🎫</span>
          <span>{venue.setting}</span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4 flex-1">{venue.blurb}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {venue.genres.map((genre) => (
            <span
              key={genre}
              className="text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100 rounded-full px-3 py-1"
            >
              {genre}
            </span>
          ))}
        </div>

        {venue.link && (
          <a
            href={venue.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            {venue.linkLabel ?? 'Visit official page'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function LiveMusicVenues() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Go See It Live
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where to See Live Music in San Luis Potosí
          </h2>
          <p className="text-xl text-gray-600">
            From jazz-friendly restaurants and bohemian trova bars to a landmark opera house and the
            soul of the Huasteca — real venues where the music happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {liveMusicVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
          Programming and schedules change often — check each venue&apos;s official page for current
          listings before you go.
        </p>
      </div>
    </section>
  );
}
