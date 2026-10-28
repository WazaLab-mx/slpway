import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LastUpdated from '@/components/common/LastUpdated';
import GuideCTA from '@/components/common/GuideCTA';
import AdUnit from '@/components/common/AdUnit';

export default function FamilyGuidePage() {
  const { t } = useTranslation('family-guide');
  const router = useRouter();
  const { locale = 'en' } = router;
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'schools', name: 'Schools' },
    { id: 'parks', name: 'Parks & Activities' },
    { id: 'healthcare', name: 'Pediatric Care' },
    { id: 'childcare', name: 'Childcare' },
    { id: 'sports', name: 'Kids Sports' },
    { id: 'neighborhoods', name: 'Neighborhoods' },
    { id: 'restaurants', name: 'Family Dining' },
    { id: 'faq', name: 'FAQ' },
    { id: 'sources', name: 'Sources' },
  ];

  const quickStats = [
    { value: '420ha', label: 'Tangamanga I', source: 'México Desconocido' },
    { value: 'Free', label: 'Tangamanga Entry', source: 'CECURT' },
    { value: '3', label: 'IB Programmes (Terranova)', source: 'IB / School' },
    { value: '185', label: 'School Days 2026-27', source: 'SEP' },
    { value: '3', label: 'Private Hospitals w/ 24h ER', source: 'Verified' },
    { value: '5', label: 'Family Zones', source: 'Guide' },
  ];

  const schools = {
    international: [
      {
        name: 'Colegio Internacional Terranova',
        badge: 'IB WORLD SCHOOL',
        badgeColor: 'bg-blue-600',
        address: 'Av. Palmira 705, Privadas del Pedregal',
        phone: '444 841 6422',
        website: 'https://www.terranova.edu.mx',
        curriculum: ['IB Primary Years (PYP)', 'IB Middle Years (MYP)', 'IB Diploma (DP)', 'Bilingual'],
        features: ['IB World School since 2011', 'After-school program', 'Preschool to Bachillerato'],
        levels: 'Preschool - High School',
        tuition: 'Request current fees',
      },
      {
        name: 'Instituto Potosino Marista',
        badge: 'MARIST, SINCE 1935',
        badgeColor: 'bg-green-600',
        address: 'Benigno Arriaga 608 (primary)',
        phone: '444 813 4375 (primary) / 444 813 4024 (secondary & prepa)',
        website: 'https://potosino.maristas.edu.mx',
        curriculum: ['SEP curriculum', 'Catholic (Marist Brothers)'],
        features: ['Founded 1935', 'Inclusion program (Ollin Yolotl)', 'Primary to Preparatoria'],
        levels: 'Primary - High School',
        tuition: 'Request current fees',
      },
      {
        name: 'Colegio Chapultepec de San Luis',
        badge: 'BILINGUAL',
        badgeColor: 'bg-emerald-600',
        address: 'Prol. Av. Chapultepec 1280, Privadas del Pedregal',
        phone: '444 825 5043',
        website: 'http://www.colegiochapultepecdesanluis.com',
        curriculum: ['Bilingual (classes taught in English, per school)', 'Cambridge-endorsed'],
        features: ['Maternal to Preparatoria', 'Microsoft-endorsed program'],
        levels: 'Maternal - High School',
        tuition: 'Request current fees',
      },
    ],
    bilingual: [
      {
        name: 'Colegio Motolinía de San Luis',
        address: 'Av. Venustiano Carranza 2150, Col. Polanco (preschool & primary)',
        phone: '444 813 0240',
        levels: 'Preschool - High School',
        focus: 'Catholic school; secondary (Basalenque 140) and prepa (Cordillera Arakán 709) on separate campuses',
        tuition: 'Request current fees',
      },
    ],
  };

  const parksAndActivities = [
    {
      name: 'Parque Tangamanga I',
      icon: '🌳',
      size: '420 hectares',
      features: ["Considered Mexico's 2nd-largest urban park", 'Bike trails', 'Planetarium', 'Japanese Garden', 'Picnic areas', 'Jogging paths'],
      cost: 'Free entry',
      hours: 'Tue-Sat 5:00 AM - 10:30 PM; Sun 5:00 AM - 6:00 PM; Mon 5:00 - 11:00 AM',
      address: 'Av. Dr. Salvador Nava Martínez 3055',
      bestFor: 'Outdoor family days, cycling, nature walks',
    },
    {
      name: 'Parque Tangamanga II',
      icon: '🚴',
      size: 'Sports park (north side)',
      features: ['Sports fields', 'Autódromo on the old airport runway', 'Open green areas'],
      cost: 'Free entry',
      hours: 'Check with CECURT (444 475 2385)',
      address: 'Fray Diego de la Magdalena 485, Aviación Industrial',
      bestFor: 'Sports activities, organized games',
    },
    {
      name: 'Museo Laberinto de las Ciencias y las Artes',
      icon: '🔬',
      size: 'Interactive museum',
      features: ['Interactive science exhibits', 'Space gallery', 'Nature gallery', 'Light & color gallery', 'Temporary exhibitions'],
      cost: 'Check current prices (museolaberinto.com)',
      hours: 'Tue-Fri 9:00 AM - 5:00 PM; Sat-Sun 11:00 AM - 5:00 PM',
      address: 'Blvd. Antonio Rocha Cordero s/n, Col. Tierra Blanca',
      bestFor: 'Educational outings, rainy days, curious kids',
    },
    {
      name: 'Ciclovía on Av. Carranza',
      icon: '🚲',
      size: 'Sunday car-free route',
      features: ['Car-free on Sundays', 'Biking', 'Skating', 'Walking'],
      cost: 'Free',
      hours: 'Sundays, approx. 8:00 AM - 1:00 PM',
      address: 'Av. Venustiano Carranza',
      bestFor: 'Sunday family rides, local experience',
    },
    {
      name: 'Bol Tangamanga',
      icon: '🎳',
      size: 'Bowling alley',
      features: ['Bowling lanes', 'Indoor activity'],
      cost: 'Check current prices',
      hours: 'Check with the venue',
      address: 'Plaza Tangamanga',
      bestFor: 'Rainy days, birthday outings',
    },
    {
      name: 'GoKartMania',
      icon: '🏎️',
      size: 'Go-kart track',
      features: ['Go-karts', 'Next to Tangamanga I'],
      cost: 'Check current prices',
      hours: 'Check with the venue',
      address: 'Plaza Citadella, Av. Salvador Nava Martínez 3125',
      bestFor: 'Older kids and teens',
    },
  ];

  const pediatricCare = [
    {
      name: 'Hospital del Niño y la Mujer',
      type: 'Public Specialized',
      badge: 'WOMEN & CHILDREN',
      address: 'Blvd. Antonio Rocha Cordero 2510, San Juan de Guadalupe',
      phone: '444 826 5002',
      services: ['Pediatric emergencies (24/7)', 'Pediatric and maternal care'],
      wait: 'Variable (public)',
      cost: 'Low cost (public)',
    },
    {
      name: 'Hospital Lomas de San Luis',
      type: 'Private Hospital',
      badge: 'POPULAR WITH EXPATS',
      address: 'Av. Palmira 600, Villas del Pedregal',
      phone: '444 102 5900',
      services: ['24/7 emergency room', 'Pediatric specialists', 'Some English-speaking doctors'],
      wait: 'Varies',
      cost: 'Ask for current consultation fees',
    },
    {
      name: 'Hospital Angeles San Luis Potosí',
      type: 'Private Hospital',
      badge: 'NATIONAL NETWORK',
      address: 'Antonio Aguilar 155, Burócratas del Estado',
      phone: '444 834 0300',
      services: ['24/7 emergency room', 'Pediatric specialists'],
      wait: 'Varies',
      cost: 'Ask for current consultation fees',
    },
    {
      name: 'Star Médica San Luis Potosí',
      type: 'Private Hospital',
      badge: 'NATIONAL NETWORK',
      address: 'Mariano Arista 735, Barrio de Tequisquiapan',
      phone: '444 812 3737',
      services: ['24/7 emergency room', 'Pediatric specialists'],
      wait: 'Varies',
      cost: 'Ask for current consultation fees',
    },
  ];

  const childcareOptions = [
    {
      type: 'CENDI (Government)',
      name: 'CENDI (DIF / state centers)',
      ages: 'Infants to preschool (varies by center)',
      hours: 'Varies by center',
      cost: 'Subsidized',
      features: ['Meals included', 'Educational program'],
      requirements: 'Typically working parents; ask the center',
      contact: 'DIF San Luis Potosí: dif.slp.gob.mx',
    },
    {
      type: 'IMSS Daycare',
      name: 'Guarderías IMSS',
      ages: '43 days - 4 years',
      hours: 'Varies by unit',
      cost: 'Included with IMSS',
      features: ['Full-day care', 'Nutrition program', 'Early stimulation'],
      requirements: 'IMSS-insured working parent (formal employment)',
      contact: 'IMSS: 800 623 2323',
    },
    {
      type: 'Private Daycare',
      name: 'Various Private Options',
      ages: 'Infants to preschool (varies)',
      hours: 'Varies; some offer extended hours',
      cost: 'Request current fees',
      features: ['Small groups', 'Bilingual options', 'Activities'],
      requirements: 'Registration, medical exam',
      contact: 'Search: "guarderías privadas SLP"',
    },
    {
      type: 'Montessori',
      name: 'Montessori preschools',
      ages: 'Varies by school',
      hours: 'Varies by school',
      cost: 'Request current fees',
      features: ['Montessori method', 'Mixed ages', 'Self-directed learning'],
      requirements: 'Usually a parent interview',
      contact: 'Search: "Montessori San Luis Potosí"',
    },
  ];

  const kidsSports = [
    {
      sport: 'Soccer',
      icon: '⚽',
      venues: ['Club and school academies across the city', 'Tangamanga II sports fields'],
      ages: '4 years+',
      cost: 'Fees vary; ask each academy',
      popularity: 'Very High',
    },
    {
      sport: 'Swimming',
      icon: '🏊',
      venues: ['Private swim schools', 'Private sports clubs'],
      ages: '3 years+',
      cost: 'Fees vary; ask each school',
      popularity: 'High',
    },
    {
      sport: 'Gymnastics',
      icon: '🤸',
      venues: ['Private gymnastics schools', 'Private sports clubs'],
      ages: '3 years+',
      cost: 'Fees vary; ask each school',
      popularity: 'Medium-High',
    },
    {
      sport: 'Tennis',
      icon: '🎾',
      venues: ['Club Deportivo Potosino (hosts the ATP Challenger)', 'Private sports clubs'],
      ages: '5 years+',
      cost: 'Fees vary; ask each club',
      popularity: 'Medium',
    },
    {
      sport: 'Martial Arts',
      icon: '🥋',
      venues: ['Karate, taekwondo and jiu-jitsu schools across the city'],
      ages: '4 years+',
      cost: 'Fees vary; ask each school',
      popularity: 'Medium-High',
    },
    {
      sport: 'Dance',
      icon: '💃',
      venues: ['Ballet, folk and hip-hop academies across the city'],
      ages: '3 years+',
      cost: 'Fees vary; ask each academy',
      popularity: 'High',
    },
    {
      sport: 'Mountain Biking',
      icon: '🚵',
      venues: ['Parque Tangamanga I trails'],
      ages: '6 years+',
      cost: 'Free park entry; club fees vary',
      popularity: 'Medium',
    },
  ];

  const familyNeighborhoods = [
    {
      name: 'Lomas del Tecnológico',
      rating: 5,
      description: 'Established family neighborhood in the Lomas area with good access to schools and services',
      highlights: ['Near Tec de Monterrey campus', 'Shopping nearby', 'Residential streets'],
      avgRent: '$18,000 - $35,000 MXN/month',
      schoolAccess: 'Excellent',
      parkAccess: 'Good',
    },
    {
      name: 'Lomas 4a Sección',
      rating: 5,
      description: 'Upscale area with international community and modern amenities',
      highlights: ['Colegio Motolinía prepa campus', 'Gated communities', 'Family restaurants', 'Quiet streets'],
      avgRent: '$20,000 - $40,000 MXN/month',
      schoolAccess: 'Excellent',
      parkAccess: 'Good',
    },
    {
      name: 'Desarrollo del Pedregal',
      rating: 4,
      description: 'Modern development with young families and good infrastructure',
      highlights: ['Near Terranova and Colegio Chapultepec', 'Near Hospital Lomas', 'New constructions', 'Growing area'],
      avgRent: '$12,000 - $25,000 MXN/month',
      schoolAccess: 'Good',
      parkAccess: 'Good',
    },
    {
      name: 'Jardines del Sur',
      rating: 4,
      description: 'Established middle-class neighborhood with good value',
      highlights: ['Family homes', 'Local schools', 'Parks nearby'],
      avgRent: '$10,000 - $18,000 MXN/month',
      schoolAccess: 'Good',
      parkAccess: 'Good',
    },
    {
      name: 'Club Campestre Area',
      rating: 5,
      description: 'Exclusive area around the Club Campestre de San Luis, with premium housing',
      highlights: ['18-hole golf course (members)', 'Premium housing'],
      avgRent: '$25,000 - $50,000 MXN/month',
      schoolAccess: 'Very Good',
      parkAccess: 'Country club',
    },
  ];

  const familyRestaurants = [
    {
      name: 'Peter Piper Pizza',
      type: 'Pizza & Games',
      features: ['Arcade games', 'Birthday parties', 'Kid-friendly'],
      priceRange: '$$',
      address: 'Plaza Citadella, Av. Salvador Nava Martínez',
    },
  ];

  const faqs = [
    {
      question: 'What are the best international schools in San Luis Potosí?',
      answer: 'Colegio Internacional Terranova is the IB World School in SLP, offering the IB Primary Years, Middle Years and Diploma programmes from preschool through bachillerato. Colegio Chapultepec de San Luis is a bilingual school that says it teaches its classes in English and is Cambridge-endorsed. Instituto Potosino Marista (founded 1935) and Colegio Motolinía are long-established Catholic private schools.'
    },
    {
      question: 'What is the school year calendar in Mexico?',
      answer: 'The SEP 2026-2027 calendar runs from August 31, 2026 to July 9, 2027 (185 school days). Winter vacation is December 21, 2026 to January 5, 2027, and spring vacation is March 22 to April 2, 2027, plus several long weekends. Private schools generally follow the SEP calendar with small variations.'
    },
    {
      question: 'How much does private school cost in SLP?',
      answer: 'Tuition varies widely by school and level, and most schools do not publish their fees. Request current fees directly from each school, and ask about the annual inscription fee, uniforms, books and other extras, which are charged on top of monthly tuition.'
    },
    {
      question: 'Where can I find English-speaking pediatricians?',
      answer: 'Hospital Lomas de San Luis (444 102 5900), Hospital Angeles (444 834 0300) and Star Médica (444 812 3737) are private hospitals with 24/7 emergency rooms and pediatric specialists, and some of their doctors speak English. When booking, specifically request an English-speaking physician.'
    },
    {
      question: 'What are the best parks for kids in San Luis Potosí?',
      answer: "Tangamanga I (420 hectares, considered Mexico's second-largest urban park) has free entry, bike trails, a planetarium and a Japanese Garden. Museo Laberinto de las Ciencias y las Artes is perfect for educational outings with interactive exhibits. Tangamanga II, on the north side of the city, is a sports park."
    },
    {
      question: 'How do I find childcare/daycare in SLP?',
      answer: 'Options include: CENDI centers (government subsidized, usually for working parents), IMSS guarderías (for children of IMSS-insured workers, from 43 days to 4 years), and private daycares (request current fees). Montessori schools also offer preschool programs. Most require registration, medical exams, and parent interviews.'
    },
    {
      question: 'What sports activities are available for children?',
      answer: 'Soccer is most popular, with academies across the city. Swimming programs are offered by private swim schools and sports clubs. Other options include gymnastics, tennis, martial arts, dance, and basketball. Fees vary, so ask each academy for current prices.'
    },
    {
      question: 'Which neighborhoods are best for families with children?',
      answer: 'Lomas del Tecnológico and Lomas 4a Sección are popular choices with good access to schools and services. Desarrollo del Pedregal offers modern housing near Colegio Terranova, Colegio Chapultepec and Hospital Lomas. For a country club lifestyle, the Club Campestre area offers premium housing around the golf course.'
    },
    {
      question: 'Are there playgroups or mom groups in SLP?',
      answer: 'Yes. Look for expat and parent groups on Facebook for playgroup meetups. Many schools organize parent activities, and the expat community regularly organizes kid-friendly events.'
    },
    {
      question: 'What vaccinations do children need for school in Mexico?',
      answer: 'The national schedule includes BCG, Hepatitis B, Hexavalent (formerly Pentavalent: diphtheria, tetanus, pertussis, polio, Hib, hepatitis B), Rotavirus, Pneumococcal, MMR (SRP), and boosters. Schools require a vaccination card (Cartilla Nacional de Salud). Public health centers vaccinate free of charge, and private clinics and pharmacies also offer vaccines.'
    },
    {
      question: 'Is it safe for children to play outside in SLP?',
      answer: 'In family-friendly neighborhoods like Lomas and residential areas, yes. Parks like Tangamanga are busiest and safest during daytime hours. As with any city, supervise children, visit parks during active hours, and choose well-maintained play areas. Many families use private clubs with controlled access.'
    },
    {
      question: 'What birthday party venues are popular?',
      answer: 'Popular options include Peter Piper Pizza (Plaza Citadella), Bol Tangamanga bowling and GoKartMania, plus outdoor areas in the Tangamanga parks. Private party salons are available throughout the city; request current prices.'
    },
  ];

  const sources = [
    { name: 'SEP (Ministry of Education)', url: 'https://www.gob.mx/sep', type: 'Government' },
    { name: 'SEP School Calendar 2026-2027', url: 'https://calendarioescolar.sep.gob.mx/', type: 'Government' },
    { name: 'Colegio Internacional Terranova', url: 'https://www.terranova.edu.mx', type: 'Institution' },
    { name: 'Instituto Potosino Marista', url: 'https://potosino.maristas.edu.mx', type: 'Institution' },
    { name: 'Colegio Motolinía de San Luis', url: 'https://www.motoliniaslp.edu.mx', type: 'Institution' },
    { name: 'DIF San Luis Potosí', url: 'https://dif.slp.gob.mx', type: 'Government' },
    { name: 'IMSS Guarderías', url: 'https://www.imss.gob.mx', type: 'Government' },
    { name: 'Tangamanga Parks (CECURT)', url: 'https://cecurt.slp.gob.mx/faq/', type: 'Government' },
    { name: 'Museo Laberinto', url: 'https://www.museolaberinto.com', type: 'Institution' },
  ];

  const seoFaqs = [
    { q: 'Is San Luis Potosí a good city for families with children?', a: 'Yes. SLP has an IB World School (Colegio Internacional Terranova) and several bilingual and Catholic private schools, large parks like Tangamanga I and II, indoor options such as bowling, go-karts and the Laberinto science museum, and a lower cost of living than Mexico City. Many expat families with children from the BMW and GM plants live here.' },
    { q: 'How much does it cost to raise a family in San Luis Potosí?', a: 'Costs depend mostly on housing and school choice. As a reference, 1-2 bedroom apartments in Lomas generally list for about $17,000-22,000 MXN/month (October 2026). Private school fees vary widely and are rarely published, so request current fees from each school. Groceries and entertainment are cheaper than in Mexico City.' },
    { q: 'Are there English-speaking pediatricians in SLP?', a: 'Yes. Hospital Lomas de San Luis, Hospital Angeles and Star Médica have pediatric specialists, some of whom speak English. Several private clinics in the Lomas area also cater to expat families. Ask for current consultation fees when booking.' },
    { q: 'What family-friendly activities are available on weekends?', a: 'Weekends in SLP are packed: the Sunday Ciclovía on Av. Carranza (free, about 8:00 AM-1:00 PM), Parque Tangamanga I (free entry; the zoo is closed for renovation), bowling at Bol Tangamanga, go-karts at GoKartMania, and the Laberinto de las Ciencias y las Artes interactive museum.' },
  ];

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta property="og:title" content={t('seo.ogTitle')} />
        
        <link rel="canonical" href={`https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/family-guide`} />
        
        <link rel="alternate" hrefLang="en" href="https://www.sanluisway.com/resources/family-guide" />
        <link rel="alternate" hrefLang="es" href="https://www.sanluisway.com/es/resources/family-guide" />
        <link rel="alternate" hrefLang="de" href="https://www.sanluisway.com/de/resources/family-guide" />
        <link rel="alternate" hrefLang="ja" href="https://www.sanluisway.com/ja/resources/family-guide" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sanluisway.com/resources/family-guide" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: t('seo.title'),
              description: t('seo.description'),
              inLanguage: locale,
              datePublished: '2025-01-01',
              dateModified: '2026-10-27',
              author: {
                '@type': 'Person',
                '@id': 'https://www.sanluisway.com/about#editorial-team',
                name: 'San Luis Way Editorial',
                url: 'https://www.sanluisway.com/about',
                worksFor: { '@type': 'Organization', '@id': 'https://www.sanluisway.com/#organization' },
              },
              publisher: { '@type': 'Organization', '@id': 'https://www.sanluisway.com/#organization', name: 'San Luis Way' },
              mainEntityOfPage: `https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/family-guide`,
              about: { '@type': 'Place', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['.family-intro', '#overview', '#activities']
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: t('breadcrumbs.home'), item: 'https://www.sanluisway.com' },
                { '@type': 'ListItem', position: 2, name: t('breadcrumbs.resources'), item: 'https://www.sanluisway.com/resources' },
                { '@type': 'ListItem', position: 3, name: t('breadcrumbs.familyGuide'), item: `https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/family-guide` }
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden text-white">
          <Image
            src="/images/parque-tangamanga/activities-family.jpg"
            alt="Family activities in Parque Tangamanga, San Luis Potosí"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/85 via-purple-600/80 to-pink-500/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
                  VERIFIED 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-pink-400/30 text-white">
                  FAMILY FOCUSED
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Ultimate Family Life Guide
              </h1>
              <LastUpdated date="2026-10-27" className="text-gray-300 mb-4" />
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                San Luis Potosí - Schools, Activities & Family Living
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-0 z-40 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex overflow-x-auto py-3 gap-2 scrollbar-hide">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Executive Summary */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">👨‍👩‍👧‍👦</span> Family Life in San Luis Potosí
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  San Luis Potosí is an <strong>excellent city for raising children</strong>. With quality international schools, vast parks, affordable healthcare, and safe family neighborhoods, SLP offers a balanced lifestyle that combines Mexican culture with modern amenities.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm text-center">
                    <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.source}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Key Takeaways</h3>
                <ul className="text-sm text-yellow-900 space-y-1">
                  <li>• <strong>Schools:</strong> Colegio Internacional Terranova is SLP's IB World School</li>
                  <li>• <strong>Parks:</strong> Tangamanga I alone covers 420 hectares, with free entry</li>
                  <li>• <strong>Healthcare:</strong> Hospital Lomas, Angeles and Star Médica have pediatric specialists; some speak English</li>
                  <li>• <strong>Best Areas:</strong> Lomas del Tecnológico and Lomas 4a for families</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Schools Section */}
          <section id="schools" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🎓 Schools & Education</h2>
              <p className="text-gray-600">International, bilingual, and private school options</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">International & Premium Schools</h3>
            <div className="space-y-6 mb-8">
              {schools.international.map((school, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 ${school.badgeColor} text-white text-xs font-bold rounded-full`}>
                            {school.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{school.name}</h4>
                        <p className="text-gray-600 text-sm">{school.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Levels</div>
                        <div className="font-semibold text-purple-600">{school.levels}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm"><strong>Phone:</strong> {school.phone}</p>
                        <p className="text-sm"><strong>Tuition:</strong> {school.tuition}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <a href={school.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                          Visit Website →
                        </a>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Curriculum:</p>
                      <div className="flex flex-wrap gap-2">
                        {school.curriculum.map((item, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {school.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Private Schools</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {schools.bilingual.map((school, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{school.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{school.address}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Phone:</strong> {school.phone}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Levels:</strong> {school.levels}</p>
                  <p className="text-gray-500 text-sm mb-2">{school.focus}</p>
                  <p className="text-purple-600 text-sm font-medium">{school.tuition}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Parks & Activities Section */}
          <section id="parks" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🌳 Parks & Family Activities</h2>
              <p className="text-gray-600">Outdoor spaces and entertainment for the whole family</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {parksAndActivities.map((place, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{place.icon}</span>
                      {place.name}
                    </h3>
                    <span className="text-purple-600 font-medium text-sm">{place.size}</span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="bg-green-50 px-3 py-1 rounded">
                      <span className="text-green-700">{place.cost}</span>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded">
                      <span className="text-blue-700">{place.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.features.slice(0, 6).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{feature}</span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm mb-2"><strong>Location:</strong> {place.address}</p>
                  <p className="text-purple-600 text-sm"><strong>Best for:</strong> {place.bestFor}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pediatric Care Section */}
          <section id="healthcare" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">👶 Pediatric Healthcare</h2>
              <p className="text-gray-600">Hospitals and clinics for children's health needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pediatricCare.map((facility, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs font-medium">{facility.badge}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">{facility.name}</h3>
                      <p className="text-gray-500 text-sm">{facility.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{facility.address}</p>
                  <p className="text-gray-600 text-sm mb-3"><strong>Phone:</strong> {facility.phone}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {facility.services.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">{service}</span>
                    ))}
                  </div>

                  <div className="flex justify-between text-sm pt-3 border-t">
                    <span className="text-gray-500">Wait: {facility.wait}</span>
                    <span className="text-purple-600 font-medium">{facility.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Childcare Section */}
          <section id="childcare" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🏠 Childcare & Daycare</h2>
              <p className="text-gray-600">Options for working parents and early childhood education</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {childcareOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">{option.type}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">{option.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-600 font-medium">{option.cost}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Ages:</span> {option.ages}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Hours:</span> {option.hours}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {option.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{feature}</span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm mb-2"><strong>Requirements:</strong> {option.requirements}</p>
                  <p className="text-purple-600 text-sm"><strong>Contact:</strong> {option.contact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Kids Sports Section */}
          <section id="sports" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">⚽ Kids Sports & Activities</h2>
              <p className="text-gray-600">Sports programs and extracurricular activities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kidsSports.map((sport, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{sport.icon}</span>
                      {sport.sport}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      sport.popularity === 'Very High' ? 'bg-green-100 text-green-700' :
                      sport.popularity === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {sport.popularity}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <p><strong>Ages:</strong> {sport.ages}</p>
                    <p><strong>Cost:</strong> <span className="text-purple-600">{sport.cost}</span></p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Venues:</p>
                    <ul className="space-y-1">
                      {sport.venues.map((venue, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          {venue}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Family Neighborhoods Section */}
          <section id="neighborhoods" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🏘️ Family-Friendly Neighborhoods</h2>
              <p className="text-gray-600">Best areas for raising children in San Luis Potosí</p>
            </div>

            <div className="space-y-4">
              {familyNeighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                        <span className="text-yellow-500">{'★'.repeat(neighborhood.rating)}</span>
                      </div>
                      <p className="text-gray-600">{neighborhood.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Approx. Rent</div>
                      <div className="font-semibold text-purple-600">{neighborhood.avgRent}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm"><strong>School Access:</strong> {neighborhood.schoolAccess}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm"><strong>Park Access:</strong> {neighborhood.parkAccess}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 md:col-span-1">
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">{highlight}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Family Restaurants Section */}
          <section id="restaurants" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🍕 Family-Friendly Restaurants</h2>
              <p className="text-gray-600">Great places to eat with kids</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {familyRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                      <p className="text-gray-500 text-sm">{restaurant.type}</p>
                    </div>
                    <span className="text-purple-600 font-medium">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{restaurant.address}</p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <p className="text-purple-100 mt-1">{faqs.length} common questions about family life in SLP</p>
              </div>
              <div className="divide-y">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group p-6">
                    <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                      {faq.question}
                      <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Sources Section */}
          <section id="sources" className="mb-16 scroll-mt-24">
            <div className="bg-gray-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sources & References</h2>
              <p className="text-sm text-gray-600 mb-4">
                This guide was compiled using official sources, institutional data, and verified information.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {sources.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      source.type === 'Government' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {source.type}
                    </span>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {source.name} ↗
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Prices and information may change. Always verify current rates.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {seoFaqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-gray-900">
                    {faq.q}
                    <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-700">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="my-8">
            <AdUnit placement="mid-content" />
          </section>

          <GuideCTA relatedLinks={[
            { href: '/resources/school-guide', label: 'School Guide', labelEs: 'Guía Escolar' },
            { href: '/family-friendly-activities', label: 'Family Activities', labelEs: 'Actividades Familiares' },
            { href: '/resources/health-guide', label: 'Healthcare Guide', labelEs: 'Guía de Salud' },
            { href: '/resources/safety-guide', label: 'Is SLP Safe?', labelEs: '¿Es Seguro SLP?' },
          ]} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'family-guide'])),
    },
  };
};
