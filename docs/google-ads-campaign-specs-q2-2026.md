# San Luis Way — Google Ads Campaign Specs (Q2 2026)

Ready-to-paste specs for creating the 2 paid Google Ads search campaigns + 1 Meta Ads campaign in the new account `2722801548` (drunkenberger@gmail.com / MCC 1333448633 WAZA MANAGER).

**IMPORTANT — read first:**
- ❌ Never use "FIFA", "World Cup", or "Mundial" in ad copy. Google rejects ads with these trademarks. Use "Mexico 2026", "summer 2026", "host cities Mexico", "soccer tournament" instead.
- ✅ The 4 supporting blog posts are already published with brand-safe copy and ready as landing pages.
- ⚙️ Conversion goal "Newsletter Signup" must be created BEFORE launching campaigns (steps below).

---

## STEP 0 — Setup conversion tracking (do this first)

Order matters — campaigns without conversion tracking optimize blindly.

### 0.1 — Link GA4 to Google Ads
1. Google Ads → Tools & Settings → Linked Accounts → Google Analytics (GA4)
2. Link GA4 property (`G-5R48THR70E`) to customer `2722801548`
3. Confirm link in GA4: Admin → Product Links → Google Ads links

### 0.2 — Import the GA4 `newsletter_signup` event as a conversion
1. Google Ads → Tools & Settings → Conversions → New conversion action
2. Choose "Import → GA4 → Web"
3. Select event: `newsletter_signup`
4. Conversion name: `Newsletter Signup (GA4 import)`
5. Category: `Submit lead form`
6. Value: Don't use a value
7. Count: `One` (one per click)
8. Click-through window: 30 days
9. View-through window: 1 day
10. Attribution: Data-driven
11. Mark as primary conversion

### 0.3 — Insert the new AW gtag in `_app.tsx`
After Google Ads provisions the conversion action, it returns a tag ID like `AW-XXXXXXXXXX`. Add to `src/pages/_app.tsx` next to the existing GA4 script:

```jsx
{/* Google Ads — conversion tracking. Conversion gtag for the
    "Newsletter Signup" import from GA4. AW ID provisioned 2026-04-25. */}
<Script id="google-ads" strategy="lazyOnload">
  {`gtag('config', 'AW-XXXXXXXXXX');`}
</Script>
```

The existing `window.gtag` from GA4 (`G-5R48THR70E`) is reused — we don't add a second `gtag.js` script.

### 0.4 — Verify before launching
1. Visit the site, subscribe a test email
2. Open Google Ads → Conversions → Newsletter Signup → confirm "Receiving conversions" within 24 hours
3. Verify in GA4 DebugView that `newsletter_signup` fires immediately

---

## CAMPAIGN 1 — "SLP Local & México" (Search · Spanish)

### Settings
- **Campaign name:** `Search-ES-Local-Mexico-2026`
- **Goal:** Sales / Leads (use "Website traffic" if asked)
- **Type:** Search
- **Networks:** Google Search only (uncheck Display Network and Search Partners initially)
- **Locations:** San Luis Potosí (city + Soledad), México DF (CDMX), Guadalajara, Monterrey, Querétaro, León. Target "people in or regularly in" (not "interested in").
- **Languages:** Spanish, English
- **Budget:** $50 MXN/day (≈ $1,500/mes)
- **Bidding:** Manual CPC, max bid $5 MXN. Switch to Maximize Conversions after 30 conversions accrued.
- **Start date:** [today]
- **End date:** None (evergreen)
- **Ad rotation:** Optimize for performance
- **Conversions:** Use account default (Newsletter Signup primary)

### Ad Group 1.1 — `Visitar SLP`
**Keywords (Phrase + Broad match)**
```
"que hacer en san luis potosi"
"turismo san luis potosi"
"viajar a san luis potosi"
"san luis potosi turismo"
"parque tangamanga"
"huasteca potosina"
"centro historico san luis"
"que ver en slp"
+visitar +san +luis +potosi
+turismo +slp
```

**Negative keywords (campaign-level)**
```
trabajo, empleo, vacante, vacantes, renta, casa, departamento, compra, venta,
inmuebles, automóviles, autos, refacciones, ferretería, sucursal,
horario, telefono, walmart, oxxo, soriana
```

