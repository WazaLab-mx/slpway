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

export default function HealthGuidePage() {
  const { t } = useTranslation('health-guide');
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
    { id: 'hospitals', name: 'Hospitals' },
    { id: 'clinics', name: 'Clinics' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'howto-visit', name: 'How to Visit' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'howto-insurance', name: 'Get Insurance' },
    { id: 'pharmacies', name: 'Pharmacies' },
    { id: 'faq', name: 'FAQ' },
    { id: 'sources', name: 'Sources' },
  ];

  const quickStats = [
    { value: '4+', label: 'Major Private Hospitals', source: 'Directory 2026' },
    { value: 'Lower', label: 'Costs vs US', source: 'Estimate' },
    { value: '911', label: 'Emergency Number', source: 'Official' },
    { value: '24/7', label: 'Emergency Services', source: 'Verified' },
    { value: '$400-800', label: 'Typical Doctor Visit (MXN)', source: 'Estimate' },
    { value: 'IMSS', label: 'Voluntary Plan for Residents', source: 'imss.gob.mx' },
  ];

  const hospitals = {
    private: [
      {
        name: 'Hospital Lomas de San Luis',
        badge: 'TOP RATED',
        badgeColor: 'bg-yellow-500',
        address: 'Av. Palmira 600, Villas del Pedregal',
        phone: '444 102 5900',
        emergency: 'Main line (24/7 ER)',
        website: 'https://www.google.com/maps/search/?api=1&query=Hospital+Lomas+de+San+Luis+Palmira+600',
        specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Gastroenterology'],
        features: ['24/7 Emergency', 'ICU', 'Some English-speaking staff', 'Major insurers accepted'],
        rating: 4.8,
        costLevel: 'Premium',
        erWaitTime: 'Varies by triage',
      },
      {
        name: 'Hospital Angeles San Luis Potosí',
        badge: 'NATIONAL NETWORK',
        badgeColor: 'bg-blue-500',
        address: 'Antonio Aguilar No. 155, Burócratas del Estado',
        phone: '444 834 0300',
        emergency: '444 834 0300 (Urgencias, 24/7)',
        website: 'https://en.hospitalangeles.com/potosi',
        specialties: ['General Surgery', 'Cardiology', 'Gastroenterology', 'Gynecology', 'Urology', 'Neurosurgery'],
        features: ['24/7 Emergency', 'Modern facilities', 'Part of national network', 'Insurance coordination', 'VIP rooms'],
        rating: 4.7,
        costLevel: 'Premium',
        erWaitTime: 'Varies by triage',
      },
      {
        name: 'Star Médica San Luis Potosí',
        badge: 'ADVANCED TECH',
        badgeColor: 'bg-purple-500',
        address: 'Mariano Arista 735, Barrio de Tequisquiapan',
        phone: '444 812 3737',
        emergency: 'Main line (24/7 ER)',
        website: 'https://www.starmedica.com',
        specialties: ['Cardiology', 'Neurosurgery', 'Orthopedics', 'Oncology', 'Bariatric Surgery'],
        features: ['24/7 Emergency', 'Advanced imaging (MRI, CT)', 'Rehabilitation center', 'Modern ORs'],
        rating: 4.6,
        costLevel: 'High',
        erWaitTime: 'Varies by triage',
      },
      {
        name: 'Hospital Beneficencia Española',
        badge: 'CENTRAL LOCATION',
        badgeColor: 'bg-green-500',
        address: 'Av. Venustiano Carranza 1090, Tequisquiapan',
        phone: '444 813 4048',
        emergency: 'Main line',
        website: 'https://www.google.com/maps/search/?api=1&query=Beneficencia+Espa%C3%B1ola+San+Luis+Potos%C3%AD',
        specialties: ['General Medicine', 'Internal Medicine', 'Surgery', 'Obstetrics'],
        features: ['Emergency room', 'Private rooms', 'Major insurers accepted'],
        rating: 4.5,
        costLevel: 'Medium-High',
        erWaitTime: 'Varies by triage',
      },
    ],
    public: [
      {
        name: 'Hospital Central "Dr. Ignacio Morones Prieto"',
        address: 'Av. Venustiano Carranza 2395',
        phone: '444 834 2700',
        type: 'Teaching Hospital',
        services: ['Emergency', 'General medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Trauma'],
        note: 'Main public hospital (now in the IMSS-Bienestar network), can be crowded',
      },
      {
        name: 'Hospital del Niño y la Mujer',
        address: 'Blvd. Antonio Rocha Cordero #2510, San Juan de Guadalupe',
        phone: '444 826 5002',
        type: 'Specialized',
        services: ['Pediatrics', 'Obstetrics', 'Neonatal ICU', 'Gynecology', 'High-risk pregnancy'],
        note: 'Excellent specialized care for women and children',
      },
      {
        name: 'IMSS Hospital General de Zona No. 1',
        address: 'Nicolás Zapata, Centro',
        phone: '800 623 2323 (IMSS line)',
        type: 'Social Security',
        services: ['For IMSS beneficiaries only', 'Emergency', 'General medicine', 'Surgery'],
        note: 'Requires IMSS enrollment',
      },
    ],
  };

  const clinicsAndSpecialists = [
    {
      specialty: 'General Practice / Family Medicine',
      icon: '👨‍⚕️',
      avgCost: '$400 - $800 MXN',
      waitTime: 'Same day - 2 days',
      whereToLook: 'Hospital medical towers (Lomas, Angeles, Star Médica) and Lomas del Tecnológico',
    },
    {
      specialty: 'Dentistry',
      icon: '🦷',
      avgCost: '$500 - $1,500 MXN',
      waitTime: '1-3 days',
      whereToLook: 'Lomas, Tequisquiapan and Carranza avenue; compare reviews on Doctoralia',
    },
    {
      specialty: 'Dermatology',
      icon: '🩺',
      avgCost: '$600 - $1,200 MXN',
      waitTime: '3-7 days',
      whereToLook: 'Private hospital medical towers; search board-certified dermatologists on Doctoralia',
    },
    {
      specialty: 'Ophthalmology',
      icon: '👁️',
      avgCost: '$500 - $1,000 MXN',
      waitTime: '3-5 days',
      whereToLook: 'Private hospital medical towers and specialist eye clinics; ask about LASIK separately',
    },
    {
      specialty: 'Pediatrics',
      icon: '👶',
      avgCost: '$500 - $900 MXN',
      waitTime: 'Same day - 2 days',
      whereToLook: 'Hospital medical towers; Hospital del Niño y la Mujer for public care',
    },
    {
      specialty: 'Gynecology & Obstetrics',
      icon: '🤰',
      avgCost: '$600 - $1,200 MXN',
      waitTime: '2-5 days',
      whereToLook: 'Private hospital medical towers; Hospital del Niño y la Mujer for public care',
    },
  ];

  const emergencyContacts = [
    { name: 'General Emergency', number: '911', description: 'Police, Fire, Medical - 24/7', priority: true },
    { name: 'Ambulance (Cruz Roja)', number: '911', description: 'Ambulances are dispatched through 911', priority: true },
    { name: 'Hospital Angeles ER', number: '444 834 0300', description: 'Private emergency room - 24/7' },
    { name: 'Hospital Central', number: '444 834 2700', description: 'Main public hospital - 24/7' },
    { name: 'Hospital del Niño y la Mujer', number: '444 826 5002', description: 'Women & children - 24/7' },
    { name: 'Anonymous Crime Report', number: '089', description: 'National anonymous reporting line' },
  ];

  const insuranceOptions = [
    {
      type: 'Public',
      name: 'IMSS (Instituto Mexicano del Seguro Social)',
      description: 'For employed individuals. Employer makes contributions.',
      coverage: 'Comprehensive: medical, dental, prescriptions, hospitalization, surgery',
      cost: 'Via employment (employer and employee contributions); residents without a job can buy the voluntary plan: $9,300-22,150 MXN/year per person by age (2026)',
      pros: ['No out-of-pocket costs', 'Prescriptions included', 'Disability coverage'],
      cons: ['Long wait times', 'Crowded facilities', 'Limited specialist access'],
      website: 'https://www.imss.gob.mx',
      bestFor: 'Formal employees; temporary or permanent residents as a low-cost backup',
    },
    {
      type: 'Public',
      name: 'ISSSTE',
      description: 'For government employees and their families.',
      coverage: 'Similar to IMSS - comprehensive coverage',
      cost: 'Included in government employment',
      pros: ['Comprehensive coverage', 'Retirement benefits', 'Housing loans'],
      cons: ['Government employees only', 'Bureaucratic processes'],
      website: 'https://www.gob.mx/issste',
      bestFor: 'Government employees',
    },
    {
      type: 'Public',
      name: 'IMSS-Bienestar',
      description: 'Free care at public facilities for people without social security. San Luis Potosí is part of the IMSS-Bienestar network.',
      coverage: 'Basic medical services at public facilities',
      cost: 'Free',
      pros: ['No cost', 'Accessible', 'Basic coverage'],
      cons: ['Very long waits', 'Limited services', 'Basic facilities'],
      website: 'https://www.gob.mx/imss-bienestar',
      bestFor: 'Those without other options',
    },
    {
      type: 'Private',
      name: 'GNP Seguros',
      description: 'Major Mexican insurance provider with extensive hospital network.',
      coverage: 'Customizable: hospital, outpatient, dental, vision, international',
      cost: 'Varies widely by age, deductible and plan - request a quote',
      pros: ['Extensive network', 'Fast claims', 'International options'],
      cons: ['Higher premiums', 'Deductibles apply', 'Pre-existing exclusions'],
      website: 'https://www.gnp.com.mx',
      bestFor: 'Families wanting comprehensive private coverage',
    },
    {
      type: 'Private',
      name: 'AXA Seguros',
      description: 'International insurance company with strong presence in Mexico.',
      coverage: 'Major medical, dental, vision, maternity options',
      cost: 'Varies widely by age, deductible and plan - request a quote',
      pros: ['International company', 'Good customer service', 'Flexible plans'],
      cons: ['Moderate premiums', 'Network limitations'],
      website: 'https://www.axa.mx',
      bestFor: 'Expats wanting international backing',
    },
    {
      type: 'Private',
      name: 'Seguros Monterrey New York Life',
      description: 'Part of New York Life, offering major medical (gastos médicos mayores) plans.',
      coverage: 'Hospital, outpatient, preventive care, dental',
      cost: 'Varies widely by age, deductible and plan - request a quote',
      pros: ['New York Life backing', 'Preventive focus', 'Wellness programs'],
      cons: ['Mid-range premiums', 'Pre-existing waiting periods'],
      website: 'https://www.mnyl.com.mx',
      bestFor: 'Those wanting preventive care focus',
    },
    {
      type: 'Private',
      name: 'BUPA Global',
      description: 'Premium international health insurance for expats.',
      coverage: 'Worldwide coverage, evacuation, repatriation',
      cost: 'Premium international pricing (USD) - request a quote',
      pros: ['Global coverage', 'Evacuation included', 'Premium service'],
      cons: ['Very expensive', 'May be overkill for Mexico'],
      website: 'https://www.bupaglobal.com',
      bestFor: 'High-net-worth expats needing global coverage',
    },
  ];

  const visitHospitalSteps = [
    {
      step: 1,
      title: 'Choose Your Hospital',
      description: 'Select a hospital based on your needs: emergency, specialist, or routine care.',
      tips: ['Private hospitals offer faster service', 'Check if your insurance is accepted', 'Lomas, Angeles and Star Médica are popular with expats'],
      time: '5 min',
    },
    {
      step: 2,
      title: 'Gather Documents',
      description: 'Bring essential documents for registration.',
      tips: ['Passport or INE (ID)', 'Insurance card if applicable', 'Previous medical records if available', 'List of current medications'],
      time: '10 min',
    },
    {
      step: 3,
      title: 'Registration (Admisión)',
      description: 'Go to the registration desk (Admisión) to register as a patient.',
      tips: ['Fill out patient form (ficha)', 'Provide emergency contact', 'Ask for English-speaking staff if needed'],
      time: '15-30 min',
    },
    {
      step: 4,
      title: 'Initial Assessment (Triage)',
      description: 'Nurse will assess your condition and prioritize care.',
      tips: ['Describe symptoms clearly', 'Mention allergies and medications', 'Be honest about pain level (1-10 scale)'],
      time: '10-20 min',
    },
    {
      step: 5,
      title: 'Consultation',
      description: 'See the doctor for examination and diagnosis.',
      tips: ['Ask questions about diagnosis', 'Request written prescription', 'Ask about follow-up appointments'],
      time: '20-45 min',
    },
    {
      step: 6,
      title: 'Payment (Caja)',
      description: 'Pay at the cashier or process insurance.',
      tips: ['Cash, credit cards accepted', 'Request itemized receipt (factura)', 'Insurance may require pre-authorization'],
      time: '10-20 min',
    },
  ];

  const getInsuranceSteps = [
    {
      step: 1,
      title: 'Assess Your Needs',
      description: 'Determine what type of coverage you need based on your situation.',
      tips: ['Consider age and health conditions', 'Evaluate how often you visit doctors', 'Think about family coverage needs', 'Consider international travel needs'],
      time: 'Self-assessment',
    },
    {
      step: 2,
      title: 'Research Options',
      description: 'Compare different insurance providers and plans.',
      tips: ['Get quotes from 3-5 providers', 'Compare deductibles and copays', 'Check hospital networks', 'Read reviews from other expats'],
      time: '2-3 hours',
    },
    {
      step: 3,
      title: 'Gather Required Documents',
      description: 'Prepare documentation for your application.',
      tips: ['Passport copy', 'Proof of address in Mexico', 'Medical history summary', 'Previous insurance records'],
      time: '1-2 hours',
    },
    {
      step: 4,
      title: 'Complete Medical Questionnaire',
      description: 'Fill out the health questionnaire honestly.',
      tips: ['Disclose all pre-existing conditions', 'List all current medications', 'Mention any surgeries', 'Being dishonest can void coverage'],
      time: '30-60 min',
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Submit your application with all documents.',
      tips: ['Apply online or through agent', 'Keep copies of everything', 'Ask about processing time', 'Request confirmation number'],
      time: '30 min',
    },
    {
      step: 6,
      title: 'Medical Exam (if required)',
      description: 'Some policies require a medical examination.',
      tips: ['Usually for higher coverage amounts', 'Fast for 24-48 hours before blood tests', 'Avoid alcohol and heavy meals'],
      time: '1-2 hours',
    },
    {
      step: 7,
      title: 'Review and Accept Policy',
      description: 'Review your policy terms carefully before accepting.',
      tips: ['Read exclusions carefully', 'Understand waiting periods', 'Note pre-existing condition rules', 'Keep policy documents safe'],
      time: '1 hour',
    },
  ];

  const pharmacies = [
    {
      name: 'Farmacias del Ahorro',
      type: '24/7 Locations Available',
      services: ['24/7 locations', 'Home delivery', 'Generic medications', 'Basic health checks', 'Loyalty program'],
      doctorConsult: 'Low-cost; varies by branch',
      website: 'https://www.fahorro.com',
      rating: 4.5,
    },
    {
      name: 'Farmacias Guadalajara',
      type: 'Extended Hours',
      services: ['Extended hours (7am-11pm)', 'Wide selection', 'Loyalty program', 'Online ordering', 'Convenience items'],
      doctorConsult: 'Varies by branch',
      website: 'https://www.farmaciasguadalajara.com',
      rating: 4.4,
    },
    {
      name: 'Farmacias Similares',
      type: 'Budget-Friendly',
      services: ['Affordable generics', 'Doctor consultations', 'Widespread locations', 'Basic medications'],
      doctorConsult: 'About $50-80 MXN',
      website: 'https://www.farmaciasdesimilares.com.mx',
      rating: 4.2,
    },
    {
      name: 'Farmacia San Pablo',
      type: 'Premium Selection',
      services: ['Premium products', 'Specialty medications', 'Delivery service', 'International brands'],
      doctorConsult: 'N/A',
      website: 'https://www.farmaciasanpablo.com.mx',
      rating: 4.6,
    },
  ];

  const faqs = [
    {
      question: 'What are the best hospitals for expats in San Luis Potosí?',
      answer: 'Expats most often use Hospital Lomas de San Luis (444 102 5900), Hospital Angeles (444 834 0300) and Star Médica (444 812 3737). All three are private hospitals with 24/7 emergency rooms, some English-speaking doctors, and agreements with major insurers. Confirm that your specific insurer is accepted before treatment.'
    },
    {
      question: 'How much does a doctor visit cost in SLP?',
      answer: 'Private general practitioner visits typically cost $400-800 MXN. Specialists usually charge $600-1,500 MXN. Pharmacy-adjacent clinics charge much less (roughly $50-120 MXN) for minor issues. These are estimates; prices vary by doctor, and all are well below typical US out-of-pocket prices.'
    },
    {
      question: 'Do I need health insurance in Mexico?',
      answer: 'While not legally required for visitors, health insurance is highly recommended. Medical costs are affordable, but a serious illness or accident can still be expensive. Options include Mexican private major-medical insurance (price depends heavily on age), international expat insurance, IMSS through formal employment, or IMSS voluntary enrollment for residents.'
    },
    {
      question: 'Can I use my US health insurance in Mexico?',
      answer: 'Most US insurance plans do not cover routine care in Mexico. However, some plans cover emergency care abroad. Contact your insurer to verify. Many expats purchase separate Mexican insurance or use international plans like BUPA Global or Cigna Global.'
    },
    {
      question: 'How do I call an ambulance in San Luis Potosí?',
      answer: 'Dial 911; Cruz Roja (Red Cross) ambulances are dispatched through it. Private hospitals also run their own ambulances - for example, Hospital Angeles: 444 834 0300.'
    },
    {
      question: 'Are medications available without prescription in Mexico?',
      answer: 'Some medications that need a prescription in the US/Canada are sold over the counter in Mexico. However, antibiotics have required a prescription since 2010, and controlled substances (opioids, benzodiazepines) require a special prescription. Pharmacists can often recommend medications for common ailments.'
    },
    {
      question: 'Do doctors in SLP speak English?',
      answer: 'Many doctors in private hospitals speak some English, especially at Hospital Lomas, Hospital Angeles and Star Médica. When booking, request an English-speaking physician. For public hospitals, English speakers are less common.'
    },
    {
      question: 'What is IMSS and can expats get it?',
      answer: 'IMSS (Instituto Mexicano del Seguro Social) is Mexico\'s public health system. Expats can access IMSS through: 1) Formal employment (employer enrolls you), or 2) Voluntary enrollment (Seguro de Salud para la Familia) if you have temporary or permanent residency. The 2026 annual fee is $9,300-22,150 MXN per person depending on age. Some pre-existing conditions are excluded and others have waiting periods.'
    },
    {
      question: 'How do emergency rooms work in Mexico?',
      answer: 'Private hospital ERs work similarly to the US: register, triage, treatment, payment. Wait times are usually shorter than in public ERs. Public hospital ERs can have very long waits but treat everyone. Private ERs require payment or insurance verification upfront.'
    },
    {
      question: 'What vaccinations are recommended for SLP?',
      answer: 'Standard vaccinations recommended: Hepatitis A & B, Typhoid, Tetanus update, and routine vaccinations. COVID-19 vaccination is widely available. Ask about rabies vaccine if you\'ll work with animals. The CDC says yellow fever vaccine is neither required nor recommended for Mexico.'
    },
    {
      question: 'How do I find a specialist in San Luis Potosí?',
      answer: 'Options include: 1) Ask your general practitioner for referrals, 2) Contact hospital physician directories, 3) Use Doctoralia (Mexican doctor review site), 4) Ask in expat Facebook groups for recommendations. Most specialists are located in Lomas and hospital medical towers.'
    },
    {
      question: 'What are pharmacy consultations and how do they work?',
      answer: 'Many pharmacies (Similares, Ahorro, Guadalajara) have adjacent doctor\'s offices offering low-cost consultations (roughly $50-120 MXN). These are great for minor issues: cold/flu, minor infections, skin rashes. The doctor can diagnose and prescribe medications on the spot. Not suitable for serious conditions.'
    },
    {
      question: 'Is dental care good and affordable in SLP?',
      answer: 'Yes, dental care in SLP is excellent and 60-80% cheaper than the US. A cleaning costs $500-800 MXN, fillings $400-1,000 MXN, and crowns $3,000-6,000 MXN. Prices vary; ask for a written estimate before treatment and check reviews on Doctoralia.'
    },
    {
      question: 'What should I do if I have a medical emergency?',
      answer: 'For serious emergencies: 1) Call 911 or go directly to nearest private hospital ER, 2) Hospital Angeles ER: 444 834 0300, 3) Hospital Central (public): 444 834 2700. For an ambulance, dial 911. Don\'t wait if having chest pain, stroke symptoms, or severe injuries.'
    },
    {
      question: 'Can I get my prescriptions filled from the US?',
      answer: 'Antibiotics and controlled medications require a prescription from a doctor licensed in Mexico; a US prescription is not enough. Many other medications are available without a prescription. Bring your US prescription bottles for reference, or see a pharmacy-adjacent doctor for a local prescription.'
    },
  ];

  const sources = [
    { name: 'Secretaría de Salud de San Luis Potosí', url: 'https://slpsalud.gob.mx', type: 'Government' },
    { name: 'IMSS Official Portal', url: 'https://www.imss.gob.mx', type: 'Government' },
    { name: 'Hospital Angeles San Luis Potosí', url: 'https://en.hospitalangeles.com/potosi', type: 'Institution' },
    { name: 'IMSS Seguro de Salud para la Familia', url: 'https://www.imss.gob.mx/derechoH/seguro-salud-familia', type: 'Government' },
    { name: 'CDC Travelers\' Health: Mexico', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/mexico', type: 'Government' },
    { name: 'COFEPRIS (Federal Health Regulator)', url: 'https://www.gob.mx/cofepris', type: 'Government' },
    { name: 'Doctoralia México', url: 'https://www.doctoralia.com.mx', type: 'Directory' },
    { name: 'GNP Seguros', url: 'https://www.gnp.com.mx', type: 'Insurance' },
    { name: 'AXA Seguros México', url: 'https://www.axa.mx', type: 'Insurance' },
    { name: 'BUPA Global Health', url: 'https://www.bupaglobal.com', type: 'Insurance' },
  ];

  const seoFaqs = [
    { q: 'How much does a doctor visit cost in San Luis Potosí?', a: 'A general practitioner consultation typically costs $400-800 MXN at private clinics. Specialists like cardiologists or dermatologists usually charge $800-1,500 MXN. Pharmacy-adjacent clinics (Similares, Del Ahorro, Farmacias Guadalajara) offer consultations for roughly $50-120 MXN. Prices are estimates and vary by doctor.' },
    { q: 'Which hospitals in SLP have English-speaking doctors?', a: 'Hospital Lomas de San Luis, Star Médica San Luis Potosí, and Hospital Ángeles are the main private hospitals where you are most likely to find English-speaking doctors. Hospital Central Dr. Ignacio Morones Prieto is the main public hospital, but English is limited.' },
    { q: 'Do I need private health insurance as an expat in SLP?', a: 'Strongly recommended. IMSS voluntary coverage is available to temporary and permanent residents for $9,300-22,150 MXN per person per year in 2026 (depending on age), but wait times are long, English support is minimal, and some pre-existing conditions are excluded. Private insurance (GNP, AXA, BUPA) costs more, rises steeply with age, and gives access to the private hospital network with much shorter waits.' },
    { q: 'Can I buy prescription medication without a prescription in Mexico?', a: 'Many medications can be bought over the counter at Mexican pharmacies, but antibiotics (since 2010) and controlled substances (opioids, benzodiazepines) require a prescription from a doctor licensed in Mexico. Prices for many drugs, especially generics, are lower than in the US. Bring a copy of your prescription and medication list.' },
  ];

  return (
    <>
      <Head>
        <title>Healthcare Guide SLP: Hospitals, Doctors & Insurance</title>
        <meta name="description" content="Complete guide to healthcare in San Luis Potosí. Hospitals, clinics, specialists, insurance options, pharmacies, and step-by-step guides for expats." />
        <meta name="keywords" content="San Luis Potosí healthcare, hospitals SLP, doctors Mexico, health insurance expats, pharmacies San Luis Potosí" />
        
        <link rel="canonical" href={`https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/health-guide`} />
        
        <link rel="alternate" hrefLang="en" href="https://www.sanluisway.com/resources/health-guide" />
        <link rel="alternate" hrefLang="es" href="https://www.sanluisway.com/es/resources/health-guide" />
        <link rel="alternate" hrefLang="de" href="https://www.sanluisway.com/de/resources/health-guide" />
        <link rel="alternate" hrefLang="ja" href="https://www.sanluisway.com/ja/resources/health-guide" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sanluisway.com/resources/health-guide" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Ultimate Healthcare Guide for Expats — San Luis Potosí',
              description: 'Complete guide to healthcare in San Luis Potosí: hospitals, doctors, insurance, pharmacies, and step-by-step guides for expats.',
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
              mainEntityOfPage: `https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/health-guide`,
              about: { '@type': 'Place', name: 'San Luis Potosí', sameAs: 'https://www.wikidata.org/wiki/Q204271' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#overview', '#hospitals', '#faq']
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanluisway.com' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.sanluisway.com/resources' },
                { '@type': 'ListItem', position: 3, name: 'Health Guide', item: `https://www.sanluisway.com/${locale === 'en' ? '' : locale + '/'}resources/health-guide` }
              ]
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
        {/* Hero Section */}
        <div className="relative overflow-hidden text-white">
          <Image
            src="/images/practical-categories/english-speaking-healthcare.jpg"
            alt="Healthcare services in San Luis Potosí"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/85 via-emerald-700/80 to-teal-700/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-400 text-green-900">
                  ✓ VERIFIED 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
                  10+ SOURCES
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Healthcare Guide: Hospitals, Doctors & Insurance
              </h1>
              <LastUpdated date="2026-10-27" className="text-emerald-100 mb-4" />
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                San Luis Potosí - Complete Medical Services for Expats
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
          {/* Executive Summary */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">🏥</span> Executive Summary
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  San Luis Potosí offers <strong>good private healthcare at much lower prices</strong> than the US. The city has excellent private hospitals with English-speaking staff, a public healthcare system for residents, and affordable pharmacy consultations for minor issues.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm text-center">
                    <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.source}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">🎯 Key Takeaways</h3>
                <ul className="text-sm text-yellow-900 space-y-1">
                  <li>• <strong>Emergency:</strong> Dial 911 or go to a private ER (Lomas, Angeles, Star Médica)</li>
                  <li>• <strong>Popular with Expats:</strong> Hospital Lomas, Hospital Angeles and Star Médica</li>
                  <li>• <strong>Insurance:</strong> Private plans priced by age; IMSS via employment or voluntary plan ($9,300-22,150 MXN/year, 2026)</li>
                  <li>• <strong>Minor Issues:</strong> Pharmacy-adjacent consultations, roughly $50-120 MXN</li>
                </ul>
              </div>

              {/* Quick Navigation CTAs */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <Link
                  href="/category/english-speaking-healthcare"
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border-2 border-emerald-100 hover:border-emerald-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl group-hover:bg-emerald-200 transition-colors">
                      🩺
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">English-Speaking Doctors</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Browse our directory of English-speaking healthcare providers and specialists
                  </p>
                  <span className="text-emerald-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Directory
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>

                <button
                  onClick={() => scrollToSection('insurance')}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border-2 border-blue-100 hover:border-blue-300 group text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors">
                      🛡️
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Health Insurance</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Compare public and private insurance options for expats in SLP
                  </p>
                  <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    See Insurance Options
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('pharmacies')}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border-2 border-purple-100 hover:border-purple-300 group text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl group-hover:bg-purple-200 transition-colors">
                      💊
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Pharmacies</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    24/7 pharmacies with affordable consultations and medications
                  </p>
                  <span className="text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Find Pharmacies
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Hospitals Section */}
          <section id="hospitals" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🏥 Hospitals</h2>
              <p className="text-gray-600">Private and public hospital options in San Luis Potosí</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Hospitals</h3>
            <div className="space-y-6 mb-8">
              {hospitals.private.map((hospital, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 ${hospital.badgeColor} text-white text-xs font-bold rounded-full`}>
                            {hospital.badge}
                          </span>
                          <span className="text-yellow-500">{'★'.repeat(Math.floor(hospital.rating))}</span>
                          <span className="text-sm text-gray-500">{hospital.rating}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{hospital.name}</h4>
                        <p className="text-gray-600 text-sm">{hospital.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Cost Level</div>
                        <div className="font-semibold text-emerald-600">{hospital.costLevel}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm"><strong>Phone:</strong> {hospital.phone}</p>
                        <p className="text-sm text-red-600"><strong>Emergency:</strong> {hospital.emergency}</p>
                        <p className="text-sm"><strong>ER Wait:</strong> {hospital.erWaitTime}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">
                          Visit Website →
                        </a>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((spec, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{spec}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hospital.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Public Hospitals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hospitals.public.map((hospital, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{hospital.name}</h4>
                  </div>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs mb-2">{hospital.type}</span>
                  <p className="text-gray-600 text-sm mb-2">{hospital.address}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Phone:</strong> {hospital.phone}</p>
                  <p className="text-gray-500 text-sm mb-2">Services: {hospital.services.join(', ')}</p>
                  <p className="text-amber-600 text-xs italic">{hospital.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Clinics Section */}
          <section id="clinics" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">👨‍⚕️ Clinics & Specialists</h2>
              <p className="text-gray-600">Find doctors and specialists across San Luis Potosí</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {clinicsAndSpecialists.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.specialty}
                    </h3>
                  </div>
                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="bg-emerald-50 px-3 py-1 rounded">
                      <span className="text-emerald-700">{category.avgCost}</span>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded">
                      <span className="text-blue-700">Wait: {category.waitTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <strong>Where to look:</strong> {category.whereToLook}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Emergency Section */}
          <section id="emergency" className="mb-16 scroll-mt-24">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h2 className="text-3xl font-bold text-red-900 mb-6">🚨 Emergency Services</h2>

              <div className="bg-red-600 text-white rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-3xl font-bold">911</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">General Emergency Number</h3>
                    <p className="text-red-100">Police, Fire, Medical emergencies - Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className={`bg-white rounded-lg p-4 ${contact.priority ? 'border-2 border-red-300' : ''}`}>
                    <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                    <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                    <p className="text-gray-500 text-sm">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Visit Hospital */}
          <section id="howto-visit" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">HOW-TO GUIDE</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">6 Steps</span>
                </div>
                <h2 className="text-2xl font-bold">How to Visit a Hospital in SLP</h2>
                <p className="text-blue-100">Step-by-step guide for your first hospital visit</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {visitHospitalSteps.map((item) => (
                    <div key={item.step} className="border-l-4 border-blue-500 pl-6 py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-sm">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-sm text-gray-500 ml-auto">{item.time}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <ul className="space-y-1">
                        {item.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Insurance Section */}
          <section id="insurance" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🛡️ Health Insurance Options</h2>
              <p className="text-gray-600">Public and private insurance options for residents and expats</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Public Healthcare</h3>
              {insuranceOptions.filter(i => i.type === 'Public').map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Public</span>
                      <h4 className="text-xl font-semibold text-gray-900 mt-2">{option.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm"><strong>Coverage:</strong> {option.coverage}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm"><strong>Cost:</strong> {option.cost}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-medium text-green-800 mb-1">Pros:</p>
                      <ul className="text-sm text-green-700">
                        {option.pros.map((pro, idx) => <li key={idx}>✓ {pro}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm font-medium text-red-800 mb-1">Cons:</p>
                      <ul className="text-sm text-red-700">
                        {option.cons.map((con, idx) => <li key={idx}>✗ {con}</li>)}
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500"><strong>Best for:</strong> {option.bestFor}</p>
                </div>
              ))}

              <h3 className="text-xl font-semibold text-gray-900 mt-8">Private Insurance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {insuranceOptions.filter(i => i.type === 'Private').map((option, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Private</span>
                        <h4 className="text-lg font-semibold text-gray-900 mt-2">{option.name}</h4>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                    <p className="text-sm mb-2"><strong>Cost:</strong> <span className="text-emerald-600">{option.cost}</span></p>
                    <p className="text-sm mb-3"><strong>Coverage:</strong> {option.coverage}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="bg-green-50 p-2 rounded">
                        {option.pros.slice(0, 2).map((pro, idx) => <p key={idx} className="text-green-700">✓ {pro}</p>)}
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        {option.cons.slice(0, 2).map((con, idx) => <p key={idx} className="text-red-700">✗ {con}</p>)}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2"><strong>Best for:</strong> {option.bestFor}</p>
                    <a href={option.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">
                      Get Quote →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Get Insurance */}
          <section id="howto-insurance" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">HOW-TO GUIDE</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">7 Steps</span>
                </div>
                <h2 className="text-2xl font-bold">How to Get Health Insurance in Mexico</h2>
                <p className="text-emerald-100">Step-by-step guide for expats</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {getInsuranceSteps.map((item) => (
                    <div key={item.step} className="border-l-4 border-emerald-500 pl-6 py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-sm text-gray-500 ml-auto">{item.time}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <ul className="space-y-1">
                        {item.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-emerald-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pharmacies Section */}
          <section id="pharmacies" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">💊 Pharmacies</h2>
              <p className="text-gray-600">Major pharmacy chains in San Luis Potosí</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pharmacies.map((pharmacy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{pharmacy.name}</h3>
                      <p className="text-gray-500 text-sm">{pharmacy.type}</p>
                    </div>
                    <span className="text-yellow-500">★ {pharmacy.rating}</span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {pharmacy.services.map((service, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="text-emerald-500">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="text-sm">
                      <span className="text-gray-500">Doctor Consult:</span>
                      <span className="font-medium text-emerald-600 ml-1">{pharmacy.doctorConsult}</span>
                    </div>
                    <a href={pharmacy.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">
                      Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Pharmacy-adjacent consultations (roughly $50-120 MXN) are great for minor issues like colds, minor infections, or skin rashes. The doctor can diagnose and prescribe medications on the spot.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                <h2 className="text-2xl font-bold">❓ Frequently Asked Questions</h2>
                <p className="text-amber-100 mt-1">{faqs.length} common questions about healthcare in SLP</p>
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">📚 Sources & References</h2>
              <p className="text-sm text-gray-600 mb-4">
                This guide was compiled using official sources, institutional data, and verified information.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {sources.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      source.type === 'Government' ? 'bg-green-100 text-green-700' :
                      source.type === 'Institution' ? 'bg-blue-100 text-blue-700' :
                      source.type === 'Insurance' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-200 text-gray-700'
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
                Last updated: October 2026 | Prices and information may change. Always verify current rates.
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
            { href: '/resources/expat-guide', label: 'Expat Guide', labelEs: 'Guía Expat' },
            { href: '/resources/living-guide', label: 'Living Guide', labelEs: 'Guía de Vida' },
            { href: '/resources/safety-guide', label: 'Is SLP Safe?', labelEs: '¿Es Seguro SLP?' },
            { href: '/resources/arrival-checklist', label: 'Arrival Checklist', labelEs: 'Checklist de Llegada' },
          ]} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'health-guide'])),
    },
  };
};
