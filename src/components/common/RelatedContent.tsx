import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { RelatedLink } from '@/lib/related-links';

interface RelatedContentProps {
  links: RelatedLink[];
  heading?: string;
}

export default function RelatedContent({ links, heading = 'También te puede interesar' }: RelatedContentProps) {
  if (!links.length) return null;

  return (
    <section className="mt-10 pt-8 border-t border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/30 rounded-xl p-4 transition-colors"
          >
            <p className="font-semibold text-gray-900 group-hover:text-primary flex items-center justify-between gap-2">
              {link.title}
              <ArrowRightIcon className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-primary" />
            </p>
            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
