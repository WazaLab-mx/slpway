import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ArrowLeftIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/common/SEO';
import AdUnit from '@/components/common/AdUnit';
import GuideCTA from '@/components/common/GuideCTA';
import { supabase, getSafetyDateBuffer } from '@/lib/supabase';
import { filterUpcomingEvents } from '@/lib/event-dates';
import { useUpcomingEvents } from '@/hooks/useUpcomingEvents';
import { Event } from '@/types';
import { buildEventPath } from '@/lib/event-slug';
import { localizeEvents } from '@/lib/localizeEvent';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { data: familyEvents } = await supabase
    .from('events')
    .select('*')
    .eq('family_friendly', true)
    .or(`end_date.gte.${getSafetyDateBuffer(1)},end_date.is.null`)
    .order('start_date', { ascending: true });

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
      familyEvents: localizeEvents(filterUpcomingEvents(familyEvents).slice(0, 6), locale),
    },
    revalidate: 3600,
  };
};

const outdoorPlaces = [
  {
    name: 'Parque Tangamanga I',
    desc: 'El parque urbano más grande de SLP (420 ha) con lago, canchas, áreas de picnic, planetario, senderos para bici y el Museo Laberinto junto al parque.',
    descEn: 'SLP\'s largest urban park (420 ha) with a lake, sports courts, picnic areas, a planetarium, bike trails, and the Laberinto museum next door.',
    price: 'Gratis', priceEn: 'Free',
    hours: 'Lun 5AM-11AM | Mar-Sáb 5AM-10:30PM | Dom 5AM-6PM', hoursEn: 'Mon 5AM-11AM | Tue-Sat 5AM-10:30PM | Sun 5AM-6PM',
    ages: '0-99', icon: '🌳', tip: 'Lleva bicicleta y protector solar. El zoológico está cerrado temporalmente por remodelación',
    tipEn: 'Bring a bike and sunscreen. The zoo is temporarily closed for renovation',
    map: 'Parque+Tangamanga+I+San+Luis+Potosi',
  },
  {
    name: 'Parque Tangamanga II',
    desc: 'Segundo parque, en el norte de la ciudad (Fray Diego de la Magdalena 485), con canchas deportivas y áreas verdes más tranquilas. Ideal para días relajados.',
    descEn: 'Second park, on the city\'s north side (Fray Diego de la Magdalena 485), with sports courts and quieter green areas. Perfect for relaxed days.',
    price: 'Gratis', priceEn: 'Free',
    hours: 'Consulta el horario con CECURT', hoursEn: 'Check hours with CECURT',
    ages: '0-99', icon: '🏞️', tip: 'Menos concurrido que Tangamanga I',
    tipEn: 'Less crowded than Tangamanga I',
    map: 'Parque+Tangamanga+II+San+Luis+Potosi',
  },
  {
    name: 'Ciclovía Dominical (Av. Carranza)',
    desc: 'Cada domingo la avenida más icónica se cierra al tráfico para ciclistas, patinadores y familias.',
    descEn: 'Every Sunday the most iconic avenue closes to traffic for cyclists, skaters, and families.',
    price: 'Gratis', priceEn: 'Free',
    hours: 'Dom 8AM-1PM', hoursEn: 'Sun 8AM-1PM',
    ages: '0-99', icon: '🚴', tip: 'Lleva tu propia bici o patines y llega temprano',
    tipEn: 'Bring your own bike or skates and arrive early',
    map: 'Avenida+Venustiano+Carranza+San+Luis+Potosi',
  },
  {
    name: 'Presa de San José',
    desc: 'Presa histórica con paseo peatonal, senderos para correr y andar en bici, vistas al cerro y, de camino, los puestos de gorditas de Morales los fines de semana.',
    descEn: 'Historic dam with a pedestrian walkway, running and cycling trails, hill views, and the Gorditas de Morales stands along the way on weekends.',
    price: 'Gratis', priceEn: 'Free',
    hours: 'Diario — consultar estatus de apertura', hoursEn: 'Daily — check current opening status',
    ages: '0-99', icon: '💧',
    tip: 'Puede tener cierres temporales por mantenimiento — verifica antes de ir',
    tipEn: 'May have temporary closures for maintenance — verify before going',
    map: 'Presa+de+San+Jose+San+Luis+Potosi',
  },
  {
    name: 'Parque Bicentenario (IMMSA)',
    desc: 'Parque urbano inaugurado en 2010 con ciclovías, pistas para trotar, áreas de juegos infantiles, anfiteatro al aire libre, zonas de ejercicio y esculturas industriales.',
    descEn: 'Urban park opened in 2010 with cycling paths, jogging tracks, children\'s playgrounds, an outdoor amphitheater, exercise zones, and industrial sculptures.',
    price: 'Gratis', priceEn: 'Free',
    hours: 'Consulta el horario antes de ir', hoursEn: 'Check hours before going',
    ages: '0-99', icon: '🚴‍♂️',
    tip: 'Antigua fundidora de cobre de IMMSA reconvertida en parque, con miradores y áreas de descanso',
    tipEn: 'Former IMMSA copper foundry converted into a park, with viewpoints and rest areas',
    map: 'Parque+Bicentenario+IMMSA+San+Luis+Potosi',
  },
  {
    name: 'Rancho La Estación',
    desc: 'Rancho campestre en la Carretera a Matehuala Km 8.5 (Soledad) con jardines, palapas, restaurante y hospedaje. Se enfoca en eventos corporativos, escolares y familiares.',
    descEn: 'Country ranch on Carretera a Matehuala Km 8.5 (Soledad) with gardens, palapas, a restaurant, and lodging. Focused on corporate, school, and family events.',
    price: 'Consultar precios (varía por evento/grupo)', priceEn: 'Check prices (varies by event/group)',
    hours: 'Con reservación', hoursEn: 'By reservation',
    ages: '3-99', icon: '🐴',
    tip: 'Ideal para grupos y eventos familiares. Contacto: 444-391-2442 | rancholaestacion.com',
    tipEn: 'Great for groups and family events. Contact: 444-391-2442 | rancholaestacion.com',
    website: 'https://www.rancholaestacion.com/',
    map: 'Rancho+La+Estacion+San+Luis+Potosi',
  },
];

