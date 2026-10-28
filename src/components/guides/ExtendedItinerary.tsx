import { useState } from 'react';

type Slot = {
  time: string;
  title: string;
  detail: string;
  cost?: string;
};

type DayPlan = {
  id: string;
  label: string;
  emoji: string;
  subtitle: string;
  slots: Slot[];
};

const plans: DayPlan[] = [
  {
    id: 'day1',
    label: 'Day 1',
    emoji: '🏛️',
    subtitle: 'History, plazas & baroque architecture',
    slots: [
      { time: '9:00 - 10:30', title: 'Breakfast at La Parroquia', detail: 'Classic potosino breakfast — enchiladas potosinas or huevos rancheros at this institution on Av. Carranza, open since 1975 and a short walk from the Cathedral.', cost: '$120-180 MXN' },
      { time: '10:30 - 13:00', title: 'Plaza de Armas + Cathedral + Palacio de Gobierno', detail: 'Walk the main square, visit the baroque Cathedral and step into the neoclassical Palacio de Gobierno.' },
      { time: '13:00 - 15:00', title: 'Lunch at La Oruga y La Cebada', detail: 'Craft-beer cantina with home-style food on Av. Universidad 169, in the Centro Histórico.' },
      { time: '15:00 - 17:30', title: 'Museo Federico Silva + Templo del Carmen', detail: 'Modern sculpture museum in a restored 1907 school building, then the Churrigueresque masterpiece of Templo del Carmen.', cost: 'Museum admission varies; check on site' },
      { time: '17:30 - 19:00', title: 'Stroll Plaza del Carmen + Caja del Agua', detail: 'Golden hour in the plazas. Stop at Chocolates Costanzo for a traditional hot chocolate.' },
      { time: '19:00 - 22:00', title: 'Dinner at La Gran Vía', detail: 'A long-running, upscale SLP classic at Av. Carranza 560. Spanish and international cuisine, known for its paella and live piano.' },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2',
    emoji: '🎨',
    subtitle: 'Culture, parks & nightlife',
    slots: [
      { time: '8:30 - 10:00', title: 'Breakfast at Café Cortao', detail: 'A Centro breakfast institution at Independencia 1150, where locals sometimes queue before opening.' },
      { time: '10:00 - 12:30', title: 'Centro de las Artes (former prison)', detail: 'Arts center in the former state penitentiary on Calzada de Guadalupe, home to the Museo Leonora Carrington. Allow 2 hrs.', cost: '~$55 MXN; free on Wednesdays' },
      { time: '12:30 - 14:30', title: 'Mercado Hidalgo food crawl', detail: 'Enchiladas potosinas, gorditas, aguas frescas and other local bites from the stalls of the main downtown market.' },
      { time: '14:30 - 17:00', title: 'Parque Tangamanga', detail: 'Bring a bike, walk by the lake or visit the planetarium. SLP\'s Central Park — 420 hectares of green space.' },
      { time: '17:00 - 19:00', title: 'Sunset rooftop drink', detail: 'Find a rooftop bar or terrace in the Centro for skyline views at golden hour.' },
      { time: '19:00 - 22:00', title: 'Dinner at La Posada del Virrey', detail: 'Regional dishes in an 18th-century house on Jardín Hidalgo, with a terrace facing the Cathedral. Check evening hours before going.', cost: '~$150-300 MXN' },
      { time: '22:00 - late', title: 'Centro bars', detail: 'Calle Zaragoza and the streets around Plaza de Armas and the Callejón del Cariño have cantinas, mezcalerías and live music.' },
    ],
  },
  {
    id: 'day3',
    label: 'Day 3',
    emoji: '🏞️',
    subtitle: 'Day trip — Real de Catorce OR Huasteca Potosina',
    slots: [
      { time: '6:00', title: 'Early departure', detail: 'Both options require an early start. Rent a car at SLP airport or book through a local tour operator.' },
      { time: '6:00 - 9:30', title: 'Option A: Drive to Real de Catorce', detail: 'About 3.5 hours (~250 km) through the Altiplano desert. Enter through the 2.3 km Ogarrio Tunnel.', cost: 'Fuel + tunnel toll' },
      { time: '9:30 - 17:00', title: 'Real de Catorce experience', detail: 'Explore the silver-mining ghost town, take a Willys jeep ride to Pueblo Fantasma or Estación Catorce, visit the Parroquia and have lunch in town.', cost: 'Willys: ~$50 MXN collective; private $500-1,500 MXN per vehicle' },
      { time: '6:00 - 10:00', title: 'Option B: Drive to Huasteca Potosina', detail: 'About 3.5 hours (~250 km) to Ciudad Valles. Or book a full-day guided tour — easier and all-inclusive.', cost: 'Call the operator to confirm tour prices' },
      { time: '10:00 - 17:00', title: 'Waterfalls', detail: 'Pick one or two: Cascadas de Micos (near Ciudad Valles), the 105 m Tamul waterfall or Puente de Dios (Tamasopo). They are far apart, so do not try all three in one day.' },
      { time: '17:00 - 20:00', title: 'Return or overnight', detail: 'Real de Catorce: drive back to SLP. Huasteca: consider overnighting in Ciudad Valles and driving back next morning.' },
    ],
  },
];

export default function ExtendedItinerary() {
  const [active, setActive] = useState(plans[0].id);
  const plan = plans.find((p) => p.id === active) ?? plans[0];

  return (
    <section id="itinerary">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">3-Day Itinerary (Actionable)</h2>
      <p className="text-gray-600 mb-5">Timestamps, real restaurant names and ballpark costs. Swap freely — each day stands on its own.</p>

      <div className="flex gap-2 mb-5 flex-wrap">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              active === p.id
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {p.emoji} {p.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/5 px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-900 text-lg">{plan.emoji} {plan.label}</div>
          <div className="text-sm text-gray-600">{plan.subtitle}</div>
        </div>
        <div className="divide-y divide-gray-100">
          {plan.slots.map((s, i) => (
            <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-24 text-xs font-semibold text-primary bg-primary/5 rounded-lg px-2 py-1 h-fit text-center">
                {s.time}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h4 className="font-semibold text-gray-900 text-sm">{s.title}</h4>
                  {s.cost && <span className="text-xs text-gray-500 font-medium">{s.cost}</span>}
                </div>
                <p className="text-sm text-gray-600 mt-1">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
