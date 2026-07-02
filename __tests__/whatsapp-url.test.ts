import { buildWhatsAppUrl } from '@/pages/places/[id]';

describe('buildWhatsAppUrl', () => {
  it('prepends 52 to a 10-digit Mexican number', () => {
    const url = buildWhatsAppUrl('444 123 4567', 'Café Test');
    expect(url).toContain('https://wa.me/524441234567?text=');
  });

  it('keeps numbers that already include country code', () => {
    const url = buildWhatsAppUrl('+52 444 123 4567', 'Café Test');
    expect(url).toContain('https://wa.me/524441234567?text=');
  });

  it('includes the place name and San Luis Way attribution in the message', () => {
    const url = buildWhatsAppUrl('4441234567', 'La Gran Vía');
    const text = decodeURIComponent(url!.split('text=')[1]);
    expect(text).toContain('San Luis Way');
    expect(text).toContain('La Gran Vía');
  });

  it('returns null for numbers too short to be valid', () => {
    expect(buildWhatsAppUrl('12345', 'X')).toBeNull();
    expect(buildWhatsAppUrl('', 'X')).toBeNull();
  });

  it('strips formatting characters', () => {
    const url = buildWhatsAppUrl('(444) 123-4567', 'Test');
    expect(url).toContain('wa.me/524441234567');
  });
});