const indoorPlaces = [
  {
    name: 'Kidiverso',
    desc: 'Parque infantil con más de 10 zonas: laberinto, trampolines, escalada, inflables, carrusel y área de bebés. También ofrecen fiestas privadas.',
    descEn: 'Kids\' park with 10+ zones: maze, trampolines, climbing, inflatables, carousel, and baby area. Also offer private parties.',
    price: '$150 MXN 1 hora / $280 Day Pass / $90 bebés (1-2 años)', priceEn: '$150 MXN 1 hour / $280 Day Pass / $90 toddlers (1-2)',
    hours: 'Mar-Vie 1PM-8PM | Sáb-Dom 2:30PM-8PM', hoursEn: 'Tue-Fri 1PM-8PM | Sat-Sun 2:30PM-8PM',
    ages: '1-12', icon: '🎢',
    tip: 'Ubicado en Carr. Guadalajara 1235, Lomas del Tecnológico. Grupos de 5+ niños tienen 10% descuento',
    tipEn: 'Located at Carr. Guadalajara 1235, Lomas del Tecnológico. Groups of 5+ kids get 10% discount',
    website: 'https://kidiverso.mx/',
    map: 'Kidiverso+San+Luis+Potosi',
  },
  {
    name: 'Laberinto de las Ciencias y las Artes',
    desc: 'Museo interactivo de ciencia y arte en la zona del Parque Tangamanga I, con salas permanentes sobre el espacio, la naturaleza, las redes y lo imperceptible, además de exhibiciones temporales.',
    descEn: 'Interactive science-and-art museum in the Tangamanga I area, with permanent halls on space, nature, networks, and the microscopic world, plus temporary exhibits.',
    price: '$50-60 MXN entrada general (~$3 USD)', priceEn: '$50-60 MXN general admission (~$3 USD)',
    hours: 'Mar-Vie 9AM-5PM | Sáb-Dom 11AM-5PM', hoursEn: 'Tue-Fri 9AM-5PM | Sat-Sun 11AM-5PM',
    ages: '3-99', icon: '🔬',
    tip: 'El planetario del Parque Tangamanga I es un recinto aparte; consulta sus funciones por separado',
    tipEn: 'The Tangamanga I planetarium is a separate venue; check its shows separately',
    map: 'Museo+Laberinto+de+las+Ciencias+San+Luis+Potosi',
  },
  {
    name: 'Bol Tangamanga (Boliche)',
    desc: 'Boliche en Plaza Tangamanga, cerca del parque. Perfecto para tardes lluviosas.',
    descEn: 'Bowling alley in Plaza Tangamanga, near the park. Perfect for rainy afternoons.',
    price: 'Consultar precios con el lugar', priceEn: 'Check prices with the venue',
    hours: 'Consultar horario', hoursEn: 'Check hours',
    ages: '4-99', icon: '🎳',
    tip: 'Llama antes para confirmar disponibilidad de pistas',
    tipEn: 'Call ahead to confirm lane availability',
    map: 'Bol+Tangamanga+San+Luis+Potosi',
  },
  {
    name: 'GoKartMania Citadella',
    desc: 'Pista de go-karts en Plaza Citadella (Av. Salvador Nava Martínez 3125), junto a Tangamanga I, con karts para adultos y opciones para niños.',
    descEn: 'Go-kart track in Plaza Citadella (Av. Salvador Nava Martínez 3125), next to Tangamanga I, with adult karts and options for kids.',
    price: '$349 MXN carrera adulto / $150 Kartito (~$19/$8 USD)', priceEn: '$349 MXN adult race / $150 Kartito (~$19/$8 USD)',
    hours: 'Consultar horario', hoursEn: 'Check hours',
    ages: '5-99', icon: '🏎️',
    tip: 'Los paquetes de varias carreras bajan el precio por carrera',
    tipEn: 'Multi-race packages lower the price per race',
    website: 'https://gokartmaniaslp.com/servicios/',
    map: 'GoKartMania+Citadella+San+Luis+Potosi',
  },
  {
    name: 'Enigma Rooms (Escape Room)',
    desc: 'Salas de escape temáticas donde la familia trabaja en equipo para resolver acertijos antes de que se acaben los 60 minutos. Sucursales en Av. Carranza 940 y The Park.',
    descEn: 'Themed escape rooms where the family works together to solve puzzles before the 60 minutes run out. Branches at Av. Carranza 940 and The Park.',
    price: '$320-380 MXN + IVA por persona (~$17-20 USD)', priceEn: '$320-380 MXN + VAT per person (~$17-20 USD)',
    hours: 'Con reservación', hoursEn: 'By reservation',
    ages: '8-99', icon: '🔐',
    tip: 'Menores de 11 años deben ir acompañados de un adulto. Ideal para familias con niños mayores de 8',
    tipEn: 'Kids under 11 must be accompanied by an adult. Best for families with kids 8+',
    website: 'https://enigmarooms.mx/eng/slp.html',
    map: 'Enigma+Rooms+San+Luis+Potosi',
  },
];

