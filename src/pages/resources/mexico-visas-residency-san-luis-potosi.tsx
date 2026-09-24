import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LastUpdated from '@/components/common/LastUpdated';
import GuideCTA from '@/components/common/GuideCTA';
import AdUnit from '@/components/common/AdUnit';

export default function VisasResidencyGuidePage() {
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
    { id: 'disclaimer', name: 'Disclaimer' },
    { id: 'status-options', name: 'Status Options' },
    { id: 'two-stage', name: 'Two-Stage Process' },
    { id: 'solvency', name: 'Economic Solvency' },
    { id: 'work', name: 'Work-Based' },
    { id: 'step-by-step', name: 'Step-by-Step' },
    { id: 'inm-office', name: 'INM Office SLP' },
    { id: 'fees', name: '2026 Fees' },
    { id: 'renewal', name: 'Renewal & Changes' },
    { id: 'after-card', name: 'After the Card' },
    { id: 'mistakes', name: 'Common Mistakes' },
    { id: 'faq', name: 'FAQ' },
  ];

  const seoFaqs = [
    { 
      q: 'Do I need a visa to visit San Luis Potosí as a US or Canadian tourist?', 
      a: 'Many nationalities, including US and Canadian citizens in ordinary visitor categories, can enter without a prior visa and receive an FMM/electronic authorization for up to 180 days at the officer\'s discretion. Confirm your nationality on SRE/INM guidance before travel.' 
    },
    { 
      q: 'What is the difference between the visa in my passport and the residence card?', 
      a: 'The consular visa authorizes you to travel to Mexico to complete immigration processing. The INM residence card, obtained by canje within 30 days of entry, is the document that proves your resident status while you live in Mexico.' 
    },
    { 
      q: 'How much income or savings do I need for temporary residency in 2026?', 
      a: 'Federally, temporary residency solvency is 11,460 × UMA in average balances over 12 months or 680 × UMA in monthly income over 6 months. With the 2026 daily UMA of MXN $117.31, that is about MXN $1.34 million or about MXN $79,771 per month—but consulates publish local-currency conversions that differ.' 
    },
    { 
      q: 'Can I apply for permanent residency as a retiree without being a temporary resident first?', 
      a: 'Yes, pensioner/retiree pathways exist at many consulates if you meet the higher thresholds (45,850 × UMA or 1,140 × UMA monthly pension federally). You must prove retirement/pension status as each post requires.' 
    },
  ];

  return (
    <>
      <Head>
        <title>Mexico Visas & Residency for SLP Expats (2026 Guide) | San Luis Way</title>
        <meta name="description" content="Mexico temporary & permanent residency from SLP: FMM, 2026 solvency amounts, INM canje in 30 days, fees, CURP/RFC, and mistakes to avoid. Verify locally." />
        <meta name="keywords" content="Mexico temporary resident visa, San Luis Potosí immigration, Mexico permanent residency, INM San Luis Potosí, Mexico visa requirements 2026, temporary to permanent Mexico, CURP RFC Mexico" />
        <meta property="og:title" content="Mexico Visas & Residency for SLP Expats (2026 Guide)" />
        <meta property="og:description" content="Complete guide to Mexican immigration from San Luis Potosí. 2026 solvency requirements, INM process, fees, and step-by-step guidance." />
        <meta property="og:url" content="https://www.sanluisway.com/resources/mexico-visas-residency-san-luis-potosi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Mexico Visas and Residency for Living in San Luis Potosí (2026)',
              description: 'Complete guide to Mexican temporary and permanent residency: FMM visitor permits, 2026 economic solvency requirements, INM canje process, fees, and post-card steps including CURP and RFC.',
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
              mainEntityOfPage: 'https://www.sanluisway.com/resources/mexico-visas-residency-san-luis-potosi',
              about: { '@type': 'Place', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#executive', '#faq']
              },
              citation: [
                { '@type': 'CreativeWork', name: 'INM — Official San Luis Potosí Office', url: 'https://www.inm.gob.mx/gobmx/word/index.php/san-luis-potosi/' },
                { '@type': 'CreativeWork', name: 'DOF — Lineamientos para trámites migratorios (25 Jul 2025)' },
                { '@type': 'CreativeWork', name: 'INEGI — Valor de la UMA 2026' },
                { '@type': 'CreativeWork', name: 'Mexperience — Mexico Residency 2026', url: 'https://www.mexperience.com/mexico-residency-in-2026-tighter-criteria-higher-fees/' }
              ]
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanluisway.com' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.sanluisway.com/resources' },
                { '@type': 'ListItem', position: 3, name: 'Mexico Visas & Residency Guide', item: 'https://www.sanluisway.com/resources/mexico-visas-residency-san-luis-potosi' }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Obtain Mexican Residency: Consulate to INM Canje Process',
              description: 'Step-by-step guide to obtaining Mexican temporary or permanent residency through the two-stage process: consular visa application followed by INM card exchange.',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Book MiConsulado Appointment',
                  text: 'Book at citas.sre.gob.mx for the Visas department at the Mexican consulate that serves your residence.',
                  url: 'https://citas.sre.gob.mx'
                },
                {
                  '@type': 'HowToStep',
                  name: 'Attend Consular Interview',
                  text: 'Attend interview with required documents (passport, bank statements, photos, etc.). If approved, you receive a visa foil in your passport—often single-entry with limited validity.',
                  itemListElement: [
                    { '@type': 'HowToDirection', text: 'Prepare document pack: passport, photos, bank statements, apostilles/translations' },
                    { '@type': 'HowToDirection', text: 'Pay consular fee (commonly $56 USD at US posts—non-refundable)' },
                    { '@type': 'HowToDirection', text: 'Attend interview and biometrics' }
                  ]
                },
                {
                  '@type': 'HowToStep',
                  name: 'Enter Mexico',
                  text: 'Enter Mexico with your visa foil and keep your entry record/FMM as instructed.',
                  url: 'https://www.sanluisway.com/blog/san-luis-potosi-airport-guide'
                },
                {
                  '@type': 'HowToStep',
                  name: 'File for Canje Within 30 Days',
                  text: 'Within 30 calendar days of entering Mexico, file for expedición de documento migratorio por canje at the INM office that corresponds to your address (for SLP residents: Calle Muñoz No. 362).',
                  url: 'https://www.inm.gob.mx/gobmx/word/index.php/san-luis-potosi/'
                },
                {
                  '@type': 'HowToStep',
                  name: 'Pay Derechos and Receive Card',
                  text: 'Pay the applicable derechos (card fees) by bank card or at bank window, provide biometrics/photo as required, and receive your residence card. The visa foil is NOT the residence card—missing the 30-day window is one of the most expensive beginner mistakes.',
                  itemListElement: [
                    { '@type': 'HowToDirection', text: 'Pay INM derechos: MXN $11,141 for 1-year temporary resident, $13,579 for permanent' },
                    { '@type': 'HowToDirection', text: 'Provide biometrics and photo' },
                    { '@type': 'HowToDirection', text: 'Collect residence card' }
                  ]
                }
              ],
              totalTime: 'P30D',
              estimatedCost: {
                '@type': 'MonetaryAmount',
                currency: 'USD',
                value: '56'
              }
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
            src="/images/mexico-visas-residency-hero.jpg"
            alt="Mexican immigration and visa services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/85 via-blue-700/80 to-indigo-700/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-400 text-blue-900">
                  ✓ VERIFIED 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
                  OFFICIAL SOURCES
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Mexico Visas and Residency for Living in San Luis Potosí (2026)
              </h1>
              <LastUpdated date="2026-09-24" className="text-blue-100 mb-4" />
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Complete guide to Mexican immigration: temporary resident, permanent resident, FMM visitor permits, and the INM canje process
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
                      ? 'bg-blue-600 text-white'
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">📋</span> Executive Summary
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  If you plan to live in San Luis Potosí for more than a short visit, Mexico&apos;s immigration path is usually a <strong>two-stage process</strong>: you first obtain a residence visa at a <strong>Mexican consulate outside Mexico</strong>, then—within <strong>30 calendar days of entering Mexico</strong>—you exchange that visa for a residence card at the <strong>Instituto Nacional de Migración (INM)</strong>.
                </p>
                <p className="text-lg mb-4">
                  Most digital nomads, remote workers, and retirees who are not hired by a Mexican employer use <strong>temporary resident</strong> status based on <strong>economic solvency</strong> (income or savings). Retirees who meet a higher bar may apply for <strong>permanent resident</strong> status as pensioners. Family members of Mexican citizens or of foreign residents often use <strong>unidad familiar</strong> (family unity). There is <strong>no separate &quot;digital nomad visa&quot;</strong>—the temporary resident category is what people typically mean.
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Topic</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Verified figure / rule</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Source type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Consular visa fee (US examples)</td>
                      <td className="px-4 py-3 text-sm font-medium">$56 USD non-refundable</td>
                      <td className="px-4 py-3 text-sm">Consulate PDFs 2026</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Temporary resident (federal)</td>
                      <td className="px-4 py-3 text-sm">11,460 × UMA avg. balance (12 mo) or 680 × UMA/month income (6 mo)</td>
                      <td className="px-4 py-3 text-sm">DOF Lineamientos 25 Jul 2025</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Permanent (pensioners)</td>
                      <td className="px-4 py-3 text-sm">45,850 × UMA (12 mo) or 1,140 × UMA/month pension (6 mo)</td>
                      <td className="px-4 py-3 text-sm">DOF Lineamientos 25 Jul 2025</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">UMA daily 2026</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $117.31</td>
                      <td className="px-4 py-3 text-sm">INEGI (from 1 Feb 2026)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">INM card fee (temp 1 year)</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $11,141</td>
                      <td className="px-4 py-3 text-sm">INM 2026 derechos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">INM card fee (permanent)</td>
                      <td className="px-4 py-3 text-sm font-medium">MXN $13,579</td>
                      <td className="px-4 py-3 text-sm">INM 2026 derechos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Canje deadline</td>
                      <td className="px-4 py-3 text-sm font-medium">30 calendar days after entry</td>
                      <td className="px-4 py-3 text-sm">INM practice</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="disclaimer" className="mb-16 scroll-mt-24">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Important Disclaimer</h2>
              <div className="text-yellow-900 space-y-2">
                <p>
                  <strong>This is not legal advice.</strong> Mexican immigration rules, lineamientos, consular document lists, and fee tables change. Each Mexican embassy or consulate applies the federal framework with <strong>its own exchange-rate conversions, document formats, and interview practices</strong>. Always confirm requirements on <strong>your</strong> consulate&apos;s page and on <a href="https://www.gob.mx/inm" className="underline hover:text-yellow-700" target="_blank" rel="noopener noreferrer">gob.mx/inm</a> shortly before you book MiConsulado.
                </p>
              </div>
            </div>
          </section>

          <section id="status-options" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Status Options at a Glance</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visitor / FMM</h3>
                <p className="text-gray-700 mb-4">
                  Citizens of many countries (including the United States and Canada for ordinary tourism/business visits) can enter Mexico without a prior visa and receive a <strong>Forma Migratoria Múltiple (FMM)</strong> or electronic equivalent authorizing a stay of up to <strong>180 days</strong>, subject to the immigration officer&apos;s decision at the port of entry. The FMM is for <strong>temporary visits</strong>, not for establishing residence or working in Mexico.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Remote work for a foreign employer while on visitor status is a gray area. Mexico&apos;s legal framework still distinguishes visitor activities from residence. When you later enter with a residence visa sticker, you are on a different track: the canje process, not an FMM extension.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Temporary Resident</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Residente temporal</strong> is the workhorse status for people relocating to San Luis Potosí for one to four years. Cards are typically issued for <strong>1–4 years</strong> depending on the authorization and the derechos you pay. After holding temporary residency continuously, many people become eligible to change to permanent residency (commonly after four years, though specific requirements vary by ground—confirm with INM for your case).
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>Common grounds:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li><strong>Economic solvency</strong> (income or savings)—most remote workers and self-funded movers</li>
                    <li><strong>Family unity</strong> with a Mexican citizen or with a temporary/permanent resident</li>
                    <li><strong>Job offer</strong> from a Mexican employer with correct INM registration</li>
                    <li>Other grounds (investment, study, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Permanent Resident</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Residente permanente</strong> has indefinite validity (card replacements still cost derechos). Direct consular paths commonly used by foreigners include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Jubilados / pensionados</strong> meeting the higher solvency thresholds</li>
                  <li><strong>Family unity</strong> with a Mexican citizen</li>
                  <li>After holding temporary residency (typically 4 years—verify for your case)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="two-stage" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Two-Stage Process (Consulate → INM Canje)</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Book MiConsulado</h3>
                    <p className="text-gray-600">Book at <a href="https://citas.sre.gob.mx" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">citas.sre.gob.mx</a> for the Visas department at the Mexican consulate that serves your residence.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interview + Biometrics Abroad</h3>
                    <p className="text-gray-600">If approved, you receive a <strong>visa foil</strong> in your passport (often single-entry, limited validity—check your foil).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enter Mexico</h3>
                    <p className="text-gray-600">Keep your entry record / FMM as instructed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Within 30 Calendar Days</h3>
                    <p className="text-gray-600">File for <strong>expedición de documento migratorio por canje</strong> at the INM office that corresponds to your address (for SLP residents: the San Luis Potosí oficina).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pay Derechos & Receive Card</h3>
                    <p className="text-gray-600">Pay the applicable derechos, provide biometrics/photo as required, and receive your residence card.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-red-900 font-semibold">
                  The visa foil is NOT the residence card. Missing the 30-day window is one of the most expensive beginner mistakes.
                </p>
              </div>
            </div>
          </section>

          <section id="solvency" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Economic Solvency Pathways (2026)</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Federal UMA Formula</h3>
              <p className="text-gray-700 mb-4">
                The Lineamientos for visas (DOF text, 25 July 2025) set temporary-resident solvency as <strong>either</strong>:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Average monthly balance of investments/bank accounts equal to <strong>11,460 days of UMA</strong> over the <strong>last 12 months</strong>, <strong>or</strong></li>
                <li>Monthly income from employment or pension, free of encumbrances, greater than <strong>680 days of UMA</strong> during each of the <strong>last 6 months</strong></li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                For permanent residency as a <strong>retiree/pensioner</strong>:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>45,850 days of UMA</strong> average balance over 12 months, <strong>or</strong></li>
                <li>Pension income greater than <strong>1,140 days of UMA</strong> monthly over 6 months</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Consulates Actually Publish (Examples)</h3>
              <p className="text-gray-700 mb-4">
                Consulates convert peso thresholds to local currency using their reference rate. <strong>Never assume a USD blog number matches your appointment city.</strong>
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-yellow-900 font-semibold">
                  ⚠️ San Diego Contradiction: San Diego currently hosts two English sheets labeled 2026 with different USD thresholds ($75,950/$4,510 vs $68,241/$4,049). Applicants must confirm which sheet the visa section is using when they book.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Consulate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Temp Savings (12 mo)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Temp Income (6 mo)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">San Diego (PDF 1)</td>
                      <td className="px-4 py-3 text-sm">$75,950 USD</td>
                      <td className="px-4 py-3 text-sm">$4,510 USD</td>
                      <td className="px-4 py-3 text-sm">$56 USD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">San Diego (PDF 2)</td>
                      <td className="px-4 py-3 text-sm">$68,241 USD</td>
                      <td className="px-4 py-3 text-sm">$4,049 USD</td>
                      <td className="px-4 py-3 text-sm">$56 USD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Las Vegas</td>
                      <td className="px-4 py-3 text-sm">$78,025 USD</td>
                      <td className="px-4 py-3 text-sm">$4,630 USD</td>
                      <td className="px-4 py-3 text-sm">$56 USD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Washington D.C.</td>
                      <td className="px-4 py-3 text-sm">MXN $1,394,000</td>
                      <td className="px-4 py-3 text-sm">MXN $83,640</td>
                      <td className="px-4 py-3 text-sm">$56 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Unity</h3>
              <p className="text-gray-700 mb-4">
                Lineamientos require proof of the family relationship (marriage, birth certificates, etc., often with apostille + Spanish translation when issued abroad) plus sponsor solvency commonly pegged at <strong>220 UMA</strong> per dependent. Bring originals and photocopies; expect extra scrutiny on document authenticity.
              </p>
            </div>
          </section>

          <section id="work" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Work-Based Residency (Brief)</h2>
              <p className="text-gray-700 mb-4">
                If a Mexican company will employ you in SLP (common in the automotive corridor near Villa de Reyes), the employer generally needs a current <strong>Constancia de Inscripción de Empleador</strong> with INM and sponsors your visa/permiso. Your HR or immigration counsel drives the file; your personal job is passport validity, apostilles, and showing up for biometrics.
              </p>
              <p className="text-gray-700">
                For more context on SLP&apos;s job market, see <Link href="/blog/foreign-direct-investment-slp-job-market-foreign-professionals" className="text-blue-600 underline">FDI & the foreign professional job market</Link>.
              </p>
            </div>
          </section>

          <section id="step-by-step" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step: From Appointment to Resident Card</h2>
              
              <div className="space-y-4">
                {[
                  { num: 1, title: 'Choose the pathway', desc: 'Solvency, family, work, or pensioner permanent' },
                  { num: 2, title: 'Build a document pack', desc: 'Passport, photos, bank statements stamped/verified, employment/pension letters, apostilles/translations' },
                  { num: 3, title: 'Pay the consular fee', desc: 'Commonly $56 USD at US posts—non-refundable even if denied' },
                  { num: 4, title: 'Attend the interview', desc: 'Processing often quoted up to ~10 business days' },
                  { num: 5, title: 'Travel to Mexico', desc: 'Only after the foil is in the passport' },
                  { num: 6, title: 'Start canje immediately in SLP', desc: 'Do not burn the 30-day clock sightseeing first' },
                  { num: 7, title: 'Pay INM derechos', desc: 'Card reader / bank hoja de ayuda—cash not accepted from staff' },
                  { num: 8, title: 'Collect the card', desc: 'Then tackle CURP, banking, and optional IMSS' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="inm-office" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">INM Office in San Luis Potosí</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-4">
                <p className="text-sm text-blue-900 mb-2">
                  <strong>Use the official INM listing:</strong>
                </p>
                <div className="space-y-1 text-blue-900">
                  <p><strong>Address:</strong> Calle Muñoz No. 362, Fraccionamiento Muñoz 1ª Sección, C.P. 78165, San Luis Potosí, S.L.P.</p>
                  <p><strong>Phone:</strong> (444) 833 1959</p>
                  <p><strong>Public hours:</strong> Monday–Friday 09:00–15:00 (call to confirm—some third-party sources list 09:00–14:00)</p>
                  <p className="text-sm"><strong>Source:</strong> <a href="https://www.inm.gob.mx/gobmx/word/index.php/san-luis-potosi/" className="underline" target="_blank" rel="noopener noreferrer">INM official page</a> (consulted 23 Sep 2026)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-yellow-900 text-sm">
                  <strong>Note:</strong> Older San Luis Way pages list different addresses (Carranza 1805, Mariano Otero 455). Until those are updated, prefer the official Muñoz address above.
                </p>
              </div>
            </div>
          </section>

          <section id="fees" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 INM Derechos (Card Fees)</h2>
              
              <p className="text-gray-700 mb-4">
                INM announced 2026 migratory fee updates effective <strong>1 January 2026</strong>. Payment is by <strong>bank card pin-pad</strong> at offices or bank window with a hoja de ayuda—<strong>not cash to staff</strong>.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Document</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">100% Fee (MXN)</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">50% Fee (MXN)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Temporary resident — 1 year</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$11,141</td>
                      <td className="px-4 py-3 text-sm text-right">$5,570</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Temporary resident — 2 years</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$16,693</td>
                      <td className="px-4 py-3 text-sm text-right">$8,347</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Temporary resident — 3 years</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$21,143</td>
                      <td className="px-4 py-3 text-sm text-right">$10,571</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Temporary resident — 4 years</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$25,058</td>
                      <td className="px-4 py-3 text-sm text-right">$12,529</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Permanent resident</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$13,579</td>
                      <td className="px-4 py-3 text-sm text-right">$6,789</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Card replacement (reposición)</td>
                      <td className="px-4 py-3 text-sm text-right font-medium">$1,780</td>
                      <td className="px-4 py-3 text-sm text-right">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                The 50% column applies only when you qualify under the Ley Federal de Derechos criteria (family unity, registered employer job offer, etc.). Always regenerate the payment slip for your trámite the day you pay.
              </p>
            </div>
          </section>

          <section id="renewal" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Renewal, Temporary → Permanent, Regularization</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Renewal</h3>
                  <p className="text-gray-700">Start before the card expires; bring proof of address and continued eligibility. Fee tables above apply to renewals as listed on INM materials.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Temporary → Permanent</h3>
                  <p className="text-gray-700">After meeting the continuous residence period in the Reglamento (commonly described as four years for many temporary residents, though specific requirements vary by the ground under which you hold temporary status—confirm your ground with INM), file the change-of-status trámite at INM.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Regularization</h3>
                  <p className="text-gray-700">If you overstayed a visitor permit or missed canje, options exist but are fact-specific and often require legal counsel. Do not attempt DIY fixes—speak with INM or a licensed attorney promptly.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Replacement</h3>
                  <p className="text-gray-700">Lost/stolen cards use reposición fees; file a police report when required.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="after-card" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">After the Card: CURP, RFC/SAT, Banking, IMSS</h2>
              
              <p className="text-gray-700 mb-6">
                Your residence card unlocks civilian life in SLP:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. CURP</h3>
                  <p className="text-gray-700">
                    Mexico&apos;s personal ID code; foreigners typically obtain it in connection with immigration documents via the official CURP tools on <a href="https://www.gob.mx/curp" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">gob.mx/curp</a>. Banks and IMSS expect it.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. RFC / SAT</h3>
                  <p className="text-gray-700">
                    Tax ID through the Servicio de Administración Tributaria (<a href="https://www.sat.gob.mx" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">sat.gob.mx</a>) if you will invoice, open certain accounts, or meet tax residency tests. This pillar does not determine whether you are a Mexican tax resident.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Banking</h3>
                  <p className="text-gray-700">
                    See <Link href="/resources/expat-guide#banking" className="text-blue-600 underline">Expat Guide § Banking</Link>. Banks commonly ask for passport, residence card, proof of address, and sometimes RFC.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. IMSS Voluntary (Modalidad 33 / Seguro de Salud para la Familia)</h3>
                  <p className="text-gray-700 mb-2">
                    Available to many residents with CURP; annual prepaid quotas for the March 2026–February 2027 cycle are reported in our healthcare reporting as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Ages 30–39: MXN $12,350</li>
                    <li>Ages 40–49: MXN $14,350</li>
                    <li>Ages 60–69: MXN $20,600</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    See <Link href="/blog/healthcare-san-luis-potosi-expats-2026" className="text-blue-600 underline">Healthcare for Expats 2026</Link> and <Link href="/resources/health-guide" className="text-blue-600 underline">Health Guide</Link> for waiting periods and pre-existing exclusions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="mistakes" className="mb-16 scroll-mt-24">
            <div className="bg-red-50 rounded-xl border-l-4 border-red-400 p-6">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Common Mistakes</h2>
              
              <ol className="list-decimal list-inside text-red-900 space-y-2">
                <li>Treating the <strong>consular foil</strong> as finished residency</li>
                <li>Missing the <strong>30-day canje</strong> window</li>
                <li>Bringing <strong>unstamped</strong> PDF bank statements when the consulate requires wet-ink bank verification</li>
                <li>Copying <strong>another city&apos;s USD thresholds</strong></li>
                <li>Assuming <strong>San Diego&apos;s two PDFs</strong> are identical</li>
                <li>Using an <strong>outdated INM street address</strong> from old blog posts</li>
                <li>Paying <strong>cash</strong> to anyone claiming to be INM staff</li>
                <li>Skipping <strong>apostilles/translations</strong> on foreign civil documents</li>
                <li>Planning Mexican employment on a solvency card <strong>without</strong> work permission</li>
                <li>Delaying <strong>CURP/RFC</strong> and then wondering why banks say no</li>
              </ol>
            </div>
          </section>

          <section id="faq" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h2 className="text-2xl font-bold">❓ Frequently Asked Questions</h2>
                <p className="text-blue-100 mt-1">Common questions about Mexican visas and residency</p>
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
                    Where is the INM office in San Luis Potosí?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    The official INM page lists Calle Muñoz No. 362, Fracc. Muñoz 1ª Sección, C.P. 78165, phone (444) 833 1959, Monday–Friday 09:00–15:00. Call ahead as some third-party sheets list a 14:00 close.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    How much are INM card fees in 2026?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Examples: temporary resident one year MXN $11,141; four years MXN $25,058; permanent resident MXN $13,579, with possible 50% amounts when legally applicable. Consular visa fees (often $56 USD at surveyed US posts) are extra.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    Can I open a bank account and get IMSS with only an FMM?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Banks and IMSS processes typically expect a residence card and CURP. See the Expat Guide banking section and the Health Guide for resident enrollment realities.
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    Is there a Mexico digital nomad visa?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Mexico does not currently market a separate digital-nomad visa brand. Remote workers usually use temporary resident status via economic solvency (or another listed ground).
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    How do family members apply?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Through unidad familiar categories in the lineamientos, with relationship documents and sponsor solvency (often 220 × UMA per dependent, or the consulate&apos;s published local amount such as Las Vegas&apos;s $1,498 examples).
                  </p>
                </details>

                <details className="group p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-gray-900">
                    What if I already live in SLP on an expired FMM?
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    You may need a regularization strategy rather than a normal canje. This guide cannot prescribe a DIY fix—speak with INM or a licensed attorney promptly.
                  </p>
                </details>
              </div>
            </div>
          </section>

          <section className="my-8">
            <AdUnit placement="mid-content" />
          </section>

          <GuideCTA relatedLinks={[
            { href: '/resources/expat-guide', label: 'Expat Guide', labelEs: 'Guía Expat' },
            { href: '/resources/arrival-checklist', label: 'Arrival Checklist', labelEs: 'Checklist de Llegada' },
            { href: '/resources/health-guide', label: 'Health Guide', labelEs: 'Guía de Salud' },
            { href: '/resources/living-guide', label: 'Living Guide', labelEs: 'Guía de Vida' },
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