**Headlines (15 max — Google asks for at least 5)**
1. San Luis Way — Tu guía de SLP
2. Eventos, brunch, parques en SLP
3. Centro Histórico UNESCO en SLP
4. Brunch Potosino: Top 10 lugares
5. Parque Tangamanga: guía 2026
6. Huasteca Potosina: día completo
7. ¿Visitas SLP este verano?
8. Newsletter gratis: lo mejor de SLP
9. La guía más completa de SLP
10. Eventos esta semana en SLP
11. SLP para visitantes 2026
12. Verificado en abril 2026
13. Mejores restaurantes de SLP
14. ¿Qué hacer este fin? SLP
15. Recibe el SLP semanal

**Descriptions (4 max)**
1. Eventos, restaurantes, parques y mucho más. La guía local más completa de San Luis Potosí. Suscríbete gratis y recibe lo mejor cada lunes.
2. Brunch potosino, Centro Histórico UNESCO, Parque Tangamanga, Huasteca. Toda la información que necesitas para SLP.
3. Periodistas, expats y locales nos leen cada lunes. Newsletter gratis, sin spam, en 10 segundos.
4. Cobertura verificada de SLP — eventos, comida, transporte, colonias. La forma inteligente de descubrir la ciudad.

**Final URL:** `https://www.sanluisway.com/es?utm_source=google&utm_medium=cpc&utm_campaign=search_es_local&utm_content=visitar_slp`

**Sitelinks (4)**
- Brunch en SLP → `/es/blog/best-brunch-spots-san-luis-potosi`
- Parques para niños → `/es/blog/best-parks-for-kids-san-luis-potosi`
- Newsletter → `/es/subscribe`
- Mexico 2026 stopover → `/es/blog/mexico-2026-stopover-san-luis-potosi`

**Callouts (4)**
- Newsletter gratis · Sin spam
- Verificado abril 2026
- Lo leen 2,800+ personas
- Cobertura local profunda

### Ad Group 1.2 — `Mudarse a SLP`
**Keywords**
```
"vivir en san luis potosi"
"mudarse a san luis potosi"
"calidad de vida slp"
"expat san luis potosi"
"como es vivir en slp"
"san luis potosi para expats"
"costo de vida san luis potosi"
+expat +slp
+mudarse +mexico +slp
```

**Headlines**
1. ¿Pensando en mudarte a SLP?
2. La guía completa para expats en SLP
3. Costo de vida verificado abril 2026
4. SLP vs San Miguel de Allende
5. Mejores colonias en San Luis Potosí
6. Vivir en SLP: lo bueno y lo malo
7. Newsletter para expats en SLP
8. Comunidad expat en SLP
9. Servicios, salud, escuelas en SLP
10. La guía local más completa
11. Visa, renta, transporte en SLP
12. Recibe consejos gratis cada lunes

**Descriptions**
1. Guía verificada para expats: costo de vida, mejores colonias, transporte, escuelas, salud. Newsletter gratis cada lunes.
2. ¿Mudarte a SLP en 2026? La guía honesta que no te dan los influencers. Verificada en abril 2026.
3. Comparativos SLP vs San Miguel, costos reales, comunidad expat. La forma inteligente de planear tu mudanza.
4. Más de 2,800 personas leen el SLP semanal — periodistas, expats, locales. Únete gratis.

**Final URL:** `https://www.sanluisway.com/es/resources/expat-guide?utm_source=google&utm_medium=cpc&utm_campaign=search_es_local&utm_content=mudarse_slp`

### Ad Group 1.3 — `Brand Defense`
**Keywords (Exact match)**
```
[san luis way]
[sanluisway]
[san luis way slp]
[directorio san luis potosi]
"san luis way newsletter"
```

**Headlines**
1. San Luis Way — La guía oficial de SLP
2. Sitio oficial de San Luis Way
3. Newsletter semanal gratis — SLP
4. La guía más completa de San Luis Potosí
5. Eventos, comida, transporte, colonias
6. Lo leen 2,800+ personas cada lunes
7. Verificado abril 2026

**Descriptions**
1. San Luis Way es la guía local independiente de San Luis Potosí. Eventos, restaurantes, parques, transporte, colonias. Newsletter gratis cada lunes.
2. Si buscas información honesta y verificada de SLP, llegaste al lugar correcto. 2,800+ suscriptores activos.

**Final URL:** `https://www.sanluisway.com/?utm_source=google&utm_medium=cpc&utm_campaign=search_es_local&utm_content=brand`

