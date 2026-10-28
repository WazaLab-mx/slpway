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

export default function SchoolGuidePage() {
  const { t } = useTranslation('school-guide');
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
    { id: 'system', name: 'Education System' },
    { id: 'international', name: 'International Schools' },
    { id: 'private', name: 'Private Schools' },
    { id: 'public', name: 'Public Schools' },
    { id: 'universities', name: 'Universities' },
    { id: 'enrollment', name: 'How to Enroll' },
    { id: 'costs', name: 'Costs' },
    { id: 'faq', name: 'FAQ' },
  ];

  const quickStats = [
    { label: 'School Days 2026-27', value: '185', source: 'SEP' },
    { label: 'Classes Start', value: 'Aug 31, 2026', source: 'SEP' },
    { label: 'IB Programmes (Terranova)', value: '3', source: 'IB / School' },
    { label: 'UASLP Students', value: '32,000+', source: 'UASLP' },
    { label: 'Literacy (Mexico)', value: '~95%', source: 'World Bank' },
    { label: 'School Year', value: 'Aug-Jul', source: 'SEP 2026-27' },
  ];

  const internationalSchools = [
    {
      name: 'Colegio Internacional Terranova',
      curriculum: 'IB World School (PYP, MYP, DP)',
      levels: 'Preschool - High School',
      location: 'Privadas del Pedregal',
      address: 'Av. Palmira No. 705, Privadas del Pedregal',
      phone: '444 841 6422',
      website: 'https://www.terranova.edu.mx',
      tuitionRange: 'Request current fees',
      enrollment: 'Request current fees',
      highlights: ['Offers all 3 IB programmes (PYP, MYP, DP)', 'IB World School since 2011', 'Preschool to Bachillerato'],
      languages: ['Spanish', 'English'],
      extraActivities: ['After-school program'],
      studentTeacherRatio: 'Ask the school',
      rating: 5,
      featured: true,
    },
    {
      name: 'Colegio Chapultepec de San Luis',
      curriculum: 'Bilingual (Cambridge-endorsed)',
      levels: 'Maternal - High School',
      location: 'Privadas del Pedregal',
      address: 'Prolongación Av. Chapultepec 1280, Privadas del Pedregal',
      phone: '444 825 5043',
      website: 'http://www.colegiochapultepecdesanluis.com',
      tuitionRange: 'Request current fees',
      enrollment: 'Request current fees',
      highlights: ['Classes taught in English (per school)', 'Cambridge-endorsed', 'Microsoft-endorsed program', 'Maternal to Preparatoria'],
      languages: ['Spanish', 'English'],
      extraActivities: ['Ask the school'],
      studentTeacherRatio: 'Ask the school',
      rating: 4,
    },
  ];

  const privateSchools = [
    {
      name: 'Instituto Potosino Marista',
      type: 'Catholic (Marist)',
      levels: 'Primary - High School',
      location: 'Benigno Arriaga (primary)',
      address: 'Benigno Arriaga 608 (primary)',
      phone: '444 813 4375 (primary) / 444 813 4024 (secondary & prepa)',
      tuitionRange: 'Request current fees',
      enrollment: 'Request current fees',
      features: ['Founded 1935', 'Marist Brothers', 'Inclusion program (Ollin Yolotl)'],
      englishLevel: 'Ask the school',
    },
    {
      name: 'Colegio Motolinía de San Luis',
      type: 'Catholic',
      levels: 'Preschool - High School',
      location: 'Polanco, Jardín & Lomas 4a (3 campuses)',
      address: 'Av. Venustiano Carranza 2150, Col. Polanco (preschool & primary)',
      phone: '444 813 0240',
      tuitionRange: 'Request current fees',
      enrollment: 'Request current fees',
      features: ['Catholic education', 'Secondary: Basalenque 140, Col. Jardín', 'Prepa: Cordillera Arakán 709, Lomas 4a'],
      englishLevel: 'Ask the school',
    },
  ];

  const universities = [
    {
      name: 'Universidad Autónoma de San Luis Potosí (UASLP)',
      type: 'Public',
      founded: '1923 as a university (roots in the 1859 Instituto Científico y Literario)',
      programs: '99 undergraduate, 88 graduate programs',
      students: '32,000+',
      location: 'Multiple campuses (Zona Universitaria and Centro)',
      address: 'Several campuses; see uaslp.mx',
      website: 'https://www.uaslp.mx',
      tuitionRange: 'Request current fees',
      highlights: ['Largest in state', 'Medical school', 'Law school', 'International exchange'],
      faculties: ['Medicine', 'Law', 'Engineering', 'Sciences', 'Business', 'Architecture', 'Psychology'],
      ranking: 'Top 25 in Mexico (QS 2025 edition)',
    },
    {
      name: 'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)',
      type: 'Private',
      founded: '1975 (SLP campus)',
      programs: 'PrepaTec, undergraduate and graduate programs',
      students: '',
      location: 'Lomas del Tecnológico',
      address: 'Av. Eugenio Garza Sada 300, Lomas del Tecnológico',
      website: 'https://www.tec.mx/es/san-luis-potosi',
      tuitionRange: 'Request current fees',
      highlights: ['Top-ranked in Mexico', 'Entrepreneur programs', 'Global partners', 'Industry connections'],
      faculties: ['Business', 'Engineering', 'IT', 'Design', 'Health'],
      ranking: "Among Mexico's top-ranked universities (QS)",
    },
    {
      name: 'Universidad del Valle de México (UVM)',
      type: 'Private',
      founded: '',
      programs: 'Undergraduate and graduate programs',
      students: '',
      location: 'Fracc. Tecnológico',
      address: 'Av. Robles 600, Fracc. Tecnológico',
      website: 'https://www.uvm.mx',
      tuitionRange: 'Request current fees',
      highlights: ['Flexible schedules', 'Online options', 'Career services'],
      faculties: ['Business', 'Health Sciences', 'Design', 'Engineering', 'Law'],
      ranking: 'Laureate International network',
    },
    {
      name: 'Universidad Politécnica de San Luis Potosí (UPSLP)',
      type: 'Public',
      founded: '2001',
      programs: 'Engineering, technology and business programs',
      students: '6,000+',
      location: 'La Ladrillera',
      address: 'Urbano Villalón 500, Col. La Ladrillera',
      website: 'https://www.upslp.edu.mx',
      tuitionRange: 'Request current fees',
      highlights: ["Mexico's first polytechnic university", 'Industry focused'],
      faculties: ['Engineering', 'Information Technology', 'Business'],
      ranking: 'Public polytechnic university',
    },
    {
      name: 'Universidad Tangamanga (UTAN)',
      type: 'Private',
      founded: '',
      programs: 'Prepa, undergraduate, executive, graduate and online programs',
      students: '',
      location: 'Campuses: Saucito, Tequis, Industrias, Huasteca',
      address: 'Av. Fray Diego de la Magdalena 42, Col. Saucito (one of several campuses)',
      website: 'https://www.utan.edu.mx',
      tuitionRange: 'Request current fees',
      highlights: ['Executive programs for working adults', 'Online programs', 'Several campuses'],
      faculties: ['Business', 'Law', 'Education', 'Health', 'Technology'],
      ranking: 'Private regional university',
    },
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Research & Visit Schools',
      time: '2-4 weeks',
      description: 'Attend open houses, tour facilities, meet staff, and compare curricula',
      details: ['Schedule visits during school hours', 'Ask about English programs', 'Check extracurricular offerings', 'Review academic results'],
      tip: 'Many schools hold open houses in the first months of the year for the cycle that starts in late August. Private schools may have availability year-round.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      time: '1-2 weeks',
      description: 'Collect all necessary paperwork for application',
      details: ['Birth certificate (certified copy)', 'CURP (Mexican ID)', 'Previous school records', 'Vaccination card', 'Passport photos', 'Proof of address'],
      tip: 'Foreign documents may need an apostille and a certified Spanish translation, depending on the grade level; translation costs vary by translator.'
    },
    {
      step: 3,
      title: 'Document Validation (Foreign Students)',
      time: '2-4 weeks',
      description: 'Validate foreign academic credentials through the state education office',
      details: ['Ask SEGE which documents your grade level needs', 'Provide originals (apostilled if required)', 'Include certified translations if required', 'Pay the applicable fee'],
      tip: 'Start early. Requirements are lighter for preschool-secundaria than for preparatoria and university; confirm the current rules with SEGE (Secretaría de Educación de Gobierno del Estado).'
    },
    {
      step: 4,
      title: 'Submit Application',
      time: '1-2 weeks',
      description: 'Complete application forms and pay fees',
      details: ['Fill out school application', 'Pay the application fee', 'Submit all documents', 'Schedule entrance evaluation'],
      tip: 'Many schools accept applications online. Call to confirm requirements and fees for your specific grade level.'
    },
    {
      step: 5,
      title: 'Entrance Evaluation',
      time: '1-2 days',
      description: 'Student assessment for proper grade placement',
      details: ['Academic evaluation (math, Spanish, English)', 'Psychological assessment', 'Parent interview (some schools)', 'Language proficiency test (bilingual schools)'],
      tip: 'Evaluations in Spanish are common. Request English support if needed. Results usually take 1-2 weeks.'
    },
    {
      step: 6,
      title: 'Enrollment & Payment',
      time: '1 week',
      description: 'Confirm enrollment and complete payments',
      details: ['Sign enrollment contract', 'Pay inscription fee', 'Purchase uniforms', 'Buy school supplies', 'Register for transportation (optional)'],
      tip: 'Ask about payment plans and sibling discounts. Many schools spread tuition over 10-12 monthly payments.'
    },
  ];

  const requiredDocuments = [
    { document: 'Birth Certificate', notes: 'Original + copies. Foreign certificates may need apostille + translation.' },
    { document: 'CURP', notes: 'Mexican ID number. Foreign residents receive it with residency; look it up at gob.mx/curp' },
    { document: 'Previous School Records', notes: 'Report cards, transcripts. Apostille + translation may be required for foreign docs.' },
    { document: 'Transfer Certificate', notes: 'Required when changing schools within Mexico during school year.' },
    { document: 'Vaccination Card', notes: 'Cartilla Nacional de Salud / vaccination record, up to date.' },
    { document: 'Passport Photos', notes: 'Several recent photos; ask the school for the required size.' },
    { document: 'Proof of Address', notes: 'Utility bill, bank statement, or rental contract (< 3 months old)' },
    { document: 'Parent ID', notes: 'INE for Mexican parents. Passport + residency card for foreign parents.' },
    { document: 'Medical Certificate', notes: 'Some schools require recent physical exam certificate.' },
  ];

  const costComparison = {
    international: {
      monthly: '$8,000 - $18,000 MXN',
      enrollment: '$25,000 - $45,000 MXN',
      annual: '$125,000 - $250,000 MXN',
      extras: '$15,000 - $30,000 MXN',
    },
    privatePremium: {
      monthly: '$5,000 - $10,000 MXN',
      enrollment: '$15,000 - $30,000 MXN',
      annual: '$70,000 - $140,000 MXN',
      extras: '$10,000 - $20,000 MXN',
    },
    privateStandard: {
      monthly: '$3,000 - $6,000 MXN',
      enrollment: '$8,000 - $18,000 MXN',
      annual: '$44,000 - $90,000 MXN',
      extras: '$8,000 - $15,000 MXN',
    },
    public: {
      monthly: 'Free (minimal fees)',
      enrollment: '$500 - $1,500 MXN',
      annual: '$6,000 - $18,000 MXN',
      extras: '$5,000 - $10,000 MXN',
    },
  };

  const additionalCosts = [
    { item: 'Uniforms (complete set)', range: '$2,000 - $6,000 MXN', frequency: 'Annual' },
    { item: 'School supplies', range: '$1,500 - $4,000 MXN', frequency: 'Per semester' },
    { item: 'Textbooks', range: '$1,000 - $5,000 MXN', frequency: 'Annual' },
    { item: 'Transportation (private bus)', range: '$1,500 - $3,500 MXN', frequency: 'Monthly' },
    { item: 'Lunch/Cafeteria', range: '$1,000 - $2,500 MXN', frequency: 'Monthly' },
    { item: 'Extracurricular activities', range: '$500 - $2,000 MXN', frequency: 'Monthly' },
    { item: 'School events/field trips', range: '$2,000 - $5,000 MXN', frequency: 'Annual' },
    { item: 'Insurance/Medical', range: '$500 - $1,500 MXN', frequency: 'Annual' },
  ];

  const faqs = [
    {
      q: 'What is the school year calendar in Mexico?',
      a: 'The SEP 2026-2027 calendar runs from August 31, 2026 to July 9, 2027 (185 school days). (The previous 2025-2026 year started on September 1, 2025.) Major breaks: winter vacation December 21, 2026 to January 5, 2027, spring vacation March 22 to April 2, 2027, and summer vacation from mid-July. SEP publishes the official calendar annually.'
    },
    {
      q: 'Do international schools follow the same calendar?',
      a: 'Most international schools follow the SEP calendar but may have slight variations. Some IB schools align with international calendars. Always confirm the specific calendar with each school.'
    },
    {
      q: 'Can my child enroll mid-year?',
      a: 'Yes, most private and international schools accept mid-year enrollment subject to availability. Public schools typically enroll at the beginning of each semester. Contact schools directly to check space in your desired grade level.'
    },
    {
      q: 'What if my child doesn\'t speak Spanish?',
      a: 'International and bilingual schools offer support for non-Spanish speakers, including ESL programs and gradual immersion. Some schools provide intensive Spanish courses before regular enrollment. Children typically achieve conversational fluency within 6-12 months.'
    },
    {
      q: 'How do I validate foreign school credentials?',
      a: 'Requirements depend on the level. For preparatoria and university, foreign documents usually need: 1) an apostille from the issuing country, 2) a certified Spanish translation by a "perito traductor", and 3) revalidation through SEGE (the state education office). For preschool to secundaria the process is simpler. Confirm current requirements, timing and fees with SEGE before you move.'
    },
    {
      q: 'What is CURP and how do I get one?',
      a: 'CURP (Clave Única de Registro de Población) is Mexico\'s unique population registry code. Foreign residents obtain it through INM after receiving temporary or permanent residency. It\'s required for school enrollment, banking, and many official processes.'
    },
    {
      q: 'Are school uniforms mandatory?',
      a: 'Most Mexican schools, public and private, use uniforms. Each school has specific uniforms including daily wear, PE clothes, and sometimes formal attire. Most schools have designated uniform stores; ask for current prices.'
    },
    {
      q: 'What about special education or learning differences?',
      a: 'Some private schools offer support for learning differences. The USAER program in public schools provides special education support. For significant needs, specialized schools like CAM (Centro de Atención Múltiple) are available. Ask schools about their "inclusión educativa" programs.'
    },
    {
      q: 'How does school transportation work?',
      a: 'Many private schools offer optional bus service with door-to-door pickup; ask for current fees. Public school students typically walk, use public transit, or are driven by parents. Carpool groups (WhatsApp) are common among parents.'
    },
    {
      q: 'What homework load should I expect?',
      a: 'Homework varies by school and level. Generally: Primary (1-2 hours daily), Secondary (2-3 hours), Preparatory (3-4 hours). International schools may assign more. Mexican schools often include family-involved projects and presentations.'
    },
    {
      q: 'Can parents participate in school activities?',
      a: 'Yes, parent involvement is encouraged through: Sociedad de Padres de Familia (parent association), volunteer opportunities, school events, parent-teacher conferences (typically quarterly), and classroom support. Private schools often have more structured parent programs.'
    },
    {
      q: 'What university preparation is available?',
      a: 'Preparatory schools (grades 10-12) prepare students for university entrance exams (EXANI). Some schools offer: University pathway programs, SAT/ACT preparation (for US universities), IB Diploma (for international universities), and direct agreements with specific universities.'
    },
    {
      q: 'Is homeschooling legal in Mexico?',
      a: 'Homeschooling exists in a legal gray area in Mexico. Education is constitutionally mandatory, but enforcement is limited. Options include online schools with SEP recognition or international online programs. SEP validation exams may be required to re-enter the Mexican system.'
    },
    {
      q: 'What grade would my child enter based on age?',
      a: 'Grade placement is based on age, using a birth-date cutoff set by SEP (confirm the current cutoff with the school): Preescolar 1: age 3, Primaria 1: age 6, Secundaria 1: age 12, Preparatoria 1: age 15. Foreign students may need placement tests regardless of previous grade level.'
    },
  ];

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:url" content={`https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/school-guide`} />
        <meta property="og:type" content="article" />
        
        <link rel="canonical" href={`https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/school-guide`} />
        
        <link rel="alternate" hrefLang="en" href="https://www.sanluisway.com/resources/school-guide" />
        <link rel="alternate" hrefLang="es" href="https://www.sanluisway.com/es/resources/school-guide" />
        <link rel="alternate" hrefLang="de" href="https://www.sanluisway.com/de/resources/school-guide" />
        <link rel="alternate" hrefLang="ja" href="https://www.sanluisway.com/ja/resources/school-guide" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sanluisway.com/resources/school-guide" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": t('seo.title'),
              "description": t('seo.description'),
              "inLanguage": locale,
              "datePublished": "2025-01-01",
              "dateModified": "2026-10-27",
              "author": { "@type": "Organization", "name": "San Luis Way" },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["#overview", "#school-types", "#top-schools"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": t('breadcrumbs.home'), "item": "https://www.sanluisway.com" },
                { "@type": "ListItem", "position": 2, "name": t('breadcrumbs.resources'), "item": "https://www.sanluisway.com/resources" },
                { "@type": "ListItem", "position": 3, "name": t('breadcrumbs.schoolGuide'), "item": `https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/school-guide` }
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary">{t('breadcrumbs.home')}</Link>
              <span className="text-gray-400">/</span>
              <Link href="/resources" className="text-gray-500 hover:text-primary">{t('breadcrumbs.resources')}</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{t('breadcrumbs.schoolGuide')}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <Image
            src="/images/heroes/school-supplies.jpg"
            alt={t('hero.imageAlt')}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/80 to-indigo-800/85" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                {t('hero.readTime')}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t('hero.title')}
              </h1>
              <LastUpdated date="2026-10-27" className="text-gray-100 mb-4" />
              <p className="text-xl text-white/90 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {quickStats.map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-white/70 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="sticky top-0 bg-white shadow-md z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                    activeSection === section.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Executive Summary */}
            <div className="mb-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">📋</span> Executive Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-3">Key Takeaways</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>One IB World School (Terranova) plus bilingual and Catholic private schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Fees vary widely and are rarely published: request current fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>2026-27 school year runs Aug 31, 2026 to Jul 9, 2027</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Foreign documents may need apostille + translation (depends on level)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-3">For Expat Families</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">→</span>
                      <span>Best options: Colegio Internacional Terranova (IB), Colegio Chapultepec (bilingual)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">→</span>
                      <span>IB and Cambridge programs available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">→</span>
                      <span>Ask each bilingual school about Spanish support for newcomers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">→</span>
                      <span>Start enrollment process 2-3 months before school year</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Education in San Luis Potosí</h2>
              <div className="bg-white rounded-xl shadow-elegant p-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  San Luis Potosí offers a robust educational ecosystem with options ranging from traditional Mexican public schools to prestigious international institutions. As a growing economic hub with major automotive (BMW, GM) and manufacturing industries, the city has developed quality educational infrastructure to serve both local and expatriate families.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Why SLP for Education?</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>Lower living costs than Mexico City (about 22% cheaper incl. rent, Numbeo Oct 2026)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>Growing international school options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>Strong university presence (UASLP, Tec de Monterrey)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>High literacy rate (~95% nationally)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Important Dates</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li><strong>School Year:</strong> Aug 31, 2026 - Jul 9, 2027 (2026-2027)*</li>
                      <li><strong>Enrollment Period:</strong> Public pre-registration usually in February; private schools from early in the year</li>
                      <li><strong>Winter Break:</strong> Dec 21, 2026 - Jan 5, 2027</li>
                      <li><strong>Spring Break:</strong> Mar 22 - Apr 2, 2027</li>
                      <li><strong>Summer Break:</strong> Mid-July - late August</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2">*Per the official SEP 2026-2027 calendar (185 school days). The 2025-2026 year began September 1, 2025.</p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>For Expat Families:</strong> Start your school search 3-6 months before your planned move. Popular schools can fill up, and document validation for foreign credentials can take several weeks.
                  </p>
                </div>
              </div>
            </section>

            {/* Education System Section */}
            <section id="system" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mexican Education System</h2>
              <div className="bg-white rounded-xl shadow-elegant p-6">
                <p className="text-gray-700 mb-6">
                  The Mexican education system is regulated by the Secretaría de Educación Pública (SEP). Education is mandatory from ages 3-18 and divided into four levels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { level: 'Preescolar (Preschool)', ages: '3-5 years', grades: '1st-3rd', duration: '3 years', mandatory: 'Yes (since 2002)' },
                    { level: 'Primaria (Elementary)', ages: '6-11 years', grades: '1st-6th', duration: '6 years', mandatory: 'Yes' },
                    { level: 'Secundaria (Middle)', ages: '12-14 years', grades: '1st-3rd', duration: '3 years', mandatory: 'Yes' },
                    { level: 'Preparatoria (High)', ages: '15-17 years', grades: '1st-3rd (or semesters)', duration: '2-3 years', mandatory: 'Yes (since 2012)' },
                  ].map((item, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.level}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Ages:</strong> {item.ages}</p>
                        <p><strong>Grades:</strong> {item.grades}</p>
                        <p><strong>Duration:</strong> {item.duration}</p>
                        <p><strong>Mandatory:</strong> {item.mandatory}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                    <span>📖</span> Understanding Grade Equivalents
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-800">
                    <div>
                      <p className="mb-2"><strong>US to Mexico:</strong></p>
                      <ul className="space-y-1">
                        <li>• K-5 = Preescolar 1-3 + Primaria 1-2</li>
                        <li>• Elementary 1-6 = Primaria 1-6</li>
                        <li>• Middle 7-9 = Secundaria 1-3</li>
                        <li>• High 10-12 = Preparatoria 1-3</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>UK to Mexico:</strong></p>
                      <ul className="space-y-1">
                        <li>• Reception-Year 2 = Preescolar</li>
                        <li>• Year 3-8 = Primaria</li>
                        <li>• Year 9-11 = Secundaria</li>
                        <li>• Year 12-13 = Preparatoria</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Schools Section */}
            <section id="international" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International & Bilingual Schools</h2>
              <p className="text-gray-600 mb-6">These schools offer an international (IB) curriculum or bilingual English/Spanish instruction. Ideal for expat families seeking easier transitions and globally recognized programs.</p>
              <div className="space-y-6">
                {internationalSchools.map((school, index) => (
                  <div key={index} className={`bg-white rounded-xl shadow-elegant overflow-hidden ${school.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                    <div className={`px-6 py-4 ${school.featured ? 'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          {school.featured && (
                            <span className="px-3 py-1 bg-white text-amber-600 text-xs font-bold rounded-full uppercase">
                              ⭐ Featured
                            </span>
                          )}
                          <h3 className="text-xl font-semibold text-white">{school.name}</h3>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: school.rating }).map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className={`text-sm mt-1 ${school.featured ? 'text-amber-100' : 'text-blue-100'}`}>{school.curriculum}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Levels:</strong> {school.levels}</p>
                          <p><strong>Location:</strong> {school.location}</p>
                          <p><strong>Address:</strong> {school.address}</p>
                          <p><strong>Phone:</strong> {school.phone}</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Monthly Tuition:</strong> <span className="text-blue-600 font-medium">{school.tuitionRange}</span></p>
                          <p><strong>Enrollment Fee:</strong> {school.enrollment}</p>
                          <p><strong>Student:Teacher:</strong> {school.studentTeacherRatio}</p>
                          <p><strong>Languages:</strong> {school.languages.join(', ')}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {school.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-500">
                          <strong>Activities:</strong> {school.extraActivities.slice(0, 4).join(', ')}
                        </div>
                        <a href={school.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Visit Website →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Private Schools Section */}
            <section id="private" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Private Schools (Spanish-Primary)</h2>
              <p className="text-gray-600 mb-6">Quality private education following the Mexican SEP curriculum. More affordable than international schools with varying levels of English instruction.</p>
              <div className="space-y-4">
                {privateSchools.map((school, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-elegant p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-gray-900">{school.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{school.levels} • {school.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{school.type}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Monthly</p>
                        <p className="font-semibold text-gray-900">{school.tuitionRange}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Enrollment</p>
                        <p className="font-semibold text-gray-900">{school.enrollment}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">English Level</p>
                        <p className="font-semibold text-gray-900">{school.englishLevel}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {school.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-3">
                      <strong>Address:</strong> {school.address} • <strong>Phone:</strong> {school.phone}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Public Schools Section */}
            <section id="public" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Public Schools</h2>
              <div className="bg-white rounded-xl shadow-elegant p-6">
                <p className="text-gray-700 mb-6">
                  Public education in Mexico is free and follows the SEP (Secretaría de Educación Pública) curriculum. While instruction is primarily in Spanish, it offers complete cultural immersion and is the most affordable option.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Advantages</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Free education (only minimal fees for materials)</li>
                      <li>• Complete Spanish immersion</li>
                      <li>• Deep cultural integration</li>
                      <li>• Schools in every neighborhood</li>
                      <li>• SEP-certified curriculum</li>
                      <li>• Good option for younger children</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Considerations</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Instruction entirely in Spanish</li>
                      <li>• Larger class sizes (30-40 students)</li>
                      <li>• Limited English instruction</li>
                      <li>• Variable infrastructure quality</li>
                      <li>• Less individualized attention</li>
                      <li>• May require additional tutoring</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-3">How to Enroll in Public School</h4>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li><strong>1.</strong> Contact SEGE (Secretaría de Educación de Gobierno del Estado) or the nearest public school</li>
                    <li><strong>2.</strong> Provide required documents (birth certificate, CURP, proof of address)</li>
                    <li><strong>3.</strong> Complete pre-registration (preinscripción), usually held in February; check SEGE announcements for dates</li>
                    <li><strong>4.</strong> Attend assigned school for final registration</li>
                    <li><strong>5.</strong> Purchase uniforms and school supplies</li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-gray-700 text-sm">
                      <strong>Contact:</strong> SEGE Secretaría de Educación de Gobierno del Estado<br />
                      Check current offices and phone numbers on the state portal: <a href="https://slp.gob.mx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">slp.gob.mx</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Universities Section */}
            <section id="universities" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Universities & Higher Education</h2>
              <p className="text-gray-600 mb-6">San Luis Potosí has a strong higher education presence with both prestigious public and private institutions.</p>
              <div className="space-y-6">
                {universities.map((uni, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-elegant overflow-hidden">
                    <div className={`px-6 py-4 ${uni.type === 'Public' ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">{uni.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${uni.type === 'Public' ? 'bg-green-200 text-green-900' : 'bg-purple-200 text-purple-900'}`}>
                          {uni.type}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm mt-1">{[uni.founded && `Founded ${uni.founded}`, uni.students && `${uni.students} students`].filter(Boolean).join(' • ')}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Programs:</strong> {uni.programs}</p>
                          <p><strong>Location:</strong> {uni.location}</p>
                          <p><strong>Ranking:</strong> {uni.ranking}</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Tuition:</strong> <span className="text-blue-600 font-medium">{uni.tuitionRange}</span></p>
                          <p><strong>Address:</strong> {uni.address}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2"><strong>Key Faculties:</strong></p>
                        <div className="flex flex-wrap gap-2">
                          {uni.faculties.map((faculty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              {faculty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {uni.highlights.map((highlight, idx) => (
                          <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${uni.type === 'Public' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        Visit Website →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Enrollment How-To Section */}
            <section id="enrollment" className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-green-500 text-white">
                  HOW-TO GUIDE
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  6 Steps
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Enroll Your Child</h2>

              {/* Requirements Box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>📋</span> Required Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Standard Documents:</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      {requiredDocuments.slice(0, 5).map((doc, i) => (
                        <li key={i}>• <strong>{doc.document}:</strong> {doc.notes}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Additional Documents:</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      {requiredDocuments.slice(5).map((doc, i) => (
                        <li key={i}>• <strong>{doc.document}:</strong> {doc.notes}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step by Step */}
              <div className="space-y-6">
                {enrollmentSteps.map((item, index) => {
                  const colors = ['blue', 'green', 'yellow', 'purple', 'indigo', 'emerald'];
                  const color = colors[index % colors.length];
                  return (
                    <div key={item.step} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md">
                      <div className={`bg-gradient-to-r from-${color}-500 to-${color}-600 px-6 py-4 flex items-center gap-4`} style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))`, ['--tw-gradient-from' as any]: index === 0 ? '#3b82f6' : index === 1 ? '#22c55e' : index === 2 ? '#eab308' : index === 3 ? '#a855f7' : index === 4 ? '#6366f1' : '#10b981' }}>
                        <span className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-white/80 text-sm">Estimated time: {item.time}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            {item.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                          <p className="text-yellow-900 text-sm">
                            <strong>Pro Tip:</strong> {item.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Success Checklist */}
              <div className="mt-8 bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">✅</span> Enrollment Checklist
                </h3>
                <p className="text-green-800 mb-4">Ensure you have completed:</p>
                <ul className="space-y-2 text-green-900">
                  <li className="flex items-center gap-3">□ Visited and compared at least 2-3 schools</li>
                  <li className="flex items-center gap-3">□ Gathered all required documents</li>
                  <li className="flex items-center gap-3">□ Validated foreign documents (if applicable)</li>
                  <li className="flex items-center gap-3">□ Submitted application and paid fees</li>
                  <li className="flex items-center gap-3">□ Completed entrance evaluation</li>
                  <li className="flex items-center gap-3">□ Purchased uniforms and supplies</li>
                  <li className="flex items-center gap-3">□ Registered for transportation (if needed)</li>
                </ul>
              </div>
            </section>

            {/* Costs Section */}
            <section id="costs" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Education Costs</h2>
              <div className="bg-white rounded-xl shadow-elegant p-6">

                {/* Comparison Table */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Comparison by School Type (indicative estimates)</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="text-left py-3 px-4 font-semibold">School Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Monthly Tuition</th>
                        <th className="text-left py-3 px-4 font-semibold">Enrollment Fee</th>
                        <th className="text-left py-3 px-4 font-semibold">Est. Annual Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-gray-900">International/Bilingual</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.international.monthly}</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.international.enrollment}</td>
                        <td className="py-3 px-4 text-blue-600 font-medium">{costComparison.international.annual}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-gray-900">Premium Private</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.privatePremium.monthly}</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.privatePremium.enrollment}</td>
                        <td className="py-3 px-4 text-blue-600 font-medium">{costComparison.privatePremium.annual}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-gray-900">Standard Private</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.privateStandard.monthly}</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.privateStandard.enrollment}</td>
                        <td className="py-3 px-4 text-blue-600 font-medium">{costComparison.privateStandard.annual}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Public</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.public.monthly}</td>
                        <td className="py-3 px-4 text-gray-600">{costComparison.public.enrollment}</td>
                        <td className="py-3 px-4 text-green-600 font-medium">{costComparison.public.annual}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Additional Costs */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Education Costs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {additionalCosts.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{item.item}</p>
                        <p className="text-xs text-gray-500">{item.frequency}</p>
                      </div>
                      <p className="text-blue-600 font-semibold">{item.range}</p>
                    </div>
                  ))}
                </div>

                {/* USD Conversion Note */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>USD Conversion (approx.):</strong> At ~18.6 MXN/USD (Banxico FIX, Oct 27, 2026): International schools cost about $430-$970 USD/month. Standard private schools cost about $160-$320 USD/month. Public education has minimal costs of ~$25-80 USD/month total. All ranges on this page are editorial estimates, not published fees: request current fees from each school.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-elegant overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            <section className="my-8">
              <AdUnit placement="mid-content" />
            </section>

            <GuideCTA relatedLinks={[
              { href: '/resources/family-guide', label: 'Family Guide', labelEs: 'Guía Familiar' },
              { href: '/resources/health-guide', label: 'Healthcare Guide', labelEs: 'Guía de Salud' },
              { href: '/resources/neighborhoods-san-luis-potosi', label: 'Neighborhoods', labelEs: 'Colonias' },
              { href: '/resources/arrival-checklist', label: 'Arrival Checklist', labelEs: 'Checklist de Llegada' },
            ]} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'school-guide'])),
    },
  };
};
