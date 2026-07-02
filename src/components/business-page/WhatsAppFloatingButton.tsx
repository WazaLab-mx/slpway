import { useEffect, useState } from 'react';
import { whatsappLink } from './contact';
import { WhatsAppIcon } from './icons';

interface WhatsAppFloatingButtonProps {
  businessName: string;
  phone: string;
}

/** Floating CTA that appears once the visitor scrolls past the hero,
 *  so it never competes with the hero's own WhatsApp button. */
export default function WhatsAppFloatingButton({ businessName, phone }: WhatsAppFloatingButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(phone)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enviar mensaje de WhatsApp a ${businessName}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 transition-all duration-300 hover:scale-110 active:scale-95 print:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