---

## CAMPAIGN 2 — "Expat DE/JA Moonshot" (Search · German + Japanese)

### Settings
- **Campaign name:** `Search-DE-JA-Expat-Moonshot`
- **Type:** Search
- **Networks:** Google Search only
- **Locations:** Germany, Austria, Switzerland (German); Japan (Japanese). Target "people in or regularly in".
- **Languages:** German + Japanese (one campaign with 2 ad groups, one per language)
- **Budget:** $50 MXN/day (≈ $1,500/mes), default split 60% DE / 40% JA
- **Bidding:** Manual CPC, max bid $8 MXN
- **Start date:** [today]
- **End date:** None

### Ad Group 2.1 — `DE — Umzug Mexiko`
**Keywords**
```
"umzug nach mexiko"
"auswandern mexiko"
"leben in mexiko"
"mexiko expat"
"san luis potosi deutsch"
+auswandern +mexiko
```

**Negatives:** `tourist, vacation, urlaub, reise, kurzurlaub`

**Headlines (German)**
1. Auswandern nach Mexiko 2026
2. Leben in San Luis Potosí
3. Der Insider-Guide für Expats in SLP
4. Newsletter — Mexiko-Leben verstehen
5. Visa, Mietpreise, Lebensqualität SLP
6. Mexiko-Auswanderer-Community SLP
7. Aktualisiert April 2026
8. Kostenloser Newsletter aus Mexiko

**Descriptions**
1. Verifizierter Guide für deutsche Auswanderer in San Luis Potosí: Visa, Wohnen, Schulen, Gesundheit. Kostenloser wöchentlicher Newsletter.
2. Sie planen Mexiko 2026? Der ehrliche Guide ohne Influencer-Hype. Aktualisiert April 2026.

**Final URL:** `https://www.sanluisway.com/de/resources/living-guide?utm_source=google&utm_medium=cpc&utm_campaign=search_de_ja&utm_content=umzug_mexiko`

### Ad Group 2.2 — `JA — Mexico Iju`
**Keywords**
```
"メキシコ 移住"
"メキシコ 駐在"
"メキシコ 生活"
"サン・ルイス・ポトシ"
+メキシコ +移住
```

**Negatives:** `観光, 旅行, 短期`

**Headlines (Japanese)**
1. メキシコ移住ガイド 2026
2. サン・ルイス・ポトシで暮らす
3. 移住者向けインサイダーガイド
4. メキシコ生活ニュースレター
5. ビザ・住居・生活費を確認
6. メキシコ駐在者コミュニティ
7. 2026年4月更新
8. 無料週刊メールマガジン

**Descriptions**
1. 日本人駐在員・移住者のための信頼できるサン・ルイス・ポトシガイド：ビザ、住居、学校、医療。無料の週刊ニュースレター。
2. 2026年メキシコ移住をお考えですか？インフルエンサーの誇大宣伝なしの正直なガイド。

**Final URL:** `https://www.sanluisway.com/ja/resources/living-guide?utm_source=google&utm_medium=cpc&utm_campaign=search_de_ja&utm_content=mexico_iju`

---

## CAMPAIGN 3 — "Newsletter Growth" (Meta Ads · Lookalike + Interest)

### Account setup
- Use existing Meta Pixel `1916912242550142` (already on every page after _app.tsx move).
- Confirm in Events Manager that `Lead` event fires when newsletter form is submitted (we wired this in `analytics.ts`).

### Settings
- **Campaign name:** `Meta-Newsletter-Growth-2026Q2`
- **Objective:** Leads
- **Budget:** $50 MXN/day (≈ $1,500/mes)
- **Optimization:** For Leads, optimization for `Lead` event
- **Schedule:** Standard delivery

### Ad Set 3.1 — `Lookalike 1% (Beehiiv subscribers)`
- **Audience:** Lookalike 1% of Custom Audience "Beehiiv Active Subscribers"
  - Build the Custom Audience by exporting current 2,800+ active Beehiiv subscriber emails to CSV, uploading to Meta Audience Manager
- **Locations:** Mexico, USA, Canada
- **Age:** 28–60
- **Languages:** All
- **Placements:** Auto (Meta + Instagram + Audience Network)

### Ad Set 3.2 — `Interest: Living in Mexico (English)`
- **Audience:** Interests: "Mexico travel" + "Retire abroad" + "Expat" + "Travel + Leisure"
- **Locations:** USA, Canada, UK
- **Age:** 35–65
- **Languages:** English
- **Placements:** Auto

