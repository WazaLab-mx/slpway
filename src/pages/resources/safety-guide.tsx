import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import LastUpdated from '@/components/common/LastUpdated';
import GuideCTA from '@/components/common/GuideCTA';
import AdUnit from '@/components/common/AdUnit';
import CompactNewsletterSignup from '@/components/CompactNewsletterSignup';

export default function SafetyGuidePage() {
  const { t } = useTranslation('common');
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
    { id: 'statistics', name: 'Crime Statistics' },
    { id: 'perception', name: 'Local Perception' },
    { id: 'neighborhoods', name: 'Safe Neighborhoods' },
    { id: 'female-travelers', name: 'Solo Female Safety' },
    { id: 'tourists', name: 'For Tourists' },
    { id: 'driving', name: 'Driving Safety' },
    { id: 'expat-experience', name: 'Expat Experience' },
    { id: 'practical-tips', name: 'Safety Tips' },
    { id: 'emergency', name: 'Emergency Contacts' },
    { id: 'faq', name: 'FAQ' },
  ];

  const faqs = [
    {
      q: 'Is San Luis Potosí safe for tourists?',
      a: 'Generally yes, with normal precautions. The US State Department rates San Luis Potosí state Level 2 (Exercise Increased Caution) and lists no specific travel restrictions for US government employees there. Most visitors to tourist areas like Centro Histórico report no problems.'
    },
    {
      q: 'Is it safe to walk at night?',
      a: 'Numbeo users rate walking alone during the day at about 74/100 and at night at about 39/100, so nights call for more caution. Stick to well-lit, busy areas like Lomas and Centro, and use a ride app to get to unfamiliar neighborhoods after dark.'
    },
    {
      q: 'How does SLP compare to other Mexican cities?',
      a: 'On Numbeo\'s user-perception crime index, SLP scores 52 vs. 66 for Mexico City and 62 for Guadalajara. In INEGI\'s ENSU survey (September 2026), 61% of adults in the SLP metro area said they feel unsafe, slightly above the 58.1% average for the 91 cities surveyed.'
    },
    {
      q: 'Are expats targeted for crime?',
      a: 'Expats report feeling safe and not being specifically targeted. Standard precautions apply: don\'t flash expensive items, use secure ATMs, and avoid known problem areas at night.'
    },
    {
      q: 'What about drug-related violence?',
      a: 'Organized-crime violence exists in the state, as in much of Mexico, but it rarely affects visitors in the capital\'s tourist and residential areas. Official SESNSP figures show a sharp drop in intentional homicides in 2026, and México Evalúa ranked SLP second-lowest for homicide rate in the first half of 2026. The NGO Causa en Común has questioned whether some cases are being recorded under other categories, so treat the drop with some caution.'
    },
    {
      q: 'Is Uber/taxi safe?',
      a: 'Generally yes. Uber and DiDi both operate in SLP and are the easiest option for visitors. For traditional taxis, use an official taxi stand (sitio) or have your hotel or restaurant call one. Avoid unmarked cabs.'
    },
    {
      q: 'Is San Luis Potosí safe for solo female travelers?',
      a: 'Yes, with standard urban precautions. Solo female travelers report feeling safe walking in Lomas, Centro Histórico, and commercial areas during the day. At night, stick to Uber/DiDi and well-lit areas. Catcalling exists (as in most of Mexico) but physical harassment is rare. Many female expats live alone in SLP without issues.'
    },
    {
      q: 'Is San Luis Potosí safe for American tourists?',
      a: 'Generally yes. The US State Department rates SLP Level 2 (Exercise Increased Caution) and lists no specific travel restrictions for government employees there. That is the same tier as Querétaro, Puebla and Mexico City. Most American visitors report no problems, especially in Centro Histórico and Lomas.'
    },
    {
      q: 'Is it safe to drive through San Luis Potosí?',
      a: 'In daylight, generally yes. Highway 57 north to Matehuala and Monterrey is a free federal highway with heavy truck traffic; a San Luis–Matehuala toll road is under construction but not yet a full alternative, so plan to drive it in daylight. Use toll roads (cuotas) where they exist and avoid highway driving at night. Within the city, normal urban caution applies.'
    },
    {
      q: 'Is San Luis Potosí safe to live in long-term?',
      a: 'Many foreigners do. SLP has a growing expat community (especially around the BMW and GM plants), and México Evalúa ranked it among the states with the lowest homicide rates in the first half of 2026. Many long-term residents say they feel safe day to day. Neighborhoods like Lomas, Polanco and Del Valle are popular for safety and walkability.'
    },
  ];

  return (
    <>
      <Head>
        <title>Is San Luis Potosí Safe? Complete Safety Guide | San Luis Way</title>
        <meta name="description" content="How safe is San Luis Potosí? Comprehensive safety analysis with crime statistics, local perception data, safe neighborhoods, expat experiences, and practical tips." />
        <meta name="keywords" content="San Luis Potosí safety, is SLP safe, crime statistics Mexico, safe neighborhoods SLP, expat safety Mexico" />
        <meta property="og:title" content="Is San Luis Potosí Safe? Complete Safety Guide" />
        <meta property="og:description" content="Comprehensive safety analysis with verified data, local perception, and practical tips for living in SLP." />
        {/* Canonical is emitted globally (locale-aware) by HreflangAlternates in _app.tsx.
            A second hardcoded EN canonical here conflicted with it on /es|/de|/ja and
            broke the hreflang cluster. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Is San Luis Potosí Safe? Complete Safety Guide',
              description: 'Data-driven safety analysis of San Luis Potosí with crime statistics, neighborhood ratings, expat experiences, and practical tips.',
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
              mainEntityOfPage: 'https://www.sanluisway.com/resources/safety-guide',
              about: { '@type': 'Place', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' },
            }),
          }}
        />
        {/* FAQPage JSON-LD — mirrors the visible Q&A list below so Google can
            surface the answers as rich results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.sanluisway.com/resources/safety-guide#faq',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden py-16">
          <Image
            src="/images/cultural/san-luis-potosi-cathedral.jpg"
            alt="San Luis Potosí cathedral"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/85 via-slate-900/80 to-slate-800/85" />
          <div className="relative z-10 container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 rounded-full">Verified Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Is San Luis Potosí Safe?
            </h1>
            <LastUpdated date="2026-10-27" className="text-gray-100 mb-4" />
            <p className="text-xl text-gray-100 mb-6">
              A data-driven analysis with crime statistics, local perception surveys, and real expat experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                Level 2: Exercise Caution
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                Low Reported Homicide Rate
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Perceived Insecurity 61% (Sep 2026)
              </span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-white border-b py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">✅</span> The Short Answer
              </h2>
              <p className="text-emerald-800 leading-relaxed">
                <strong>San Luis Potosí is moderately safe</strong>. México Evalúa ranked it among the states with the lowest homicide rates in the
                first half of 2026, and Numbeo users rate it safer than Mexico City and Guadalajara. The US State Department classifies it as Level 2 (Exercise Increased Caution)
                with <strong>no specific restrictions</strong> for US government employees. Official figures show a sharp drop in homicides in 2026, though one NGO has questioned how some cases are classified.
                Perceived insecurity (61% in September 2026) is slightly above the national urban average. Take standard urban precautions and you&apos;ll likely have no issues.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <nav className="sticky top-24 bg-white rounded-xl shadow-lg p-4">
                <h3 className="font-bold text-gray-900 mb-3">Contents</h3>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === section.id
                            ? 'bg-emerald-100 text-emerald-800 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Overview */}
              <section id="overview" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How safe is San Luis Potosí overall?</h2>

                <div className="prose prose-lg max-w-none">
                  <p>
                    San Luis Potosí sits in Mexico&apos;s industrial heartland, home to major automotive plants (BMW, GM)
                    and a growing expat community. Understanding safety here requires looking at multiple data sources:
                    official statistics, perception surveys, and real experiences from people living in the city.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">US State Department Classification</h3>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
                    <p className="text-amber-900">
                      <strong>Level 2: Exercise Increased Caution</strong><br />
                      San Luis Potosí is in the same category as Querétaro, Aguascalientes, and Puebla. The advisory cites crime,
                      kidnapping and terrorism risk for the state, and lists <strong>no specific restrictions</strong> on travel
                      for US government employees there.
                    </p>
                    <p className="text-sm text-amber-700 mt-2">
                      Source: <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html" target="_blank" rel="noopener noreferrer" className="underline">US State Department Mexico Travel Advisory</a>
                    </p>
                  </div>

                  <p>
                    For context: Only Yucatán and Campeche are Level 1 (Normal Precautions).
                    Six states are Level 4 (Do Not Travel): Colima, Guerrero, Michoacán, Sinaloa, Tamaulipas, and Zacatecas.
                    Jalisco and Guanajuato are Level 3. SLP sits in the Level 2 &quot;exercise increased caution&quot; group with most central states.
                  </p>
                </div>
              </section>

              {/* Statistics */}
              <section id="statistics" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What do the crime statistics actually show?</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-emerald-600 mb-2">52.0</p>
                    <p className="text-gray-600 text-sm">Crime Index (Numbeo)</p>
                    <p className="text-xs text-gray-500 mt-1">Lower is better • Similar to New York (50.7)</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">48.0</p>
                    <p className="text-gray-600 text-sm">Safety Index (Numbeo)</p>
                    <p className="text-xs text-gray-500 mt-1">Higher is better</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-green-600 mb-2">61%</p>
                    <p className="text-gray-600 text-sm">Feel Unsafe in the City (ENSU)</p>
                    <p className="text-xs text-gray-500 mt-1">Sep 2026, down from 70.9% in Sep 2025</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-purple-600 mb-2">0.9</p>
                    <p className="text-gray-600 text-sm">Homicides per 100k, H1 2026</p>
                    <p className="text-xs text-gray-500 mt-1">México Evalúa (national: 6.7)</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Comparison with Mexico City</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 border">Metric</th>
                        <th className="p-3 border">San Luis Potosí</th>
                        <th className="p-3 border">Mexico City</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border">Crime Index</td>
                        <td className="p-3 border text-emerald-600 font-semibold">52.0</td>
                        <td className="p-3 border text-red-600">66.1</td>
                      </tr>
                      <tr>
                        <td className="p-3 border">Safety Index</td>
                        <td className="p-3 border text-emerald-600 font-semibold">48.0</td>
                        <td className="p-3 border text-red-600">33.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Source: <a href="https://www.numbeo.com/crime/compare_cities.jsp?country1=Mexico&city1=San+Luis+Potosi&country2=Mexico&city2=Mexico+City" target="_blank" rel="noopener noreferrer" className="underline">Numbeo Crime Comparison</a>
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Day vs. Night Safety (Numbeo user ratings)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">☀️</span>
                      <div>
                        <p className="font-bold text-emerald-900">Daytime</p>
                        <p className="text-emerald-700">Walking alone: 74/100</p>
                      </div>
                    </div>
                    <div className="w-full bg-emerald-200 rounded-full h-3">
                      <div className="bg-emerald-500 h-3 rounded-full" style={{width: '74%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🌙</span>
                      <div>
                        <p className="font-bold text-slate-900">Nighttime</p>
                        <p className="text-slate-700">Walking alone: 39/100</p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-3">
                      <div className="bg-slate-600 h-3 rounded-full" style={{width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Perception */}
              <section id="perception" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How do residents perceive safety in San Luis Potosí?</h2>

                <p className="text-gray-700 mb-6">
                  The INEGI (Mexico&apos;s national statistics institute) conducts quarterly surveys on perceived safety.
                  Here&apos;s what residents of San Luis Potosí report:
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-blue-900 mb-4">INEGI ENSU Survey Results (Q3 2026)</h3>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span><strong>61% perception of insecurity</strong> (September 2026), down from 70.9% a year earlier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span><strong>Change vs. June 2026 (62.5%)</strong> was small and not statistically significant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span><strong>Homicide rate 0.9 per 100k</strong> in H1 2026, second-lowest nationally (México Evalúa)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">!</span>
                      <span>Still slightly above the 91-city average (58.1% in September 2026)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-blue-600 mt-4">
                    Source: <a href="https://www.inegi.org.mx/programas/ensu/" target="_blank" rel="noopener noreferrer" className="underline">INEGI ENSU Q3 2026</a>
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">Trend: Improving, With Caveats</h3>
                <p className="text-gray-700">
                  Perceived insecurity fell from 70.9% in September 2025 to 61% in September 2026.
                  Official SESNSP data show intentional homicides down sharply in 2026, but the NGO Causa en Común reported that the state
                  logged far more &quot;other crimes against life&quot; than intentional homicides in the first half of 2026 and questioned whether
                  cases are being reclassified. Homicide figures also say nothing about theft and other common crimes, so treat any single number with caution.
                </p>
              </section>

              {/* Neighborhoods */}
              <section id="neighborhoods" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Which neighborhoods are safest for expats in San Luis Potosí?</h2>

                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-emerald-900">Lomas del Tecnológico</h3>
                    <p className="text-emerald-800 text-sm mt-1">
                      Most popular expat area. Modern, walkable, excellent restaurants and cafes. Well-patrolled.
                    </p>
                    <p className="text-emerald-600 text-xs mt-2">Safety: ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-emerald-900">Colonia Polanco</h3>
                    <p className="text-emerald-800 text-sm mt-1">
                      Quiet, residential, close to supermarkets. Preferred by long-term expats. Easy bus access to Centro.
                    </p>
                    <p className="text-emerald-600 text-xs mt-2">Safety: ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-blue-900">Colonia Del Valle</h3>
                    <p className="text-blue-800 text-sm mt-1">
                      Family-oriented with parks and schools. Strong sense of community. Safe for children.
                    </p>
                    <p className="text-blue-600 text-xs mt-2">Safety: ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-blue-900">La Loma Golf / Club Campestre</h3>
                    <p className="text-blue-800 text-sm mt-1">
                      High-end gated communities. Maximum security. Premium pricing ($2,000+ USD/month).
                    </p>
                    <p className="text-blue-600 text-xs mt-2">Safety: ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-purple-900">Centro Histórico</h3>
                    <p className="text-purple-800 text-sm mt-1">
                      Well-patrolled tourist area. Safe during day and early evening. Vibrant plaza life.
                    </p>
                    <p className="text-purple-600 text-xs mt-2">Safety: ⭐⭐⭐⭐ (day) ⭐⭐⭐ (late night)</p>
                  </div>
                </div>

                <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl">
                  <h3 className="font-bold text-red-900">Areas Where Locals Advise Extra Caution at Night</h3>
                  <ul className="text-red-800 text-sm mt-2 space-y-1">
                    <li>• <strong>Colonia Satélite</strong> and <strong>Colonia Progreso</strong> — often mentioned by residents; avoid walking there at night</li>
                    <li>• <strong>Delegación La Pila</strong> — outlying south end of the metro area</li>
                    <li>• Parts of <strong>Soledad de Graciano Sánchez</strong> (separate municipality to the northeast)</li>
                    <li>• Peripheral industrial zones and unlit areas after dark</li>
                  </ul>
                  <p className="text-red-700 text-xs mt-2">No official crime data is published by colonia; these reflect local perception, not rankings.</p>
                </div>
              </section>

              {/* Solo Female Travelers */}
              <section id="female-travelers" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Is San Luis Potosí safe for solo female travelers?</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Yes, with standard urban precautions.</strong> Solo female travelers and expats living in SLP report
                  feeling safe walking alone in Lomas, Centro Histórico, and commercial areas during daytime. Many women live
                  alone in the city without issues.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <h3 className="font-bold text-emerald-900 mb-2">Safe behaviors</h3>
                    <ul className="text-emerald-800 text-sm space-y-1">
                      <li>✓ Walking in Lomas, Centro, Polanco during the day</li>
                      <li>✓ Using Uber/DiDi at night (always share trip)</li>
                      <li>✓ Dining out solo in restaurant zones</li>
                      <li>✓ Jogging in Parque Tangamanga mornings</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h3 className="font-bold text-amber-900 mb-2">Exercise caution</h3>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>! Walking alone after 11 PM in any area</li>
                      <li>! Using unmarked taxis</li>
                      <li>! Sharing your home address with strangers</li>
                      <li>! Catcalling exists but physical harassment is rare</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  SLP has a growing community of solo female expats, many working remotely or employed at the automotive plants.
                  The city is more conservative than Oaxaca or CDMX, which some women find makes it feel <em>more</em> respectful.
                </p>
              </section>

              {/* American Tourists */}
              <section id="tourists" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Is San Luis Potosí safe for American tourists?</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Yes.</strong> The US State Department classifies SLP as <strong>Level 2 (Exercise Increased Caution)</strong> —
                  the same tier as Querétaro, Aguascalientes, Puebla and Mexico City. The advisory lists <strong>no specific travel restrictions</strong> for
                  US government employees in the state.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-left text-sm border-collapse">
                    <caption className="sr-only">US State Department safety levels for Mexican states popular with tourists</caption>
                    <thead>
                      <tr className="bg-gray-100">
                        <th scope="col" className="p-3 border">City/State</th>
                        <th scope="col" className="p-3 border">Level</th>
                        <th scope="col" className="p-3 border">Crime Index</th>
                        <th scope="col" className="p-3 border">Safety Index</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="p-3 border font-semibold">San Luis Potosí</th>
                        <td className="p-3 border text-emerald-700 font-semibold">Level 2</td>
                        <td className="p-3 border">52.0</td>
                        <td className="p-3 border text-emerald-700">48.0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <th scope="row" className="p-3 border font-semibold">Querétaro</th>
                        <td className="p-3 border">Level 2</td>
                        <td className="p-3 border">37.4</td>
                        <td className="p-3 border">62.6</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 border font-semibold">Mérida</th>
                        <td className="p-3 border">Level 1</td>
                        <td className="p-3 border">23.9</td>
                        <td className="p-3 border">76.1</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <th scope="row" className="p-3 border font-semibold">Guadalajara</th>
                        <td className="p-3 border text-amber-700">Level 3</td>
                        <td className="p-3 border">62.1</td>
                        <td className="p-3 border">37.9</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 border font-semibold">Mexico City</th>
                        <td className="p-3 border text-amber-700">Level 2</td>
                        <td className="p-3 border text-red-600">66.1</td>
                        <td className="p-3 border text-red-600">33.9</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <th scope="row" className="p-3 border font-semibold">Oaxaca</th>
                        <td className="p-3 border">Level 2</td>
                        <td className="p-3 border">39.8</td>
                        <td className="p-3 border">60.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500">
                  Source: <a href="https://www.numbeo.com/crime/country_result.jsp?country=Mexico" target="_blank" rel="noopener noreferrer" className="underline">Numbeo Crime Index (2026)</a> +{' '}
                  <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html" target="_blank" rel="noopener noreferrer" className="underline">US State Department</a>
                </p>
                <p className="text-gray-700 mt-4">
                  SLP scores better than Guadalajara and Mexico City on Numbeo&apos;s index, and worse than Mérida, Querétaro or Oaxaca.
                  Numbeo figures are crowd-sourced perceptions, not police data. In 2024, Travel Off Path named SLP one of the{' '}
                  <a href="https://www.traveloffpath.com/these-are-4-of-the-most-cultural-and-safe-cities-in-mexico/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-700">
                    4 most cultural and safe cities in Mexico
                  </a>.
                </p>
              </section>

              {/* Driving Safety */}
              <section id="driving" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Is it safe to drive through San Luis Potosí?</h2>
                <p className="text-gray-700 mb-4">
                  <strong>During the day on toll roads, yes.</strong> Within the city, driving is safe with standard urban caution.
                  The main risk is on <strong>inter-city highways at night</strong>.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mb-4">
                  <h3 className="font-bold text-red-900">Highway 57 North</h3>
                  <p className="text-red-800 text-sm mt-1">
                    Federal Highway 57 to Matehuala and Monterrey is a free (libre) four-lane highway with heavy truck traffic. A
                    San Luis–Matehuala toll road is under construction but is not yet a full alternative, so <strong>drive this
                    stretch in daylight</strong>, stop only at busy service stations, and avoid driving it at night.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <h3 className="font-bold text-emerald-900 mb-2">Safe</h3>
                    <ul className="text-emerald-800 text-sm space-y-1">
                      <li>✓ City driving during daytime</li>
                      <li>✓ Toll roads (cuotas) any time</li>
                      <li>✓ Highway to Querétaro (well-patrolled)</li>
                      <li>✓ Road to Huasteca Potosina (daylight)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <h3 className="font-bold text-red-900 mb-2">Avoid</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>✗ Highway 57 north after dark</li>
                      <li>✗ Any free highway at night alone</li>
                      <li>✗ Rural roads near Tamaulipas border</li>
                      <li>✗ Parking in unlit areas at night</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Expat Experience */}
              <section id="expat-experience" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What do expats report about living safely in SLP?</h2>

                <p className="text-gray-700 mb-6">
                  Real experiences from foreigners living in San Luis Potosí, gathered from expat forums and communities:
                </p>

                <div className="space-y-6">
                  <blockquote className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-gray-800 italic mb-3">
                      &quot;I felt safer than I&apos;ve felt in the neighborhood where I grew up in Corpus Christi, Texas.&quot;
                    </p>
                    <footer className="text-sm text-gray-600">— Expat living in Centro</footer>
                  </blockquote>

                  <blockquote className="bg-gray-50 rounded-xl p-6 border-l-4 border-emerald-500">
                    <p className="text-gray-800 italic mb-3">
                      &quot;As far as safety goes I have never had a problem here. I feel very safe although it is a big city
                      and does have crime. I don&apos;t let it affect my daily life just as I wouldn&apos;t in the States.&quot;
                    </p>
                    <footer className="text-sm text-gray-600">— American working in SLP for 5+ years</footer>
                  </blockquote>

                  <blockquote className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <p className="text-gray-800 italic mb-3">
                      &quot;I&apos;m a big tall white guy who looks nothing like a Mexican, and I&apos;ve had no problems
                      traveling anywhere in Mexico. The good people outnumber the bad by 1,000 to 1.&quot;
                    </p>
                    <footer className="text-sm text-gray-600">— Long-term resident (30+ years in Mexico)</footer>
                  </blockquote>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Sources: <a href="https://www.expatforum.com/threads/moving-to-san-luis-potosi.860898/" target="_blank" rel="noopener noreferrer" className="underline">Expat Forum</a>,
                  <a href="https://www.tripadvisor.com/ShowTopic-g153477-i1667-k7250047-o20-Safety_in_SLP-San_Luis_Potosi_Central_Mexico_and_Gulf_Coast.html" target="_blank" rel="noopener noreferrer" className="underline ml-1">TripAdvisor</a>
                </p>
              </section>

              {/* Safety Tips */}
              <section id="practical-tips" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What practical safety tips should I follow in SLP?</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-xl">🏙️</span> Daily Life
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Use Uber or DiDi instead of street taxis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Withdraw money from ATMs inside banks or malls
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Don&apos;t flash expensive jewelry or electronics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Keep car doors locked while driving
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-xl">🌙</span> At Night
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Stick to well-lit, populated areas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Avoid walking alone in unfamiliar neighborhoods
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Busy parts of Centro and Lomas are usually fine in the evening
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Use ride apps for late-night transportation
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-xl">🏠</span> Housing
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Consider gated communities (&quot;privadas&quot;)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Buildings with 24/7 security are common
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Get renter&apos;s insurance for valuables
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Don&apos;t leave valuables visible in parked cars
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-xl">🚗</span> Driving
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Avoid driving alone at night on highways
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Use toll roads (&quot;cuotas&quot;) over free roads
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Keep copies of documents, not originals
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        Get comprehensive car insurance
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Emergency Contacts */}
              <section id="emergency" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="font-bold text-red-900">Emergency (All Services)</p>
                    <p className="text-2xl font-mono text-red-700">911</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="font-bold text-blue-900">Police, Fire, Ambulance (Cruz Roja)</p>
                    <p className="text-xl font-mono text-blue-700">911</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="font-bold text-orange-900">Anonymous Crime Report</p>
                    <p className="text-xl font-mono text-orange-700">089</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="font-bold text-purple-900">Highway Assistance (Ángeles Verdes)</p>
                    <p className="text-xl font-mono text-purple-700">078</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="font-bold text-green-900">US Embassy (CDMX)</p>
                    <p className="text-xl font-mono text-green-700">55 5080 2000</p>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Tip:</strong> Save these numbers in your phone. For taxis, use Uber, DiDi or an official
                    taxi stand (sitio), or ask your hotel to call one.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group bg-gray-50 rounded-xl">
                      <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-gray-900">
                        {faq.q}
                        <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-4 pb-4 text-gray-700">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Sources */}
              <section className="bg-slate-100 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sources & References</h2>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>1. <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html" target="_blank" rel="noopener noreferrer" className="underline">US State Department Mexico Travel Advisory (May 2026 update)</a></li>
                  <li>2. <a href="https://www.inegi.org.mx/programas/ensu/" target="_blank" rel="noopener noreferrer" className="underline">INEGI ENSU Q3 2026 - Perception Survey</a></li>
                  <li>3. <a href="https://planoinformativo.com/1164063/tiene-slp-segunda-tasa-mas-baja-de-homicidios-segun-mexico-evalua" target="_blank" rel="noopener noreferrer" className="underline">Plano Informativo - México Evalúa homicide rates, H1 2026</a></li>
                  <li>4. <a href="https://www.diariodemexico.com/mi-nacion/detecta-causa-en-comun-anomalias-opacidad-en-registros-delitos-alto-impacto" target="_blank" rel="noopener noreferrer" className="underline">Diario de México - Causa en Común on crime-data anomalies (Aug 2026)</a></li>
                  <li>5. <a href="https://www.numbeo.com/crime/in/San-Luis-Potosi" target="_blank" rel="noopener noreferrer" className="underline">Numbeo Crime Index - San Luis Potosí 2026</a></li>
                  <li>6. <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on/" target="_blank" rel="noopener noreferrer" className="underline">Mexico Relocation Guide - Expat Experiences</a></li>
                </ul>
              </section>

              <section className="my-8">
                <AdUnit placement="mid-content" />
              </section>

              <CompactNewsletterSignup 
                source="inline_guide"
                title="Get Weekly Safety Updates"
                description="Stay informed about San Luis Potosí with our weekly newsletter for expats."
                className="my-12"
              />

              <GuideCTA relatedLinks={[
                { href: '/resources/neighborhoods-san-luis-potosi', label: 'Neighborhoods Guide: Where to Live', labelEs: 'Guía de Colonias: Dónde Vivir' },
                { href: '/resources/expat-guide', label: 'Expat Essentials: Moving to SLP', labelEs: 'Guía Expat: Mudarse a SLP' },
                { href: '/resources/health-guide', label: 'Healthcare Guide for Expats', labelEs: 'Guía de Salud para Expats' },
                { href: '/resources/living-guide', label: 'Complete Living Guide', labelEs: 'Guía Completa de Vida' },
              ]} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
