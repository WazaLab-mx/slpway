# San Luis Way Newsletter — Style & System Guide

Accurate reference for how the **San Luis Way Weekly** is generated, structured, and shipped. Reflects the real code in `src/lib/newsletter-*.ts` (rewritten 2026-07-13; the previous version described an older 8-pillar/meme layout that no longer exists).

---

## 1. Overview

| Field | Value |
|-------|-------|
| **Name** | San Luis Way Weekly |
| **Cadence** | Weekly (covers a rolling 7-day window from generation day) |
| **Audience** | Expats, repatriados, tourists, and locals in San Luis Potosí |
| **Tone** | Friendly, informed, conversational — a knowledgeable friend who lives in SLP |
| **Language** | English primary, Spanish sprinkled naturally for local flavor |
| **Delivery** | Beehiiv (publication `pub_e94d7f88…`, ~850 active subs) |
| **Model** | OpenAI GPT-5.4 (primary, web-search grounded) → Gemini 2.0 Flash (fallback, Google Search grounded) |

**Philosophy:** not an events calendar — a weekly *digest of Potosino life*: news that affects daily life, events worth attending, practical expat know-how, and culture/discovery. Every item is specific and actionable (real dates, addresses, MXN prices, +52 numbers).

---

## 2. Human-gated workflow (do NOT automate sending)

The newsletter is generated and reviewed **manually**. There is no auto-send.

1. **Admin → `/admin/newsletter` → "Generate Newsletter"** (optionally add Comunidad content + select sponsor ads).
2. Generator runs the full pipeline (see §3) and creates a **draft in Beehiiv** + a Supabase backup record.
3. Review in the **Section Editor**: per-section **Regenerate**, or **AI Chat** (whole-newsletter or per-section scope) for targeted edits.
4. **Export/Copy HTML** or open the Beehiiv draft → final review → **send from Beehiiv**.

Keep this gated. The value is editorial control before it reaches subscribers.

---

## 3. Generation pipeline (`generateWeeklyNewsletter`)

Orchestrated in `newsletter-generator.ts`; building blocks live in sibling modules.

0. **Authoritative time** — `fetchAuthoritativeNow()` (timeapi.io, America/Mexico_City) anchors every date/search/"reject old content" rule. Falls back to server clock.
1. **Real data, never invented:**
   - **Weather** — OpenWeatherMap 5-day forecast, injected into the prompt (AI must NOT search weather).
   - **USD/MXN** — Frankfurter API, injected verbatim (AI must NOT invent or recall a rate; prints "Consulta Banxico" if the API fails).
   - **Events** — DB `events` in the 7-day window fed as hints.
   - **Blog posts** — real published `blog_posts` (slug + `image_url`); AI must use ONLY these URLs.