const culturePlaces = [
  {
    name: 'Centro de las Artes',
    desc: 'Antigua penitenciaría estatal convertida en centro cultural (Calzada de Guadalupe 705) con talleres de arte, galerías y el Museo Leonora Carrington.',
    descEn: 'Former state penitentiary turned cultural center (Calzada de Guadalupe 705) with art workshops, galleries, and the Museo Leonora Carrington.',
    price: '~$55 MXN; gratis los miércoles', priceEn: '~$55 MXN; free on Wednesdays',
    hours: 'Mar-Dom 10AM-6PM', hoursEn: 'Tue-Sun 10AM-6PM',
    ages: '0-99', icon: '🎨',
    tip: 'Revisa la agenda semanal del CEART para talleres infantiles',
    tipEn: 'Check the CEART weekly agenda for kids\' workshops',
    map: 'Centro+de+las+Artes+San+Luis+Potosi',
  },
  {
    name: 'Museo Nacional de la Máscara',
    desc: 'Más de 1,300 máscaras ceremoniales de todo México. A los niños les fascina la variedad de diseños y colores.',
    descEn: 'Over 1,300 ceremonial masks from across Mexico. Kids love the variety of designs and colors.',
    price: 'Entrada de bajo costo — consulta tarifas vigentes', priceEn: 'Low-cost admission — check current prices',
    hours: 'Mar-Dom (cerrado lunes) — consulta horario', hoursEn: 'Tue-Sun (closed Mon) — check hours',
    ages: '3-99', icon: '🎭',
    tip: 'Está en Villerías 2, Centro Histórico. Combínalo con un paseo por las plazas',
    tipEn: 'Located at Villerías 2, Centro Histórico. Combine with a walk around the plazas',
    map: 'Museo+Nacional+de+la+Mascara+San+Luis+Potosi',
  },
  {
    name: 'San Luis Rey (Tranvía)',
    desc: 'Recorrido narrado en tranvía por el centro histórico. Historia, arquitectura y leyendas de la ciudad.',
    descEn: 'Narrated trolley tour through the historic center. History, architecture, and city legends.',
    price: '$150 MXN adultos / $100 niños e INAPAM (~$8/$5 USD)', priceEn: '$150 MXN adults / $100 kids & seniors (~$8/$5 USD)',
    hours: 'Diario 10AM-7:30PM, salidas desde el Jardín San Juan de Dios', hoursEn: 'Daily 10AM-7:30PM, departures from Jardín San Juan de Dios',
    ages: '3-99', icon: '🚋',
    tip: 'El recorrido dura cerca de 90 minutos; los boletos se compran a bordo',
    tipEn: 'The tour takes about 90 minutes; tickets are sold on board',
    map: 'Tranvia+Turistico+San+Luis+Rey+San+Luis+Potosi',
  },
];

