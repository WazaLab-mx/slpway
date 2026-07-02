const WHATSAPP_GREETING = 'Hola, los vi en su página y me gustaría hacer un pedido.';

/** "444 123 4567" -> "4441234567" */
export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function whatsappLink(phone: string): string {
  return `https://wa.me/52${phoneDigits(phone)}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;
}

export function telLink(phone: string): string {
  return `tel:+52${phoneDigits(phone)}`;
}

export function mapsEmbedUrl(mapsQuery: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
}

export function mapsDirectionsUrl(mapsQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
}

export function formatPrice(price: number): string {
  return `$${price}`;
}
