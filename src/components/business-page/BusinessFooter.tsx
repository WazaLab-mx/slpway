import { BusinessPageData } from '@/types/business-page';
import { whatsappLink } from './contact';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons';

interface BusinessFooterProps {
  business: BusinessPageData;
}

export default function BusinessFooter({ business }: BusinessFooterProps) {
  const { name, tagline, instagram, facebook, phone, whatsapp, established } = business;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--biz-dark)] py-14 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-display text-3xl font-semibold text-white">{name}</p>
        <p className="mt-2 text-sm font-light text-white/60">{tagline}</p>

        {(instagram || facebook || whatsapp) && (
          <div className="mt-7 flex items-center justify-center gap-5 print:hidden">
            {instagram && (
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${name}`}
                className="rounded-full border border-white/20 p-3 text-white/80 transition-colors hover:border-[var(--biz-accent)] hover:text-[var(--biz-accent)]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {facebook && (
              <a
                href={`https://www.facebook.com/${facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook de ${name}`}
                className="rounded-full border border-white/20 p-3 text-white/80 transition-colors hover:border-[var(--biz-accent)] hover:text-[var(--biz-accent)]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsappLink(phone)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp de ${name}`}
                className="rounded-full border border-white/20 p-3 text-white/80 transition-colors hover:border-[var(--biz-accent)] hover:text-[var(--biz-accent)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        )}

        <div className="mt-10 border-t border-white/10 pt-7 text-xs text-white/40">
          <p>
            © {currentYear} {name}
            {established ? ` · Desde ${established}` : ''}
          </p>
          <a
            href="https://www.sanluisway.com/media-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 text-white/50 transition-colors hover:border-white/40 hover:text-white/80"
          >
            Sitio hecho por <span className="font-semibold">San Luis Way</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