const familyPlans = [
  {
    title: 'Día de Aventura',
    titleEn: 'Adventure Day',
    budget: '$1,500-2,500 MXN',
    budgetEn: '$85-145 USD',
    schedule: [
      { time: '9:00', act: 'Desayuno en La Parroquia Potosina', actEn: 'Breakfast at La Parroquia Potosina' },
      { time: '10:30', act: 'Parque Tangamanga I - lago y juegos', actEn: 'Tangamanga Park I - lake and playgrounds' },
      { time: '13:30', act: 'Almuerzo picnic en el parque', actEn: 'Picnic lunch in the park' },
      { time: '15:00', act: 'GoKartMania o Bol Tangamanga', actEn: 'GoKartMania or Bol Tangamanga' },
      { time: '18:00', act: 'Helado y paseo en Plaza Citadella', actEn: 'Ice cream and stroll at Plaza Citadella' },
    ],
    color: 'green',
  },
  {
    title: 'Día Cultural',
    titleEn: 'Culture Day',
    budget: '$800-1,500 MXN',
    budgetEn: '$45-85 USD',
    schedule: [
      { time: '9:00', act: 'Desayuno en Sanborns o VIPS', actEn: 'Breakfast at Sanborns or VIPS' },
      { time: '10:30', act: 'Laberinto de las Ciencias', actEn: 'Laberinto Science Museum' },
      { time: '13:00', act: 'San Luis Rey Tranvía', actEn: 'San Luis Rey Trolley Tour' },
      { time: '14:30', act: 'Comida en La Posada del Virrey (Jardín Hidalgo)', actEn: 'Lunch at La Posada del Virrey (Jardín Hidalgo)' },
      { time: '16:30', act: 'Museo de la Máscara + paseo Centro', actEn: 'Mask Museum + Centro walk' },
    ],
    color: 'blue',
  },
  {
    title: 'Domingo en Familia',
    titleEn: 'Family Sunday',
    budget: '$600-1,200 MXN',
    budgetEn: '$35-70 USD',
    schedule: [
      { time: '8:00', act: 'Ciclovía en Av. Carranza', actEn: 'Ciclovía on Av. Carranza' },
      { time: '10:30', act: 'Desayuno en Café Cortao (Centro)', actEn: 'Breakfast at Café Cortao (Centro)' },
      { time: '14:00', act: 'Kidiverso (abre 2:30PM fines de semana) o Boliche', actEn: 'Kidiverso (opens 2:30PM on weekends) or Bowling' },
      { time: '16:30', act: 'Comida en Peter Piper Pizza (Plaza Citadella)', actEn: 'Lunch at Peter Piper Pizza (Plaza Citadella)' },
      { time: '18:00', act: 'Helado y paseo en Plaza Citadella', actEn: 'Ice cream and stroll at Plaza Citadella' },
    ],
    color: 'orange',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  green: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', badge: 'bg-green-600' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700', badge: 'bg-blue-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', badge: 'bg-orange-600' },
};