### Ad Set 3.3 — `Retargeting (blog visitors not subscribed)`
- **Audience:** Custom Audience "Blog visitors last 30 days" MINUS Custom Audience "Newsletter subscribers (Pixel)"
- **Locations:** All
- **Age:** All
- **Languages:** All
- **Placements:** Auto

### Creatives (3 per ad set, A/B)

**Ad 1 — Image of Tangamanga**
- Image: Parque Tangamanga banner
- Headline: "Vive lo mejor de San Luis Potosí" / "Discover the best of San Luis Potosí"
- Primary text: "Cada lunes mandamos eventos, restaurantes y tips locales. Gratis, en 10 segundos." / "Every Monday: events, restaurants, local tips. Free, takes 10 seconds."
- CTA: Subscribe → `/subscribe?utm_source=meta&utm_medium=cpc&utm_campaign=newsletter_growth_q2_2026&utm_content=tangamanga`

**Ad 2 — Image of Centro Histórico**
- Image: SLP cathedral / Centro
- Headline: "La guía local de San Luis Potosí" / "Your local guide to San Luis Potosí"
- Primary text: "Periodistas, expats y locales nos leen. Tú también puedes. Newsletter gratis." / "Journalists, expats, and locals read us. So can you. Free newsletter."
- CTA: Subscribe → same URL with `utm_content=centro`

**Ad 3 — Image of brunch / enchiladas potosinas**
- Image: Enchiladas potosinas
- Headline: "Descubre el mejor brunch en SLP" / "Discover the best brunch in SLP"
- Primary text: "Mejores lugares verificados, eventos esta semana, lo nuevo en la ciudad. Cada lunes gratis." / "Verified best spots, this week's events, what's new. Every Monday, free."
- CTA: Subscribe → same URL with `utm_content=brunch`

---

## Launch Order & Soft-Launch Triggers

### Day of launch
1. Google Ads Campaign 1 (SLP Local) — start at $30 MXN/day for 48h to verify ad approval
2. Google Ads Campaign 2 (DE/JA) — same: $30 MXN/day for 48h
3. Meta Newsletter Growth — start full $50 MXN/day immediately (Meta optimizer needs faster signal)

### After 48h ramp to full budget
- Google Ads: scale to $50 MXN/day if CTR > 2% and ads not paused for policy

### After 7 days — pause/optimize trigger conditions
Pause an ad group if any of:
- CPC > 2× target ($10 MXN for ES Local, $16 MXN for DE/JA)
- CTR < 1.5% on Search ads
- 0 conversions with $300 MXN spent

Iterate on:
- Add negatives from search-terms report (run weekly)
- Pause underperforming keywords (CTR < 0.8%)
- Test new headline variants in winning ad groups

---

## Reporting Cadence

### Weekly metrics to track
- Impressions, CTR, CPC, Conversions, Cost per Conversion
- Search-terms report (find unwanted matches → add as negatives)
- Quality Score per keyword (target 6+; below 4 = pause and rewrite)
- Newsletter growth: Beehiiv weekly subscribers vs. baseline

### Monthly report
- Cost per Newsletter Signup (target: <$100 MXN by month 3)
- Top 5 winning keywords / ad groups
- Geographic performance breakdown
- Spend by campaign vs. budget

If month-3 Cost per Signup > $200 MXN, pause Google Search and reallocate to Meta.

---

## Notes on FIFA / World Cup language

These are blocked in ad copy (Google trademark policy):
- ❌ "FIFA"
- ❌ "World Cup" / "WorldCup"
- ❌ "Mundial"
- ❌ "Copa del Mundo"
- ❌ "Estadio Azteca" + "match" / "ticket" combos that imply official affiliation

These are SAFE in ad copy:
- ✅ "Mexico 2026"
- ✅ "summer 2026 in Mexico"
- ✅ "host cities Mexico"
- ✅ "the soccer tournament"
- ✅ "matches in Mexico City / Guadalajara / Monterrey"
- ✅ "football fans visiting Mexico"
- ✅ "between matches"

The 4 supporting blog posts (`mexico-2026-stopover`, `mexico-city-to-guadalajara-road-trip`, `10-underrated-mexican-cities`, `direct-flights-from-texas-to-san-luis-potosi`) follow this discipline.