2. **Anti-repetition** — 8 dedup tables (`newsletter_facts / tips / places / spots / phrases / questions / spotlights / escapes`) are read and passed as "do NOT repeat" lists, then the new edition's picks are saved back.
3. **Prompt** — `buildNewsletterPrompt()` (`newsletter-prompt.ts`) assembles the editorial spec + all live data + the HTML template.
4. **Post-processing (order matters):**
   - `removeAllImages()` strips every AI-emitted `<img>` (they'd 404) — the no-hallucinated-images guard.
   - Comunidad injection (if custom content) → footer injection.
   - Critical-placeholder check → **fails generation** if a critical `[PLACEHOLDER]` is unfilled.
   - `cleanHtmlForBeehiiv()` + `injectResponsiveStyles()` (mobile @media + forced light mode).
   - `validateAndCleanUrls()` — HEAD-checks every sanluisway.com link, swaps 404s for `/events`.
   - `addUtmTracking()` — per-section `utm_content` (see §7).
   - **Image injection** (verified, DB-sourced only — see §6).
   - `generateSubjectAndPreview()` — subject + preview from the edition's top story (see §5).

---

## 4. Newsletter structure (4 cards + framing)

The real layout is 4 colored-header cards. Each card groups related sections:

**Header** → logo, title, date range (terracotta `#C75B39`).
**Opening Hook** → 2-3 short paragraphs; varied greeting each edition; references something concrete happening this week.
**Hero image** → rotating `featured_photos` shot (§6).

**🗞️ Card 1 — This Week at a Glance** (`#0C4A6E`)
- 🌦️ Weather Watch (forecast + tip) · 💰 Market Watch (USD/MXN) · 📰 Top News (exactly 3, each with "why it matters") · ⚡ Quick Hits (3 one-liners).

**🎟️ Card 2 — What's On** (`#C75B39`)
- 🌟 Top Picks (3 events, first = ⭐ Editor's Pick) · 🎭 More This Week (Culture / Food / Music / Sports grid) · 📍 Spot of the Week · 🏙️ Around Town (Now Open + Good to Know) · 📅 Coming Up.

**🧭 Card 3 — Expat Toolkit** (`#5B21B6`)
- 🙋 Ask an Expat (Q&A) · 💡 Pro Tip · 🗣️ Spanish Corner (2 potosino expressions) · 🧠 Did You Know?.

**🧳 Card 4 — Go Deeper** (`#166534`)
- 🌿 Weekend Escape (season-aware day trip) · 📖 From the Blog (featured post + image) · ✨ Community Spotlight.

**🤝 Comunidad** (optional) → admin-supplied promos/announcements, rewritten in-tone and injected programmatically.
**CTA** → "Discover More of San Luis Potosí" → sanluisway.com.
**Explore grid + closing + footer** → section links, socials, sign-off, unsubscribe.

Sponsor ads inject at `top` / `middle` / `bottom` placements with click tracking.

---

## 5. Subject line & preview text

Auto-generated per edition from the top story/event (`generateSubjectAndPreview`), NOT generic dates.
- **Subject:** one emoji + specific hook + `| <short date>`, aim < 55 chars. No "Newsletter", no ALL CAPS.
- **Preview:** 80-140 chars; complements the subject, teases 2-3 *other* things.
- Falls back to generic strings on any failure. The admin can still edit both before sending.

---

## 6. Images (DB-verified only — AI never supplies URLs)

`removeAllImages()` strips all AI images; the pipeline then injects only known-good images from our DB:
- **Hero** — a `featured_photos` row (active), rotating weekly (`weekIndex % count`), placed above Card 1.
- **Featured blog image** — the featured post's real `image_url`, matched by `/blog/<slug>` and injected into the "From the Blog" card.

Both are email-safe (inline styles, `max-width` responsive). Both are no-ops if the photo/anchor is missing (never drops content). Top-event photos are intentionally excluded — Top Picks are AI-researched and lack a reliable image.

---

## 7. Analytics — per-section UTMs

Every sanluisway.com link gets `utm_content=<section-slug>` (`this-week-glance / whats-on / expat-toolkit / go-deeper / comunidad / cta / explore-grid / footer / header`).
- We set **only** `utm_content`. Beehiiv auto-appends `utm_source / utm_medium / utm_campaign` (+`_bhlid`) on send and never sets `utm_content`, so ours composes cleanly with no duplicate keys and no dashboard change.
- In **GA4**, read the section from **Manual ad content**; cross with **Session campaign** (Beehiiv's per-edition slug) for section × edition.

---

## 8. Editorial rules (non-negotiable)

- **Dates:** only content within the 7-day window; reject prior months (English + Spanish month names).
- **Geography:** SLP city/state, México only. Exclude San Luis AZ / Obispo CA / any US location. MXN prices, +52 numbers.
- **Event-edition content:** ONLY current-edition confirmed facts — never prior-year info, even if labeled.
- **News neutrality:** must NOT read government-fed / pro-Gallardo. Guardrails live in the *code* filters (BANNED/GOV_PR lists), not just prompts. Avoid pure politics, crime blotters, natural-disaster alarmism.
- **No booking/reservation language** — B2B model uses tracked contact CTAs, not reservations.
- Specific > vague. No walls of text. Explain Spanish terms. Emojis mark sections, don't overuse.

---

## 9. Brand & type

| Token | Hex | Use |
|-------|-----|-----|
| Gold | `#FFCB05` | Buttons, accents |
| Terracotta | `#C75B39` | Header, CTA, highlights |
| Dark gray | `#1F2937` | Body text |
| Light gray | `#F3F4F6` | Page background |
| Link blue | `#2563EB` | Links |

Card header colors: Card 1 `#0C4A6E`, Card 2 `#C75B39`, Card 3 `#5B21B6`, Card 4 `#166534`.
Fonts: Georgia serif (title/H2), Arial (everything else). Max width 600px, cards `border-radius` 12px, line-height 1.6. Forced light color-scheme (Apple/Gmail dark-mode safe).

**Socials:** [Website](https://www.sanluisway.com) · [Instagram](https://www.instagram.com/sanluisway/) · [TikTok](https://www.tiktok.com/@sanluisway) · info@sanluisway.com

---

## 10. Module map

| File | Responsibility |
|------|----------------|
| `newsletter-generator.ts` | Orchestrator: `generateWeeklyNewsletter`, date/time/FX helpers, persistence |
| `newsletter-prompt.ts` | `buildNewsletterPrompt()` — the editorial spec + data injection |
| `newsletter-template.ts` | `NEWSLETTER_TEMPLATE`, `CLOSING_AND_FOOTER_HTML` |
| `newsletter-html.ts` | Clean/responsive/placeholder + UTM + hero/blog image injection |
| `newsletter-links.ts` | URL validation + HEAD checks |
| `newsletter-subject.ts` | Content digest + subject/preview generation |
| `newsletter-comunidad.ts` | Comunidad rewrite + injection |
| `newsletter-ads.ts` | Sponsor ad placement + click tracking |
| `newsletter-supabase.ts` | Shared service-role client |

---

*Last updated: 2026-07-13 · San Luis Way · www.sanluisway.com*