export default function FamilyFriendlyActivities({ familyEvents: initialFamilyEvents = [] }: { familyEvents?: Event[] }) {
  const familyEvents = useUpcomingEvents(initialFamilyEvents);
  const { locale } = useRouter();
  const isEs = locale === 'es';

  const pageTitle = isEs
    ? 'Parques para Niños en San Luis Potosí: 14 actividades familiares con precios y horarios'
    : 'Parks for Kids in San Luis Potosí: 14 Family Activities with Prices & Hours';
  const pageDesc = isEs
    ? 'Parques para niños en San Luis Potosí: 14 actividades familiares con precios, horarios y edades — Tangamanga, Kidiverso, museos, go-karts y más para este fin de semana.'
    : 'Parks for kids in San Luis Potosí: 14 family activities with prices, hours and age ranges — Tangamanga, Kidiverso, museums, go-karts and more for this weekend.';

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        keywords="family friendly activities San Luis Potosí, actividades familiares SLP, things to do with kids San Luis Potosi, family activities Mexico, parques infantiles SLP, Kidiverso, GoKartMania, Tangamanga, boliche SLP, go karts San Luis Potosi, Laberinto de las Ciencias, family travel San Luis Potosi, kid friendly SLP"
        ogType="website"
      />

      <Head>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:url" content="https://www.sanluisway.com/family-friendly-activities" />
        <meta property="og:locale" content={isEs ? 'es_MX' : 'en_US'} />

        {/* ItemList structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Family Friendly Activities in San Luis Potosí',
              description: 'Curated list of the best family friendly activities in San Luis Potosí, Mexico',
              numberOfItems: outdoorPlaces.length + indoorPlaces.length + culturePlaces.length,
              itemListElement: [...outdoorPlaces, ...indoorPlaces, ...culturePlaces].map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                  '@type': 'TouristAttraction',
                  name: p.name,
                  description: p.descEn,
                  address: { '@type': 'PostalAddress', addressLocality: 'San Luis Potosí', addressCountry: 'MX' },
                },
              })),
            }),
          }}
        />

        {/* FAQPage for AI agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the best family friendly activities in San Luis Potosí?',
                  acceptedAnswer: { '@type': 'Answer', text: 'The best family friendly activities in San Luis Potosí include Parque Tangamanga I (free urban park; its zoo is temporarily closed for renovation), Kidiverso (indoor play park), Laberinto de las Ciencias (interactive science museum), bowling at Bol Tangamanga, GoKartMania go-karts, Enigma Rooms escape rooms, and the Sunday Ciclovía on Avenida Carranza.' },
                },
                {
                  '@type': 'Question',
                  name: 'Are there free family friendly activities in San Luis Potosí?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, several family friendly activities in San Luis Potosí are completely free: Parque Tangamanga I and II, Parque Bicentenario, the Sunday Ciclovía on Avenida Carranza, and walking around the historic center plazas. Centro de las Artes is free on Wednesdays.' },
                },
                {
                  '@type': 'Question',
                  name: 'How much do family friendly activities cost in San Luis Potosí?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Family friendly activities in San Luis Potosí are affordable. Kidiverso costs $150 MXN for one hour or $280 MXN for a day pass, Museo Laberinto about $50-60 MXN, and a GoKartMania adult race $349 MXN ($150 for the Kartito). Many parks are free.' },
                },
                {
                  '@type': 'Question',
                  name: 'What indoor family friendly activities are available in San Luis Potosí for rainy days?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Indoor family friendly activities for rainy days in San Luis Potosí include Kidiverso (play park), Bol Tangamanga (bowling), Enigma Rooms (escape rooms), Laberinto de las Ciencias (science museum), and Museo Nacional de la Máscara.' },
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Back nav */}
        <div className="bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 py-3">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              {isEs ? 'Volver al inicio' : 'Back to home'}
            </Link>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/meeting-spots/tangamanga-zoo.jpg"
            alt="Parque Tangamanga, a family favorite in San Luis Potosí"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-pink-500/75 to-purple-600/80" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
          <div className="relative container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Family Friendly Activities
              <span className="block text-xl md:text-2xl font-light text-white/70 mt-3">
                {isEs ? 'en San Luis Potosí' : 'in San Luis Potosí'}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {isEs
                ? 'Guía completa con los mejores lugares, precios actualizados, horarios y planes por día para disfrutar en familia.'
                : 'Complete guide with the best places, updated prices, hours, and day-by-day plans to enjoy with your family.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '🌳', label: isEs ? '6 Al Aire Libre' : '6 Outdoor' },
                { icon: '🎢', label: isEs ? '5 Bajo Techo' : '5 Indoor' },
                { icon: '🎨', label: isEs ? '3 Culturales' : '3 Cultural' },
                { icon: '📋', label: isEs ? '3 Planes del Día' : '3 Day Plans' },
              ].map((s) => (
                <div key={s.label} className="bg-white/15 border border-white/25 rounded-full px-5 py-2 text-white text-sm font-medium">
                  {s.icon} {s.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NAV BAR */}
        <div className="bg-gray-900 text-white py-3 sticky top-0 z-30 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            {[
              { href: '#outdoor', label: isEs ? '🌳 Al Aire Libre' : '🌳 Outdoor' },
              { href: '#indoor', label: isEs ? '🎢 Bajo Techo' : '🎢 Indoor' },
              { href: '#culture', label: '🎨 Cultural' },
              { href: '#plans', label: isEs ? '📋 Planes' : '📋 Day Plans' },
              { href: '#tips', label: isEs ? '💡 Consejos' : '💡 Tips' },
              ...(familyEvents.length > 0 ? [{ href: '#events', label: isEs ? '📅 Eventos' : '📅 Events' }] : []),
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-orange-300 transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        {/* UPCOMING FAMILY EVENTS */}
        {familyEvents.length > 0 && (
          <section className="py-16 bg-green-50" id="events">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
                {isEs ? 'Eventos Familiares Próximos' : 'Upcoming Family Events'}
              </h2>
              <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
                {isEs ? 'Eventos especiales para disfrutar en familia' : 'Special events to enjoy with the whole family'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={buildEventPath(event)}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {event.image_url ? (
                        <Image
                          src={event.image_url}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600" />
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Family Friendly
                      </span>
                      {event.cost && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-white text-gray-800">
                          {event.cost}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="space-y-1.5 text-sm text-gray-500 mb-3">
                        <p className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          {new Date(event.start_date).toLocaleDateString(isEs ? 'es-MX' : 'en-US', {
                            weekday: 'long', month: 'long', day: 'numeric',
                            timeZone: 'America/Mexico_City',
                          })}
                        </p>
                        <p className="flex items-center gap-1.5">
                          <MapPinIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </p>
                      </div>
                      {event.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/events/community-social"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  {isEs ? 'Ver todos los eventos familiares' : 'View all family events'} →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* OUTDOOR */}
        <section className="py-16 bg-white" id="outdoor">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
              🌳 {isEs ? 'Family Friendly Activities al Aire Libre' : 'Outdoor Family Friendly Activities'}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {isEs ? 'Parques, ciclovía y naturaleza — muchas opciones gratuitas' : 'Parks, cycling, and nature — many free options'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outdoorPlaces.map((p) => (
                <PlaceCard key={p.name} place={p} isEs={isEs} />
              ))}
            </div>
          </div>
        </section>

        <section className="my-8"><AdUnit placement="mid-content" /></section>

        {/* INDOOR */}
        <section className="py-16 bg-gray-50" id="indoor">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
              🎢 {isEs ? 'Family Friendly Activities Bajo Techo' : 'Indoor Family Friendly Activities'}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {isEs ? 'Perfectas para días lluviosos o tardes calurosas' : 'Perfect for rainy days or hot afternoons'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indoorPlaces.map((p) => (
                <PlaceCard key={p.name} place={p} isEs={isEs} />
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="py-16 bg-white" id="culture">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
              🎨 {isEs ? 'Family Friendly Activities Culturales' : 'Cultural Family Friendly Activities'}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {isEs ? 'Museos, arte y recorridos que toda la familia disfrutará' : 'Museums, art, and tours the whole family will enjoy'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culturePlaces.map((p) => (
                <PlaceCard key={p.name} place={p} isEs={isEs} />
              ))}
            </div>
          </div>
        </section>

        {/* DAY PLANS */}
        <section className="py-16 bg-gray-50" id="plans">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
              📋 {isEs ? 'Planes del Día para Family Friendly Activities' : 'Day Plans for Family Friendly Activities'}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {isEs ? '3 itinerarios listos para usar con presupuesto estimado' : '3 ready-to-use itineraries with estimated budgets'}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {familyPlans.map((plan) => {
                const c = colorMap[plan.color];
                return (
                  <div key={plan.title} className={`${c.bg} border-2 ${c.border} rounded-2xl overflow-hidden`}>
                    <div className={`${c.badge} px-6 py-4 text-white`}>
                      <h3 className="text-xl font-bold">{isEs ? plan.title : plan.titleEn}</h3>
                      <p className="text-sm text-white/80">{isEs ? 'Presupuesto familia de 4' : 'Budget for family of 4'}: {isEs ? plan.budget : plan.budgetEn}</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {plan.schedule.map((s) => (
                        <div key={s.time} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 ${c.text} font-bold text-sm w-12`}>{s.time}</span>
                          <span className="text-gray-700 text-sm">{isEs ? s.act : s.actEn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIPS */}
        <section className="py-16 bg-white" id="tips">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              💡 {isEs ? 'Consejos para Family Friendly Activities en SLP' : 'Tips for Family Friendly Activities in SLP'}
            </h2>
            <div className="space-y-4">
              {[
                { color: 'green', icon: '☀️', text: isEs ? 'El clima de SLP es semiárido. Lleva protector solar, gorra y agua, especialmente para actividades al aire libre entre 11AM-3PM.' : 'SLP has a semi-arid climate. Bring sunscreen, a cap, and water, especially for outdoor activities between 11AM-3PM.' },
                { color: 'blue', icon: '🚗', text: isEs ? 'Uber y DiDi funcionan bien en toda la ciudad. Para recorrer varios lugares en un día, considera rentar auto — el estacionamiento suele ser económico.' : 'Uber and DiDi work well throughout the city. To visit multiple places in a day, consider renting a car — parking is usually inexpensive.' },
                { color: 'amber', icon: '💰', text: isEs ? 'Muchas family friendly activities en SLP son gratis o cuestan menos de $200 MXN por persona. Comer en fondas locales suele costar mucho menos que en restaurantes.' : 'Many family friendly activities in SLP are free or under $200 MXN per person. Eating at local fondas usually costs far less than at restaurants.' },
                { color: 'purple', icon: '📅', text: isEs ? 'Los fines de semana son más concurridos. Para evitar filas en Kidiverso y GoKartMania, ve entre semana o llega temprano.' : 'Weekends are busier. To avoid lines at Kidiverso and GoKartMania, go on weekdays or arrive early.' },
                { color: 'red', icon: '🏥', text: isEs ? 'Farmacias están en todas partes. Para emergencias: Hospital Lomas (privado) y Star Médica. Número de emergencias: 911.' : 'Pharmacies are everywhere. For emergencies: Hospital Lomas (private) and Star Médica. Emergency number: 911.' },
              ].map((tip) => (
                <div key={tip.icon} className={`bg-${tip.color}-50 border-l-4 border-${tip.color}-400 p-4 rounded-r-lg`}>
                  <p className={`text-${tip.color}-800`}><strong>{tip.icon}</strong> {tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 mb-8"><AdUnit placement="top-banner" /></section>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <GuideCTA relatedLinks={[
            { href: '/free-events-san-luis-potosi', label: 'Free Events', labelEs: 'Eventos Gratis' },
            { href: '/parque-tangamanga', label: 'Parque Tangamanga Guide', labelEs: 'Guía Tangamanga' },
            { href: '/weekend-getaways', label: 'Weekend Getaways', labelEs: 'Escapadas de Fin de Semana' },
            { href: '/resources/family-guide', label: 'Family Guide', labelEs: 'Guía Familiar' },
          ]} />
        </div>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {isEs ? '¡Planea tus Family Friendly Activities!' : 'Plan Your Family Friendly Activities!'}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {isEs
                ? '¿Necesitas recomendaciones personalizadas? Contáctanos para ayudarte a planear el día perfecto en familia.'
                : 'Need personalized recommendations? Contact us to help plan the perfect family day.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-colors shadow-lg">
                {isEs ? 'Contáctanos' : 'Contact Us'} →
              </Link>
              <Link href="/blog/fin-de-semana-familiar-san-luis-potosi-parques-go-karts-ninos" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors">
                {isEs ? 'Guía de Fin de Semana' : 'Weekend Guide'} →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function PlaceCard({ place, isEs }: { place: any; isEs: boolean }) {
  const mapsUrl = place.map ? `https://www.google.com/maps/search/?api=1&query=${place.map}` : undefined;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{place.icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{place.name}</h3>
            <span className="text-gray-400 group-hover:text-orange-500 transition-colors text-sm">📍</span>
          </div>
          <span className="text-xs text-gray-400">{isEs ? 'Edades' : 'Ages'}: {place.ages}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{isEs ? place.desc : place.descEn}</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">💲</span>
          <span className="text-gray-700">{isEs ? place.price : place.priceEn}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">🕐</span>
          <span className="text-gray-700">{isEs ? place.hours : place.hoursEn}</span>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-1.5">
          <span className="text-amber-600 font-bold">💡</span>
          <span className="text-amber-800 text-xs">{isEs ? place.tip : place.tipEn}</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        {place.website && (
          <span className="text-xs text-blue-600 underline">
            {isEs ? 'Sitio web' : 'Website'} ↗
          </span>
        )}
        <span className="text-xs text-orange-600 font-semibold group-hover:underline">
          {isEs ? 'Ver en Google Maps' : 'View on Google Maps'} →
        </span>
      </div>
    </a>
  );
}
