// Mexican numbers need the 52 country code for wa.me deep links.
export function buildWhatsAppUrl(phone: string, placeName: string): string | null {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) return null;
  const full = digits.length === 10 ? `52${digits}` : digits;
  const text = encodeURIComponent(`Hola, los encontré en San Luis Way (sanluisway.com) y me gustaría más información sobre ${placeName}.`);
  return `https://wa.me/${full}?text=${text}`;
}
