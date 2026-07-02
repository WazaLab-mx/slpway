import Image from 'next/image';

interface BusinessGalleryProps {
  businessName: string;
  images: string[];
}

export default function BusinessGallery({ businessName, images }: BusinessGalleryProps) {
  if (images.length === 0) return null;

  // With 5+ photos the first one becomes a 2x2 feature; the rest fill a
  // 4-column grid around it. Fewer photos fall back to a uniform grid.
  const featured = images.length >= 5;

  return (
    <section
      id="galeria"
      className="scroll-mt-16 bg-[color-mix(in_srgb,var(--biz-accent)_10%,#fdfbf7)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--biz-primary)]">
            De la cocina a su mesa
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[var(--biz-dark)] sm:text-5xl">
            Galería
          </h2>
        </div>

        <div
          className={`mt-14 grid grid-cols-2 gap-3 sm:gap-4 ${
            featured ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
          }`}
        >
          {images.map((src, index) => {
            const isFeature = featured && index === 0;
            return (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${
                  isFeature
                    ? 'col-span-2 aspect-[3/2] sm:row-span-2 sm:aspect-auto'
                    : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={`${businessName} — foto ${index + 1}`}
                  fill
                  sizes={
                    isFeature
                      ? '(max-width: 640px) 100vw, 50vw'
                      : '(max-width: 640px) 50vw, 25vw'
                  }
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
