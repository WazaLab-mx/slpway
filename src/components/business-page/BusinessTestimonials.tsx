import { Testimonial } from '@/types/business-page';

interface BusinessTestimonialsProps {
  testimonials: Testimonial[];
}

export default function BusinessTestimonials({ testimonials }: BusinessTestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[var(--biz-dark)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--biz-accent)]">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Palabra de vecino
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="flex flex-col">
              <span
                className="font-display text-6xl leading-none text-[var(--biz-accent)]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-lg font-light leading-relaxed text-white/90">
                {testimonial.text}
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest text-[var(--biz-accent)]">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
