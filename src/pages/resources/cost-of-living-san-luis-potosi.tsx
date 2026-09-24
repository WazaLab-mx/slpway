import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LastUpdated from '@/components/common/LastUpdated';
import GuideCTA from '@/components/common/GuideCTA';
import AdUnit from '@/components/common/AdUnit';

export default function CostOfLivingGuidePage() {
  const [activeSection, setActiveSection] = useState('executive');

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
    { id: 'executive', name: 'Executive Summary' },
    { id: 'sourcing', name: 'How We Sourced' },
    { id: 'budgets', name: 'Budget Snapshots' },
    { id: 'rent', name: 'Rent by Neighborhood' },
    { id: 'utilities', name: 'Utilities' },
    { id: 'food', name: 'Food & Groceries' },
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'transportation', name: 'Transportation' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'schools', name: 'Schools' },
    { id: 'detailed-budgets', name: 'Detailed Budgets' },
    { id: 'comparisons', name: 'SLP vs Other Cities' },
    { id: 'faq', name: 'FAQ' },
  ];

  const seoFaqs = [
    { 
      q: 'How much do I need to live in San Luis Potosí in 2026?', 
      a: 'Mid-2026 editorial budgets: about MXN $14,000–16,000 for a frugal single, $25,000–29,000 comfortable single, $33,000–40,000 couple, and $60,000–70,000 family of four, converting at 17.54 MXN/USD (Banxico FIX, 2 Jul 2026).' 
    },
    { 
      q: 'How much is rent in Lomas vs Centro?', 
      a: 'Lomas apartments often land around MXN $17,000–22,000 for 1–2 beds (Neighborhoods Guide), while Centro studios/1-beds can start near $4,000–10,000 with renovated units much higher. Always check live listings.' 
    },
    { 
      q: 'Are utilities cheap?', 
      a: 'Subsidized CFE bills near ~MXN $300 are common, but the DAC high-consumption tariff can multiply costs if you run air conditioning hard. Fiber plans often start between roughly $349 and $599.' 
    },
    { 
      q: 'Is the bus really free?', 
      a: 'The MetroRed BRT is described as free through 2026 in our July cost-of-living reporting; regular city buses were MXN $12.50 with a possible future bump—confirm locally.' 
    },
  ];

  return (
    <>
      <Head>
        <title>Cost of Living in San Luis Potosí, Mexico (2026) | San Luis Way</title>
        <meta name="description" content="Cost of living in San Luis Potosí, Mexico (2026): neighborhood rents, CFE utilities, groceries, transport, healthcare & MXN/USD monthly sample budgets." />
        <meta name="keywords" content="San Luis Potosí cost of living, rent prices SLP, expat budget Mexico, digital nomad costs SLP, San Luis Potosí utilities, grocery prices Mexico" />
        <meta property="og:title" content="Cost of Living in San Luis Potosí, Mexico (2026)" />
        <meta property="og:description" content="Complete guide to monthly budgets, neighborhood rents, utilities, groceries, and healthcare costs in San Luis Potosí for expats and digital nomads." />
        <meta property="og:url" content="https://www.sanluisway.com/resources/cost-of-living-san-luis-potosi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Cost of Living in San Luis Potosí: 2026 Budgets for Expats and Digital Nomads',
              description: 'Complete cost of living guide for San Luis Potosí, Mexico (2026): monthly budgets by profile, neighborhood rents, utilities, groceries, transportation, healthcare, and sample line-item breakdowns.',
              datePublished: '2026-09-24',
              dateModified: '2026-09-24',
              author: {
                '@type': 'Person',
                '@id': 'https://www.sanluisway.com/about#editorial-team',
                name: 'San Luis Way Editorial',
                url: 'https://www.sanluisway.com/about',
                worksFor: { '@type': 'Organization', '@id': 'https://www.sanluisway.com/#organization' },
              },
              publisher: { '@type': 'Organization', '@id': 'https://www.sanluisway.com/#organization', name: 'San Luis Way' },
              mainEntityOfPage: 'https://www.sanluisway.com/resources/cost-of-living-san-luis-potosi',
              about: { '@type': 'Place', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: seoFaqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="relative overflow-hidden text-white">
          <Image
            src="/images/cost-of-living-slp-hero.jpg"
            alt="Cost of living in San Luis Potosí"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/85 via-emerald-700/80 to-teal-700/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-400 text-green-900">
                  ✓ VERIFIED 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
                  FACT-CHECKED
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Cost of Living in San Luis Potosí: 2026 Budgets for Expats and Digital Nomads
              </h1>
              <LastUpdated date="2026-09-24" className="text-green-100 mb-4" />
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Complete monthly budget breakdowns, neighborhood rents, utilities, groceries, and comparisons with other Mexican cities
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-40 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex overflow-x-auto py-3 gap-2 scrollbar-hide">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? 'bg-emerald-600 text-white'
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
          <section id="executive" className="mb-16 scroll-mt-24">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">💰</span> Executive Summary
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  San Luis Potosí remains one of Mexico&apos;s stronger <strong>value-for-money</strong> bases for expats and digital nomads in 2026—especially compared with Mexico City or Texas—but a stronger peso means your dollars buy fewer pesos than in early 2025.
                </p>
                <p className="text-lg mb-4">
                  Our mid-2026 reporting put realistic monthly spend at roughly:
                </p>
              </div>

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Profile</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">MXN / month</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">USD / month at 17.54</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Frugal single</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$14,000–16,000</td>
                      <td className="px-4 py-3 text-sm text-right">~$800–915</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Comfortable single / nomad</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$25,000–29,000</td>
                      <td className="px-4 py-3 text-sm text-right">~$1,425–1,655</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Couple</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$33,000–40,000</td>
                      <td className="px-4 py-3 text-sm text-right">~$1,880–2,280</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Family of four</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$60,000–70,000</td>
                      <td className="px-4 py-3 text-sm text-right">~$3,420–3,990</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-900 text-sm">
                  <strong>Exchange Rate Note:</strong> Those USD columns use the article&apos;s stated Banxico FIX reference of <strong>17.54 MXN per USD</strong> on 2 July 2026. For orientation on 23 Sep 2026, Banxico&apos;s tipcamb page displayed FIX-related prints around 17.50. Budget in pesos first; convert with the day&apos;s Banxico FIX when you wire money.
                </p>
              </div>
            </div>
          </section>

          <section id="sourcing" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Sourced These Numbers</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Primary reuse:</strong> San Luis Way cost-of-living article dated <strong>2 July 2026</strong>, which cites Banxico, Numbeo (updated 19 June 2026, ~21 contributors), July 2026 rental listing snapshots (Inmuebles24 / Trovit / iCasas / Lamudi), CFE/Interapas/telecom notes, IMSS Modalidad 33 tables, CONASAMI minimum wage, and comparison indices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Cross-check:</strong> Numbeo (San Luis Potosí) still showed a last update of 19 June 2026 when fetched 23 Sep 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Official anchors:</strong> INEGI UMA 2026 daily MXN $117.31 (from 1 Feb 2026); DOF/CONASAMI salario mínimo general 2026 MXN $315.04 per workday</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Neighborhood rent bands:</strong> <Link href="/resources/neighborhoods-san-luis-potosi" className="text-blue-600 underline">Ultimate Neighborhoods Guide</Link> (reviewed 7 Apr 2026) plus July 2026 listing commentary</span>
                </li>
              </ul>
              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-yellow-900 text-sm">
                  <strong>Disclaimer:</strong> Prices are observational. Negotiate leases, confirm CFE tariff brackets for your address, and treat Uber quotes as time-of-day samples.
                </p>
              </div>
            </div>
          </section>

          <section id="budgets" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Budget Snapshots</h2>
              <p className="text-gray-700 mb-6">
                The four profiles above are <strong>editorial stacks</strong> built from the line items in the July 2026 article—not Numbeo&apos;s single &quot;average.&quot; Wise/CityCost&apos;s independent ~<strong>USD $1,508</strong>/month single-person estimate (cited in that article for 2026) sits inside the &quot;comfortable single&quot; band.
              </p>
              <p className="text-gray-700">
                Use the detailed tables later in this pillar when you want every peso tied to a source.
              </p>
            </div>
          </section>

          <section id="rent" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Rent by Neighborhood</h2>
            <p className="text-gray-700 mb-6">
              Rent dominates most expat budgets. Combine the <Link href="/resources/neighborhoods-san-luis-potosi" className="text-blue-600 underline">Neighborhoods Guide</Link> ranges (Apr 2026 review) with July 2026 listing snapshots from the COL blog.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lomas del Tecnológico</h3>
                <p className="text-gray-700 mb-3">
                  Popular with expat families (ITESM nearby, Hospital Lomas, gated communities). <strong>Neighborhoods Guide:</strong> 1–2 bed apartments MXN $17,000–22,000; 3-bed houses $25,000–39,000; premium villas $45,000–70,000.
                </p>
                <p className="text-gray-700">
                  <strong>COL blog July listings:</strong> furnished 3BR about $22,500–23,000 (+~$2,200 maintenance), unfurnished from ~$13,000, luxury towers $30,000–34,000.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privadas del Pedregal</h3>
                <p className="text-gray-700">
                  Near Colegio Terranova (IB). <strong>Guide:</strong> 2-bed $22,000–30,000; 3-bed houses $28,000–38,000; furnished lofts $25,000–35,000.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Villa Magna & Los Lagos</h3>
                <p className="text-gray-700">
                  Car-dependent southside upper-middle area. <strong>Guide:</strong> 2–3 bed houses $22,000–38,000; larger homes $40,000–60,000; premium $55,000–80,000.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Centro Histórico</h3>
                <p className="text-gray-700 mb-3">
                  Walkable, variable stock. <strong>Guide:</strong> studio/1-bed $4,000–10,000; 2-bed $10,000–18,000; renovated colonial $18,000–28,000.
                </p>
                <p className="text-gray-700">
                  <strong>COL blog:</strong> renovated/exclusive units $22,000–25,000 (example 1BR facing Parque San Francisco at $25,000); Numbeo center 1BR average ~$11,800 (June 2026).
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tangamanga, Tequis/Carranza, Budget Colonias</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Tangamanga area (guide):</strong> 2-bed $12,000–18,000; 3-bed $18,000–28,000; family homes $25,000–40,000</p>
                  <p><strong>Carranza / Tequisquiapan (COL listings):</strong> furnished corridor examples from loft $10,000 (utilities included) to furnished 1BR by Jardín de Tequis $20,000, luxury towers ~$31,000; furnished premium often +$3,000–6,000</p>
                  <p><strong>Budget colonias (COL listings):</strong> remodeled basic 2BR ~$8,500–9,500; small units ~$4,900–6,500</p>
                  <p><strong>Near industrial zone / Villa de Reyes (guide):</strong> basic apartments $7,000–12,000; houses $12,000–20,000—most corporate expats still choose Lomas/Pedregal despite the commute</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-blue-900 text-sm">
                For contracts, deposits, and <em>aval</em> issues as a foreigner, read <Link href="/blog/renting-in-san-luis-potosi-foreigner-2026" className="underline">Renting in San Luis Potosí as a Foreigner (2026)</Link>. Home setup help: <Link href="/san-luis-potosi-home-services" className="underline">Home services</Link>.
              </p>
            </div>
          </section>

          <section id="utilities" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Utilities — Electricity (CFE), Water (INTERAPAS), Gas, Internet & Mobile</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Item</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Mid-2026 figure</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Source notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Electricity (typical subsidized home)</td>
                      <td className="px-4 py-3 text-sm font-medium">~MXN $300/month (~$17 USD at 17.54)</td>
                      <td className="px-4 py-3 text-sm">COL blog; warns of new 2026 nationwide fixed charge ~$20–70 and DAC high-use trap</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Water (INTERAPAS)</td>
                      <td className="px-4 py-3 text-sm">2026 increases cited 3.8–6.6%</td>
                      <td className="px-4 py-3 text-sm">COL blog citing El Sol de San Luis</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Combined basic utilities (crowd avg.)</td>
                      <td className="px-4 py-3 text-sm font-medium">~MXN $757</td>
                      <td className="px-4 py-3 text-sm">Numbeo (also visible 23 Sep 2026)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Fiber — Telmex</td>
                      <td className="px-4 py-3 text-sm font-medium">from MXN $349 (120 Mbps cited)</td>
                      <td className="px-4 py-3 text-sm">COL blog / provider plans</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Fiber — izzi</td>
                      <td className="px-4 py-3 text-sm font-medium">from MXN $379 after March 2026 hike</td>
                      <td className="px-4 py-3 text-sm">COL blog / El Financiero mention</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Fiber — Totalplay</td>
                      <td className="px-4 py-3 text-sm font-medium">from MXN $599 (150 Mbps cited)</td>
                      <td className="px-4 py-3 text-sm">COL blog</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Mobile — Telcel postpaid</td>
                      <td className="px-4 py-3 text-sm font-medium">from MXN $229–249</td>
                      <td className="px-4 py-3 text-sm">COL blog</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Mobile — AT&T prepaid example</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $200 ≈ 12 GB / 30 days</td>
                      <td className="px-4 py-3 text-sm">COL blog</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>Provider portals for accounts: <a href="https://www.cfe.mx" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">CFE</a>, <a href="https://www.interapas.mx" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">INTERAPAS</a> (also listed in the <Link href="/resources/expat-guide" className="text-blue-600 underline">Expat Guide utilities section</Link>).</p>
              </div>
            </div>
          </section>

          <section id="food" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Food and Groceries</h2>
              <p className="text-gray-700 mb-4">
                From the COL blog&apos;s mid-2026 stack (Numbeo staples + editorial basket):
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Street gorditas/tacos roughly <strong>MXN $15–25</strong> each (national street-food inflation commentary early 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Comida corrida / menú del día roughly <strong>MXN $80–150</strong> (zone-dependent estimate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Groceries: milk ~27.8/L, dozen eggs ~48.7, chicken ~183/kg, rice ~33/kg; weekly supermarket basket for two roughly <strong>MXN $800–1,200</strong> (editorial composition from those staples)</span>
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-900 text-sm">
                  Shop a mix of Walmart/Soriana/HEB-style stores, local markets, and specialty import aisles in Lomas if you need US brands (imports will raise the basket).
                </p>
              </div>
            </div>
          </section>

          <section id="restaurants" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Restaurants and Eating Out</h2>
              <p className="text-gray-700 mb-4">
                Numbeo (June 2026 / still labeled last update 19 June 2026): inexpensive restaurant meal ~<strong>MXN $250</strong>; mid-range dinner for two ~<strong>MXN $775</strong> (crowd range 600–1,500).
              </p>
              <p className="text-gray-700">
                For inspiration—not prices—see food posts like <Link href="/blog/best-tacos-san-luis-potosi" className="text-blue-600 underline">Best tacos in SLP</Link> and living/culture context in the <Link href="/resources/living-guide" className="text-blue-600 underline">Living Guide</Link>.
              </p>
            </div>
          </section>

          <section id="transportation" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Transportation</h2>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>MetroRed BRT:</strong> free through 2026 per COL blog confirmation note</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>City buses:</strong> MXN $12.50 (article notes a hike to 13.50 approved but &quot;not yet in force&quot; as of that writing—verify on arrival)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Uber/DiDi short rides:</strong> about MXN $45–65</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Gasoline:</strong> national ~MXN $23.70/L in the July article; Numbeo fetch showed gasoline ~MXN $25.93/L average—treat as a moving national figure</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Many Centro/Tequis nomads skip car ownership; Lomas/Villa Magna families usually budget a car + parking + insurance.
              </p>
              <p className="text-gray-700 mt-4">
                Apps and taxi numbers also appear in the <Link href="/resources/expat-guide#transportation" className="text-blue-600 underline">Expat Guide transportation section</Link>.
              </p>
            </div>
          </section>

          <section id="healthcare" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthcare and Insurance (Brief)</h2>
              <p className="text-gray-700 mb-4">
                Depth lives in the <Link href="/resources/health-guide" className="text-blue-600 underline">Health Guide</Link> and <Link href="/blog/healthcare-san-luis-potosi-expats-2026" className="text-blue-600 underline">Healthcare for Expats 2026</Link>. Budget-relevant figures reused from the COL / healthcare reporting:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Item</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Figure</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Private GP consult</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $500–1,200</td>
                      <td className="px-4 py-3 text-sm">COL blog + Health Guide</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Specialists</td>
                      <td className="px-4 py-3 text-sm font-medium">often MXN $800–1,000</td>
                      <td className="px-4 py-3 text-sm">COL blog</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Dental cleaning</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $500–800</td>
                      <td className="px-4 py-3 text-sm">COL blog</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Private major medical (GMM), ~age 40</td>
                      <td className="px-4 py-3 text-sm font-medium">roughly MXN $12,000–35,000/year</td>
                      <td className="px-4 py-3 text-sm">COL + healthcare blogs</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">IMSS Modalidad 33 (Mar 2026–Feb 2027 schedule)</td>
                      <td className="px-4 py-3 text-sm">$12,350 (30–39); $14,350 (40–49); $20,600 (60–69)</td>
                      <td className="px-4 py-3 text-sm">Healthcare blog</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-4 text-sm">
                Browse <Link href="/category/english-speaking-healthcare" className="text-blue-600 underline">English-speaking healthcare</Link> when language matters.
              </p>
            </div>
          </section>

          <section id="schools" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schools (Brief)</h2>
              <p className="text-gray-700 mb-4">
                From the <Link href="/resources/school-guide" className="text-blue-600 underline">School Guide</Link> cost tables (reviewed Apr 2026):
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>International/bilingual monthly tuition often <strong>MXN $8,000–18,000</strong> plus enrollment <strong>$25,000–45,000</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Premium private <strong>$5,000–10,000</strong>/mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Standard private <strong>$3,000–6,000</strong>/mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Terranova IB and other named schools list higher bands (e.g., examples <strong>$14,000–20,000</strong>/mo)</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Families should read the full guide and the <Link href="/resources/family-guide" className="text-blue-600 underline">Family Guide</Link> before locking a Lomas vs Pedregal lease.
              </p>
            </div>
          </section>

          <section id="detailed-budgets" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Monthly Budgets with Line-Item Sources</h2>
            <p className="text-gray-700 mb-6">
              Exchange rate for these worked examples: <strong>17.54 MXN/USD</strong> (Banxico FIX as cited for 2 July 2026 in the COL article). Round-trip conversion: divide MXN by 17.54.
            </p>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1) Frugal single / lean digital nomad — ~MXN $15,000 (~USD $855)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Line item</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">MXN</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Traceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Rent — budget colonia studio/1BR</td>
                        <td className="px-4 py-3 text-sm text-right font-medium">6,000</td>
                        <td className="px-4 py-3 text-sm">Midpoint of COL listing band ~4,900–6,500</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Electricity + water + gas share</td>
                        <td className="px-4 py-3 text-sm text-right">800</td>
                        <td className="px-4 py-3 text-sm">Near Numbeo basic utilities ~757 + small gas pad</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Internet</td>
                        <td className="px-4 py-3 text-sm text-right">349</td>
                        <td className="px-4 py-3 text-sm">Telmex starting plan cited</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Mobile</td>
                        <td className="px-4 py-3 text-sm text-right">200</td>
                        <td className="px-4 py-3 text-sm">AT&T prepaid example</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Groceries + street food</td>
                        <td className="px-4 py-3 text-sm text-right">4,500</td>
                        <td className="px-4 py-3 text-sm">Editorial; ~half of couple weekly baskets × 4 + street meals</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Transport (bus/MetroRed/occasional DiDi)</td>
                        <td className="px-4 py-3 text-sm text-right">600</td>
                        <td className="px-4 py-3 text-sm">MetroRed free; buses 12.50; few rideshares</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Healthcare buffer / pharmacy</td>
                        <td className="px-4 py-3 text-sm text-right">400</td>
                        <td className="px-4 py-3 text-sm">Out-of-pocket minor care</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Misc / laundry / household</td>
                        <td className="px-4 py-3 text-sm text-right">1,151</td>
                        <td className="px-4 py-3 text-sm">Plug to reach ~15,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-bold">Total</td>
                        <td className="px-4 py-3 text-sm text-right font-bold">~15,000</td>
                        <td className="px-4 py-3 text-sm">Matches frugal band 14–16k</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2) Comfortable single / typical nomad — ~MXN $27,000 (~USD $1,540)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Line item</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">MXN</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Traceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Rent — furnished 1BR Tequis/Centro</td>
                        <td className="px-4 py-3 text-sm text-right font-medium">13,000</td>
                        <td className="px-4 py-3 text-sm">Inside COL Tequis examples 10–20k; Numbeo center 1BR ~11.8k</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Utilities (avoiding DAC)</td>
                        <td className="px-4 py-3 text-sm text-right">900</td>
                        <td className="px-4 py-3 text-sm">Slightly above Numbeo basic</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Fiber internet</td>
                        <td className="px-4 py-3 text-sm text-right">599</td>
                        <td className="px-4 py-3 text-sm">Totalplay starting cite</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Mobile</td>
                        <td className="px-4 py-3 text-sm text-right">249</td>
                        <td className="px-4 py-3 text-sm">Telcel postpaid cite</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Groceries</td>
                        <td className="px-4 py-3 text-sm text-right">4,000</td>
                        <td className="px-4 py-3 text-sm">Single cook-at-home</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Restaurants (4–6 mid meals / some dinners)</td>
                        <td className="px-4 py-3 text-sm text-right">3,500</td>
                        <td className="px-4 py-3 text-sm">Uses ~250 casual + share of 775 dinners</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Uber/DiDi</td>
                        <td className="px-4 py-3 text-sm text-right">1,200</td>
                        <td className="px-4 py-3 text-sm">~20 short rides × ~60</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Private insurance accrual (GMM annual mid ÷ 12)</td>
                        <td className="px-4 py-3 text-sm text-right">2,000</td>
                        <td className="px-4 py-3 text-sm">Mid of 12–35k/year band ÷ 12</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Gym / misc</td>
                        <td className="px-4 py-3 text-sm text-right">1,552</td>
                        <td className="px-4 py-3 text-sm">Residual to reach ~27k</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-bold">Total</td>
                        <td className="px-4 py-3 text-sm text-right font-bold">~27,000</td>
                        <td className="px-4 py-3 text-sm">Inside 25–29k comfortable band</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3) Couple — ~MXN $36,500 (~USD $2,081)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Line item</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">MXN</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Traceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Rent — 2BR Tequis/Lomas mid</td>
                        <td className="px-4 py-3 text-sm text-right font-medium">18,000</td>
                        <td className="px-4 py-3 text-sm">Between Tequis 13k examples and Lomas apt bands</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Utilities</td>
                        <td className="px-4 py-3 text-sm text-right">1,200</td>
                        <td className="px-4 py-3 text-sm">Two-person usage</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Internet + two mobiles</td>
                        <td className="px-4 py-3 text-sm text-right">1,049</td>
                        <td className="px-4 py-3 text-sm">Fiber 599 + two prepaid/postpaid ~450</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Groceries</td>
                        <td className="px-4 py-3 text-sm text-right">7,000</td>
                        <td className="px-4 py-3 text-sm">Weekly 800–1,200 × ~4–5 plus household</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Dining out</td>
                        <td className="px-4 py-3 text-sm text-right">4,000</td>
                        <td className="px-4 py-3 text-sm">Mix of comida corrida and Numbeo dinners</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Transport</td>
                        <td className="px-4 py-3 text-sm text-right">2,000</td>
                        <td className="px-4 py-3 text-sm">More rideshares; occasional highway bus</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Health insurance accrual (two adults)</td>
                        <td className="px-4 py-3 text-sm text-right">3,500</td>
                        <td className="px-4 py-3 text-sm">Rough 2 × mid GMM monthly accrual</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Household / streaming / misc</td>
                        <td className="px-4 py-3 text-sm text-right">1,301</td>
                        <td className="px-4 py-3 text-sm">Residual</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-bold">Total</td>
                        <td className="px-4 py-3 text-sm text-right font-bold">~36,500</td>
                        <td className="px-4 py-3 text-sm">Inside couple 33–40k band</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4) Family of four (illustration) — ~MXN $65,000 (~USD $3,706)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Line item</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">MXN</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Traceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Rent — 3BR Lomas/Pedregal</td>
                        <td className="px-4 py-3 text-sm text-right font-medium">28,000</td>
                        <td className="px-4 py-3 text-sm">Inside guide 25–39k / Pedregal 28–38k</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Maintenance / HOA</td>
                        <td className="px-4 py-3 text-sm text-right">2,200</td>
                        <td className="px-4 py-3 text-sm">COL Lomas listing note</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Utilities (higher A/C risk)</td>
                        <td className="px-4 py-3 text-sm text-right">2,500</td>
                        <td className="px-4 py-3 text-sm">Flag DAC risk if careless</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Internet + mobiles</td>
                        <td className="px-4 py-3 text-sm text-right">1,200</td>
                        <td className="px-4 py-3 text-sm">Fiber + family lines</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Groceries</td>
                        <td className="px-4 py-3 text-sm text-right">12,000</td>
                        <td className="px-4 py-3 text-sm">Scaled basket</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Dining / activities</td>
                        <td className="px-4 py-3 text-sm text-right">4,000</td>
                        <td className="px-4 py-3 text-sm">Family weekends</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Car fuel + parking + light maintenance</td>
                        <td className="px-4 py-3 text-sm text-right">4,500</td>
                        <td className="px-4 py-3 text-sm">Gasoline ~23.7–26/L; parking; maintenance</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Schooling (one child private mid)</td>
                        <td className="px-4 py-3 text-sm text-right">8,000</td>
                        <td className="px-4 py-3 text-sm">School guide standard/intl lower band</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Health insurance / IMSS hybrid</td>
                        <td className="px-4 py-3 text-sm text-right">4,000</td>
                        <td className="px-4 py-3 text-sm">GMM and/or IMSS annual ÷ 12</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Misc</td>
                        <td className="px-4 py-3 text-sm text-right">1,600</td>
                        <td className="px-4 py-3 text-sm">Residual to ~65k</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-bold">Total</td>
                        <td className="px-4 py-3 text-sm text-right font-bold">~65,000</td>
                        <td className="px-4 py-3 text-sm">Inside family 60–70k band</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Families with Terranova-level tuition ($14k–20k/mo examples in the School Guide) will <strong>exceed</strong> this illustration quickly—tuition is the swing factor.
                </p>
              </div>
            </div>
          </section>

          <section id="comparisons" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SLP vs Other Cities</h2>
              <p className="text-gray-700 mb-4">
                From the COL article&apos;s crowdsourced indices (directional only):
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Mexico City <strong>~+24%</strong> overall with rent vs SLP (Numbeo, Jul 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Querétaro <strong>~+8%</strong> (Expatistan, May 2026)—see also <Link href="/blog/san-luis-potosi-vs-queretaro-expats-2026" className="text-blue-600 underline">SLP vs Querétaro for expats</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Mérida <strong>~+2.5%</strong> with rent; rents there ~<strong>+10%</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>San Antonio, TX <strong>~+66%</strong> with rent; rents ~<strong>+138%</strong></span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Context from the same article: Mexican inflation about <strong>3.94%</strong> (INEGI, May 2026 cite) and 2026 minimum wage <strong>MXN $315</strong>/day class (+13%)—local costs drift up, they do not spike like a currency crisis narrative.
              </p>
            </div>
          </section>

          <section id="faq" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">❓ Frequently Asked Questions</h2>
                <p className="text-green-100 mt-1">Common questions about cost of living in SLP</p>
              </div>
              <div className="divide-y">
                {seoFaqs.map((faq, idx) => (
                  <details key={idx} className="group p-6">
                    <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.a}</p>
                  </details>
                ))}
                
                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    What exchange rate should I use?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Prefer Banxico&apos;s FIX for the day you convert. Our July 2026 article used 17.54; late September 2026 tipcamb prints clustered near ~17.50.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    How does SLP compare to Querétaro or CDMX?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Crowdsourced indices in mid-2026 pointed to Querétaro roughly 8% higher and Mexico City about 24% higher overall with rent—useful directionally, not as a quote.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    What health costs should I budget?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Private GP visits often MXN $500–1,200; major-medical premiums vary widely (about $12,000–35,000/year at age ~40 in our reporting). IMSS voluntary quotas are annual and age-banded—see the Health Guide.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    How expensive are international schools?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    School Guide bands for international/bilingual programs often run MXN $8,000–18,000 per month in tuition plus large enrollment fees; top IB examples can be higher.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    Can a digital nomad live on USD $1,000/month?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    At 17.54 FX, USD $1,000 is about MXN $17,540—inside/above the frugal band if rent stays low and you cook. It is tight for Tequis furnished stock and private insurance.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    Where should I read next?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Neighborhoods Guide, Renting-as-a-foreigner blog, Health Guide, Safety Guide, and the weekly newsletter for updates.
                  </p>
                </details>
              </div>
            </div>
          </section>

          <section className="my-8">
            <AdUnit placement="mid-content" />
          </section>

          <GuideCTA relatedLinks={[
            { href: '/resources/neighborhoods-san-luis-potosi', label: 'Neighborhoods Guide', labelEs: 'Guía de Vecindarios' },
            { href: '/blog/renting-in-san-luis-potosi-foreigner-2026', label: 'Renting Guide', labelEs: 'Guía de Renta' },
            { href: '/resources/health-guide', label: 'Health Guide', labelEs: 'Guía de Salud' },
            { href: '/resources/expat-guide', label: 'Expat Guide', labelEs: 'Guía Expat' },
          ]} />
        </div>
      </div>
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
