import Image from 'next/image';
import { WifiIcon, ClockIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface Spot {
  name: string;
  img: string;
  neighborhood: string;
  price: string;
  wifi: string;
  hours: string;
  vibe: string[];
}

const spots: Spot[] = [
  {
    name: 'Capital Coffee',
    img: '/images/blog/cafes/capital-coffee.jpg',
    neighborhood: 'Av. Cuauhtémoc 1327, Col. Jardín',
    price: '~$60-90 MXN drink',
    wifi: 'Free',
    hours: '~8:00am - 10:00pm',
    vibe: ['Specialty coffee', 'Social'],
  },
  {
    name: 'Café Sideral',
    img: '/images/blog/cafes/cafe-sideral.jpg',
    neighborhood: 'Galeana 475, Centro Histórico',
    price: '~$50-80 MXN drink',
    wifi: 'Free',
    hours: 'Check before going',
    vibe: ['Cozy', 'Specialty coffee'],
  },
  {
    name: 'Las Castañas',
    img: '/images/blog/cafes/las-castanas-new.jpg',
    neighborhood: 'Av. Carranza 1325 (Tequis) · Independencia 800 (Centro)',
    price: '~$55-95 MXN drink',
    wifi: 'Free',
    hours: 'Check before going',
    vibe: ['Brunch', 'Bakery', 'Two locations'],
  },
  {
    name: '500 Noches',
    img: '/images/blog/cafes/500-noches.jpg',
    neighborhood: 'Calle Huasteca 300, Bellas Lomas',
    price: '~$45-75 MXN drink',
    wifi: 'Free',
    hours: '~9:00am - 1:00am',
    vibe: ['Café-bar', 'Late hours', 'Live music'],
  },
  {
    name: 'VAEO Business Club',
    img: '/images/heroes/community-coffee.jpg',
    neighborhood: 'Plaza Covalia, Av. Real de Lomas 350',
    price: 'Day passes & memberships — ask for rates',
    wifi: 'Included',
    hours: 'Weekday business hours',
    vibe: ['Coworking', 'Meeting rooms', 'Phone booths'],
  },
  {
    name: 'Halva Café',
    img: '/images/blog/cafes/halva-cafe.png',
    neighborhood: 'Casa H, Av. Carranza 1190, Tequisquiapan',
    price: '~$60-100 MXN drink',
    wifi: 'Free',
    hours: 'Check before going',
    vibe: ['Bakery', 'Garden setting'],
  },
];

export default function NomadCoworkingList() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {spots.map((s) => (
        <article
          key={s.name}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={s.img}
              alt={s.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg text-gray-900 mb-1">{s.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>{s.neighborhood}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div className="flex flex-col items-start bg-gray-50 rounded-lg p-2">
                <CurrencyDollarIcon className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-gray-500 text-[10px]">Price</span>
                <span className="font-semibold text-gray-900 leading-tight">{s.price}</span>
              </div>
              <div className="flex flex-col items-start bg-gray-50 rounded-lg p-2">
                <WifiIcon className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-gray-500 text-[10px]">Wifi</span>
                <span className="font-semibold text-gray-900">{s.wifi}</span>
              </div>
              <div className="flex flex-col items-start bg-gray-50 rounded-lg p-2">
                <ClockIcon className="w-4 h-4 text-purple-600 mb-1" />
                <span className="text-gray-500 text-[10px]">Hours</span>
                <span className="font-semibold text-gray-900 text-[11px] leading-tight">
                  {s.hours}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {s.vibe.map((v) => (
                <span
                  key={v}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
