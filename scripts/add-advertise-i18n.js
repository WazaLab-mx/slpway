/**
 * One-shot: inject the `advertise` namespace into each locale's common.json.
 * Idempotent — re-running overwrites the advertise key with the latest copy.
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'es', 'de', 'ja'];
const ROOT = path.join(__dirname, '..', 'public', 'locales');

const advertise = {
  en: {
    seo: {
      title: 'Advertise with San Luis Way - Reach Your Audience in San Luis Potosí',
      description: 'Grow your brand in San Luis Potosí with site banners, newsletter sponsorships, sponsored content, brand stories and special mentions. Reach locals, expats and visitors.',
      keywords: 'advertising, marketing, San Luis Potosí, banners, newsletter sponsorship, sponsored content, brand stories, local brands'
    },
    hero: {
      titlePrefix: 'Grow Your Brand in',
      titleHighlight: 'San Luis Potosí',
      subtitle: 'Reach our engaged community of locals, expats and visitors through premium advertising on the website and the weekly newsletter.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'View Options'
    },
    whyUs: {
      title: 'Why Choose San Luis Way?',
      subtitle: "We're the leading platform to discover and connect with the best of San Luis Potosí",
      audience: { title: 'Engaged Audience', desc: 'Our community actively looks for new experiences, services and local products. They are ready-to-act consumers.' },
      authority: { title: 'Local Authority', desc: 'We are the trusted source for the best of SLP. Your brand benefits from our reputation and credibility.' },
      results: { title: 'Measurable Results', desc: 'Receive detailed reports on campaign performance with clear, actionable metrics.' }
    },
    options: {
      title: 'Advertising Options',
      subtitle: 'Choose the perfect option to grow your brand and connect with new customers',
      siteBanners: {
        title: 'Site Banners',
        subtitle: 'Premium visibility on sanluisway.com',
        bullets: [
          'Banners on the homepage and high-traffic pages',
          'Formats: leaderboard, rectangle, skyscraper',
          'Targeting by location and category',
          'Impression and click reporting',
          'Design included by our team'
        ],
        cta: 'Request Information'
      },
      newsletterSponsorship: {
        title: 'Newsletter Sponsorships',
        subtitle: 'Reach 900+ engaged inboxes every week',
        bullets: [
          'Sponsored banner inside the weekly newsletter (top, middle or bottom placement)',
          "Branded mention in 'Around Town' or a relevant section",
          'Direct delivery to subscribers (locals + expats)',
          'Click and open analytics shared after every send',
          'Multi-week packages with rotation discounts'
        ],
        cta: 'Sponsor the Newsletter'
      },
      sponsoredContent: {
        title: 'Sponsored Content',
        subtitle: 'Articles and blog posts that build trust',
        bullets: [
          '800-1200 word blog posts on sanluisway.com',
          'On-page SEO optimization included',
          'Promotion across social channels',
          'Professional photography included',
          'Distribution in our weekly newsletter'
        ],
        cta: 'Create Content'
      },
      brandStories: {
        title: 'Brand Stories',
        subtitle: 'In-depth stories about your business',
        bullets: [
          'Interviews with founders and owners',
          'Professional photo shoot',
          'Promotional video (optional)',
          'Position your brand as a local leader',
          'Multi-platform distribution'
        ],
        cta: 'Tell My Story'
      },
      specialMentions: {
        title: 'Special Mentions',
        subtitle: 'Featured in guides and curated lists',
        bullets: [
          'Inclusion in topical guides',
          "'Recommended by SLW' badges",
          "Editorial 'Best of SLP' lists",
          'Mention in the weekly newsletter',
          'Presence at virtual events'
        ],
        cta: 'Get Featured'
      }
    },
    packages: {
      title: 'Bundled Packages',
      subtitle: 'Combine multiple services for maximum impact and savings',
      perMonth: '/mo',
      popular: 'Most Popular',
      yearlySavings: 'Save 17% with the annual plan',
      basic: {
        name: 'Basic',
        tagline: 'Perfect to get started',
        price: '$1,500',
        features: ['1 Site banner', '1 Newsletter mention', '1 Special mention', 'Monthly performance report'],
        cta: 'Request Pricing'
      },
      premium: {
        name: 'Premium',
        tagline: 'Maximum visibility',
        price: '$3,000',
        features: ['3 Banners in premium placements', '1 Newsletter sponsorship per month', '2 Sponsored blog posts', '1 Brand story', 'Multiple special mentions'],
        cta: 'Request Pricing'
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Custom solution',
        price: '$5,000+',
        priceNote: 'Tailored to your specific needs',
        features: ['360° custom campaign', 'Unlimited content', 'Recurring newsletter sponsorship', 'Dedicated account manager', 'Advanced analytics and reporting'],
        cta: 'Contact Now'
      }
    },
    process: {
      title: 'Our Process',
      subtitle: 'We work with you step by step to build the perfect campaign',
      steps: [
        { title: 'Initial Consultation', desc: 'We learn about your goals and target audience' },
        { title: 'Custom Proposal', desc: 'We craft a strategy specific to your brand' },
        { title: 'Content Creation', desc: 'Our team produces all the materials' },
        { title: 'Results & Analysis', desc: 'We measure impact and continuously optimize' }
      ]
    },
    cta: {
      title: 'Ready to Grow Your Brand?',
      subtitle: 'Join the brands that trust San Luis Way to reach their ideal audience',
      primary: 'Start My Campaign',
      secondary: 'Request Information',
      note: 'Reply within 24 hours • Free initial consultation'
    },
    questions: {
      title: 'Have Questions?',
      subtitle: 'Our team is here to help you find the perfect solution for your brand',
      sendMessage: 'Send Message'
    }
  },

  es: {
    seo: {
      title: 'Publicita con San Luis Way - Conecta con tu Audiencia en San Luis Potosí',
      description: 'Haz crecer tu marca en San Luis Potosí con banners en el sitio, patrocinios del newsletter, contenido patrocinado, reportajes y menciones especiales.',
      keywords: 'publicidad, marketing, San Luis Potosí, banners, patrocinio newsletter, contenido patrocinado, reportajes, marcas locales'
    },
    hero: {
      titlePrefix: 'Haz Crecer Tu Marca en',
      titleHighlight: 'San Luis Potosí',
      subtitle: 'Conecta con nuestra audiencia comprometida de locales, expatriados y visitantes a través de publicidad premium en el sitio y el newsletter semanal.',
      ctaPrimary: 'Comienza Hoy',
      ctaSecondary: 'Ver Opciones'
    },
    whyUs: {
      title: '¿Por Qué Elegir San Luis Way?',
      subtitle: 'Somos la plataforma líder para descubrir y conectar con lo mejor de San Luis Potosí',
      audience: { title: 'Audiencia Comprometida', desc: 'Nuestra comunidad busca activamente nuevas experiencias, servicios y productos locales. Son consumidores listos para actuar.' },
      authority: { title: 'Autoridad Local', desc: 'Somos la fuente confiable para descubrir lo mejor de SLP. Tu marca se beneficia de nuestra reputación y credibilidad.' },
      results: { title: 'Resultados Medibles', desc: 'Recibe reportes detallados sobre el rendimiento de tu campaña con métricas claras y accionables.' }
    },
    options: {
      title: 'Opciones de Publicidad',
      subtitle: 'Elige la opción perfecta para hacer crecer tu marca y conectar con nuevos clientes',
      siteBanners: {
        title: 'Banners en el Sitio',
        subtitle: 'Visibilidad premium en sanluisway.com',
        bullets: [
          'Banners en homepage y páginas de alto tráfico',
          'Formatos: leaderboard, rectángulo, skyscraper',
          'Targeting por ubicación y categoría',
          'Reportes de impresiones y clicks',
          'Diseño incluido por nuestro equipo'
        ],
        cta: 'Solicitar Información'
      },
      newsletterSponsorship: {
        title: 'Patrocinio del Newsletter',
        subtitle: 'Llega a +900 inboxes comprometidos cada semana',
        bullets: [
          'Banner patrocinado dentro del newsletter semanal (posición top, middle o bottom)',
          "Mención de marca en 'Around Town' o sección relevante",
          'Entrega directa a suscriptores (locales + expatriados)',
          'Reporte de clicks y aperturas tras cada envío',
          'Paquetes multi-semana con descuentos por rotación'
        ],
        cta: 'Patrocinar el Newsletter'
      },
      sponsoredContent: {
        title: 'Contenido Patrocinado',
        subtitle: 'Artículos y blog posts que construyen confianza',
        bullets: [
          'Blog posts de 800-1200 palabras en sanluisway.com',
          'Optimización SEO en página incluida',
          'Promoción en redes sociales',
          'Fotografía profesional incluida',
          'Distribución en nuestro newsletter semanal'
        ],
        cta: 'Crear Contenido'
      },
      brandStories: {
        title: 'Reportajes de Marca',
        subtitle: 'Historias profundas sobre tu negocio',
        bullets: [
          'Entrevistas con fundadores y propietarios',
          'Sesión fotográfica profesional',
          'Video promocional (opcional)',
          'Posicionamiento como líder local',
          'Distribución multiplataforma'
        ],
        cta: 'Contar Mi Historia'
      },
      specialMentions: {
        title: 'Menciones Especiales',
        subtitle: 'Destacados en guías y listados curados',
        bullets: [
          'Inclusión en guías temáticas',
          "Badges 'Recomendado por SLW'",
          "Listados editoriales 'Lo Mejor de SLP'",
          'Mención en el newsletter semanal',
          'Presencia en eventos virtuales'
        ],
        cta: 'Ser Destacado'
      }
    },
    packages: {
      title: 'Paquetes Integrales',
      subtitle: 'Combina múltiples servicios para máximo impacto y ahorro',
      perMonth: '/mes',
      popular: 'Más Popular',
      yearlySavings: 'Ahorra 17% con el plan anual',
      basic: {
        name: 'Básico',
        tagline: 'Perfecto para empezar',
        price: '$1,500',
        features: ['1 Banner en el sitio', '1 Mención en el newsletter', '1 Mención especial', 'Reporte mensual de desempeño'],
        cta: 'Consultar Precio'
      },
      premium: {
        name: 'Premium',
        tagline: 'Máxima visibilidad',
        price: '$3,000',
        features: ['3 Banners en ubicaciones premium', '1 Patrocinio del newsletter al mes', '2 Blog posts patrocinados', '1 Reportaje de marca', 'Múltiples menciones especiales'],
        cta: 'Consultar Precio'
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Solución personalizada',
        price: '$5,000+',
        priceNote: 'Adaptado a tus necesidades específicas',
        features: ['Campaña 360° personalizada', 'Contenido ilimitado', 'Patrocinio recurrente del newsletter', 'Account manager dedicado', 'Análisis avanzado y reportes'],
        cta: 'Contactar Ahora'
      }
    },
    process: {
      title: 'Nuestro Proceso',
      subtitle: 'Trabajamos contigo paso a paso para crear la campaña perfecta',
      steps: [
        { title: 'Consulta Inicial', desc: 'Entendemos tus objetivos y audiencia objetivo' },
        { title: 'Propuesta Personalizada', desc: 'Creamos una estrategia específica para tu marca' },
        { title: 'Creación de Contenido', desc: 'Nuestro equipo desarrolla todos los materiales' },
        { title: 'Resultados y Análisis', desc: 'Medimos el impacto y optimizamos continuamente' }
      ]
    },
    cta: {
      title: '¿Listo para Hacer Crecer Tu Marca?',
      subtitle: 'Únete a las marcas que confían en San Luis Way para conectar con su audiencia ideal',
      primary: 'Empezar Mi Campaña',
      secondary: 'Solicitar Información',
      note: 'Respuesta en 24 horas • Consulta inicial gratuita'
    },
    questions: {
      title: '¿Tienes Preguntas?',
      subtitle: 'Nuestro equipo está aquí para ayudarte a encontrar la solución perfecta para tu marca',
      sendMessage: 'Enviar Mensaje'
    }
  },

  de: {
    seo: {
      title: 'Werbung auf San Luis Way - Erreichen Sie Ihre Zielgruppe in San Luis Potosí',
      description: 'Lassen Sie Ihre Marke in San Luis Potosí wachsen mit Bannern, Newsletter-Sponsoring, gesponserten Inhalten, Markengeschichten und besonderen Erwähnungen.',
      keywords: 'Werbung, Marketing, San Luis Potosí, Banner, Newsletter-Sponsoring, gesponserte Inhalte, Markengeschichten, lokale Marken'
    },
    hero: {
      titlePrefix: 'Lassen Sie Ihre Marke wachsen in',
      titleHighlight: 'San Luis Potosí',
      subtitle: 'Verbinden Sie sich mit unserer engagierten Community aus Einheimischen, Expats und Besuchern – über die Website und den wöchentlichen Newsletter.',
      ctaPrimary: 'Jetzt starten',
      ctaSecondary: 'Optionen ansehen'
    },
    whyUs: {
      title: 'Warum San Luis Way?',
      subtitle: 'Wir sind die führende Plattform, um das Beste von San Luis Potosí zu entdecken',
      audience: { title: 'Engagierte Zielgruppe', desc: 'Unsere Community sucht aktiv nach neuen Erlebnissen, Dienstleistungen und lokalen Produkten – Konsumenten, die bereit sind zu handeln.' },
      authority: { title: 'Lokale Autorität', desc: 'Wir sind die vertrauenswürdige Quelle für das Beste von SLP. Ihre Marke profitiert von unserem Ruf und unserer Glaubwürdigkeit.' },
      results: { title: 'Messbare Ergebnisse', desc: 'Erhalten Sie detaillierte Berichte zur Kampagnenleistung mit klaren, umsetzbaren Kennzahlen.' }
    },
    options: {
      title: 'Werbeoptionen',
      subtitle: 'Wählen Sie die perfekte Option, um Ihre Marke wachsen zu lassen',
      siteBanners: {
        title: 'Website-Banner',
        subtitle: 'Premium-Sichtbarkeit auf sanluisway.com',
        bullets: [
          'Banner auf der Startseite und Top-Seiten',
          'Formate: Leaderboard, Rechteck, Skyscraper',
          'Targeting nach Ort und Kategorie',
          'Impression- und Klick-Reports',
          'Design durch unser Team inklusive'
        ],
        cta: 'Information anfordern'
      },
      newsletterSponsorship: {
        title: 'Newsletter-Sponsoring',
        subtitle: 'Erreichen Sie über 900 engagierte Postfächer pro Woche',
        bullets: [
          'Gesponsertes Banner im wöchentlichen Newsletter (oben, Mitte oder unten)',
          "Markenerwähnung in 'Around Town' oder einer passenden Sektion",
          'Direkte Zustellung an Abonnenten (Einheimische + Expats)',
          'Klick- und Öffnungs-Analyse nach jedem Versand',
          'Mehrwöchige Pakete mit Rotationsrabatten'
        ],
        cta: 'Newsletter sponsern'
      },
      sponsoredContent: {
        title: 'Gesponserte Inhalte',
        subtitle: 'Artikel und Blogbeiträge, die Vertrauen aufbauen',
        bullets: [
          'Blogbeiträge mit 800–1200 Wörtern auf sanluisway.com',
          'On-Page-SEO-Optimierung inklusive',
          'Promotion auf Social Media',
          'Professionelle Fotografie inklusive',
          'Distribution im wöchentlichen Newsletter'
        ],
        cta: 'Inhalte erstellen'
      },
      brandStories: {
        title: 'Markengeschichten',
        subtitle: 'Tiefgehende Geschichten über Ihr Unternehmen',
        bullets: [
          'Interviews mit Gründern und Inhabern',
          'Professionelles Foto-Shooting',
          'Promovideo (optional)',
          'Positionierung als lokaler Marktführer',
          'Multi-Plattform-Distribution'
        ],
        cta: 'Meine Geschichte erzählen'
      },
      specialMentions: {
        title: 'Besondere Erwähnungen',
        subtitle: 'Hervorhebung in Guides und kuratierten Listen',
        bullets: [
          'Aufnahme in thematische Guides',
          "Badges 'Empfohlen von SLW'",
          "Redaktionelle 'Best of SLP'-Listen",
          'Erwähnung im wöchentlichen Newsletter',
          'Präsenz bei virtuellen Events'
        ],
        cta: 'Hervorgehoben werden'
      }
    },
    packages: {
      title: 'Komplettpakete',
      subtitle: 'Kombinieren Sie mehrere Services für maximale Wirkung und Ersparnis',
      perMonth: '/Monat',
      popular: 'Am beliebtesten',
      yearlySavings: '17% sparen mit dem Jahresplan',
      basic: {
        name: 'Basis',
        tagline: 'Perfekt für den Einstieg',
        price: '$1,500',
        features: ['1 Website-Banner', '1 Newsletter-Erwähnung', '1 Besondere Erwähnung', 'Monatlicher Performance-Bericht'],
        cta: 'Preise anfragen'
      },
      premium: {
        name: 'Premium',
        tagline: 'Maximale Sichtbarkeit',
        price: '$3,000',
        features: ['3 Banner an Premium-Platzierungen', '1 Newsletter-Sponsoring pro Monat', '2 Gesponserte Blogbeiträge', '1 Markengeschichte', 'Mehrere besondere Erwähnungen'],
        cta: 'Preise anfragen'
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Maßgeschneiderte Lösung',
        price: '$5,000+',
        priceNote: 'Auf Ihre spezifischen Bedürfnisse zugeschnitten',
        features: ['360°-Kampagne nach Maß', 'Unbegrenzte Inhalte', 'Wiederkehrendes Newsletter-Sponsoring', 'Persönlicher Account Manager', 'Erweiterte Analyse und Reporting'],
        cta: 'Jetzt Kontakt aufnehmen'
      }
    },
    process: {
      title: 'Unser Prozess',
      subtitle: 'Wir arbeiten Schritt für Schritt mit Ihnen, um die perfekte Kampagne zu gestalten',
      steps: [
        { title: 'Erstgespräch', desc: 'Wir lernen Ihre Ziele und Zielgruppe kennen' },
        { title: 'Maßgeschneidertes Angebot', desc: 'Wir entwerfen eine Strategie speziell für Ihre Marke' },
        { title: 'Content-Erstellung', desc: 'Unser Team produziert alle Materialien' },
        { title: 'Ergebnisse & Analyse', desc: 'Wir messen die Wirkung und optimieren laufend' }
      ]
    },
    cta: {
      title: 'Bereit, Ihre Marke wachsen zu lassen?',
      subtitle: 'Schließen Sie sich den Marken an, die San Luis Way vertrauen, um ihre ideale Zielgruppe zu erreichen',
      primary: 'Kampagne starten',
      secondary: 'Information anfordern',
      note: 'Antwort innerhalb von 24 Stunden • Kostenlose Erstberatung'
    },
    questions: {
      title: 'Fragen?',
      subtitle: 'Unser Team hilft Ihnen, die perfekte Lösung für Ihre Marke zu finden',
      sendMessage: 'Nachricht senden'
    }
  },

  ja: {
    seo: {
      title: 'San Luis Wayで広告 - サンルイスポトシのオーディエンスにリーチ',
      description: 'バナー広告、ニュースレタースポンサーシップ、スポンサードコンテンツ、ブランドストーリー、特集掲載でサンルイスポトシのブランド成長を実現。',
      keywords: '広告, マーケティング, サンルイスポトシ, バナー, ニュースレタースポンサー, スポンサードコンテンツ, ブランドストーリー'
    },
    hero: {
      titlePrefix: 'あなたのブランドを',
      titleHighlight: 'サンルイスポトシで成長',
      subtitle: 'ウェブサイトと毎週のニュースレターを通じて、地元の人々、駐在員、訪問者からなる関心の高いコミュニティにリーチします。',
      ctaPrimary: '今すぐ始める',
      ctaSecondary: 'オプションを見る'
    },
    whyUs: {
      title: 'San Luis Wayが選ばれる理由',
      subtitle: 'サンルイスポトシの魅力を発見し、つながりを生む主要プラットフォームです',
      audience: { title: '関心の高いオーディエンス', desc: '新しい体験、サービス、地元の商品を積極的に探しているコミュニティ。行動意欲の高い消費者にリーチできます。' },
      authority: { title: 'ローカルの権威', desc: 'SLPの最良を伝える信頼できる情報源です。当社の評判と信頼性をブランドに活用できます。' },
      results: { title: '測定可能な成果', desc: '明確で実行可能な指標とともに、キャンペーンのパフォーマンスを詳細にレポートします。' }
    },
    options: {
      title: '広告オプション',
      subtitle: 'ブランドの成長と新規顧客との接点を生む最適な選択肢を見つけましょう',
      siteBanners: {
        title: 'サイトバナー',
        subtitle: 'sanluisway.comでのプレミアム露出',
        bullets: [
          'ホームページおよび主要ページに掲載',
          'フォーマット：リーダーボード、レクタングル、スカイスクレイパー',
          'ロケーション・カテゴリーによるターゲティング',
          'インプレッションとクリックのレポート',
          '弊社チームによるデザイン込み'
        ],
        cta: '情報を依頼'
      },
      newsletterSponsorship: {
        title: 'ニュースレタースポンサーシップ',
        subtitle: '毎週900以上の関心の高い受信箱にリーチ',
        bullets: [
          '週刊ニュースレター内のスポンサーバナー（上部・中央・下部から選択）',
          '「Around Town」や関連セクションでのブランドメンション',
          '購読者へ直接配信（地元住民＋駐在員）',
          '送信ごとにクリック・開封レポートを共有',
          '複数週パッケージにローテーション割引あり'
        ],
        cta: 'ニュースレターをスポンサーする'
      },
      sponsoredContent: {
        title: 'スポンサードコンテンツ',
        subtitle: '信頼を構築する記事・ブログ投稿',
        bullets: [
          'sanluisway.com上の800〜1200語のブログ記事',
          'オンページSEO最適化込み',
          'ソーシャルメディアでのプロモーション',
          'プロフェッショナル写真撮影込み',
          '週刊ニュースレターでの配信'
        ],
        cta: 'コンテンツを作成'
      },
      brandStories: {
        title: 'ブランドストーリー',
        subtitle: 'あなたのビジネスを深く伝える物語',
        bullets: [
          '創業者・オーナーへのインタビュー',
          'プロフェッショナル写真撮影',
          'プロモーション動画（オプション）',
          'ローカルリーダーとしてのブランド位置付け',
          'マルチプラットフォームでの配信'
        ],
        cta: '私のストーリーを伝える'
      },
      specialMentions: {
        title: '特集掲載',
        subtitle: 'ガイドやキュレーションリストで紹介',
        bullets: [
          'テーマ別ガイドへの掲載',
          '「SLW推薦」バッジ',
          '編集による「Best of SLP」リスト',
          '週刊ニュースレターでのメンション',
          'オンラインイベントでの存在感'
        ],
        cta: '特集に掲載'
      }
    },
    packages: {
      title: '総合パッケージ',
      subtitle: '複数のサービスを組み合わせて最大の効果と節約を',
      perMonth: '/月',
      popular: '最も人気',
      yearlySavings: '年間プランで17%節約',
      basic: {
        name: 'ベーシック',
        tagline: '始めるのに最適',
        price: '$1,500',
        features: ['サイトバナー1枠', 'ニュースレターメンション1回', '特集掲載1回', '月次パフォーマンスレポート'],
        cta: '料金を確認'
      },
      premium: {
        name: 'プレミアム',
        tagline: '最大限の露出',
        price: '$3,000',
        features: ['プレミアム枠のバナー3枠', '月1回のニュースレタースポンサーシップ', 'スポンサードブログ記事2本', 'ブランドストーリー1本', '特集掲載 複数回'],
        cta: '料金を確認'
      },
      enterprise: {
        name: 'エンタープライズ',
        tagline: 'カスタムソリューション',
        price: '$5,000+',
        priceNote: 'ニーズに合わせた個別設計',
        features: ['360°カスタムキャンペーン', 'コンテンツ無制限', '継続的なニュースレタースポンサーシップ', '専任アカウントマネージャー', '高度な分析とレポーティング'],
        cta: '今すぐ問い合わせる'
      }
    },
    process: {
      title: '私たちのプロセス',
      subtitle: '完璧なキャンペーンをご一緒にステップごとに構築します',
      steps: [
        { title: '初回コンサルテーション', desc: '目標とターゲットオーディエンスを把握します' },
        { title: 'カスタム提案', desc: 'ブランド独自の戦略を設計します' },
        { title: 'コンテンツ制作', desc: '弊社チームが全素材を制作します' },
        { title: '成果と分析', desc: '効果を測定し、継続的に最適化します' }
      ]
    },
    cta: {
      title: 'ブランドを成長させる準備はできましたか？',
      subtitle: '理想的なオーディエンスにリーチするためにSan Luis Wayを信頼するブランドに加わりましょう',
      primary: 'キャンペーンを開始',
      secondary: '情報を依頼',
      note: '24時間以内に返信 • 初回コンサルテーション無料'
    },
    questions: {
      title: 'ご質問は？',
      subtitle: 'あなたのブランドに最適なソリューションを見つけるサポートをします',
      sendMessage: 'メッセージを送る'
    }
  }
};

for (const loc of LOCALES) {
  const file = path.join(ROOT, loc, 'common.json');
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  json.advertise = advertise[loc];
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✅ ${loc}: advertise namespace written (${Object.keys(advertise[loc]).length} top-level keys)`);
}
