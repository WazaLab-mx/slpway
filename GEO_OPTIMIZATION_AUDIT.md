# GEO Optimization Audit — Visa & Cost of Living Pillar Pages
**Date:** 2026-09-24  
**Auditor:** Cloud Agent  
**Goal:** Bring two new pillar pages to parity with site's GEO best practices

## Current State of Best-Practice GEO on Site

From analysis of `living-guide.tsx`, factcheck pages, and existing blog posts:

### ✅ Strong Patterns Already in Use
- **SpeakableSpecification** with CSS selectors for answer-first content
- **Article schema** with Organization @id, citations to primary sources
- **FAQPage** with self-contained Q&A
- **BreadcrumbList** for navigation context
- **HowTo** schema on process-oriented guides (FENAPO prep example)
- **ClaimReview** on factcheck posts with verifiable claims
- **LastUpdated** component for freshness signals
- **Visible source attribution** (links to INEGI, INM, Numbeo, etc.)
- **Answer-first executive summaries** that directly address user queries

## Audit of `/resources/mexico-visas-residency-san-luis-potosi`

### ✅ Already Strong
- ✅ Article schema with proper datePublished/dateModified
- ✅ FAQPage with 4 core questions (FMM vs visa, card vs foil, solvency, retirees)
- ✅ Executive Summary section with answer-first content
- ✅ Visible source attribution (INM, DOF, consulate PDFs)
- ✅ All numbers backed by verified sources (UMA, fees, thresholds)
- ✅ LastUpdated component

### ❌ Gaps vs Best Practice
- ❌ **Missing SpeakableSpecification** — No CSS selectors for AI voice/answer extraction
- ❌ **Missing HowTo schema** — Two-stage consulate→INM process is perfect for HowTo steps
- ❌ **Missing BreadcrumbList** — Other resource guides have it
- ❌ **Not in llms.txt** — Priority resource not yet listed for agent discovery

### 🔧 Recommendations
1. Add `SpeakableSpecification` pointing to `#executive` and FAQ section
2. Add `HowTo` schema for the consulate→canje 5-step process (already visible in UI)
3. Add `BreadcrumbList`: Home → Resources → Visas Guide
4. Add to `llms.txt` and `llms-full.txt`

---

## Audit of `/resources/cost-of-living-san-luis-potosi`

### ✅ Already Strong
- ✅ Article schema with proper dates
- ✅ FAQPage with 4 core questions (monthly budget, Lomas vs Centro rent, utilities, bus)
- ✅ Executive Summary with answer-first budget table
- ✅ Visible source attribution (Banxico FIX, Numbeo, INM, listing snapshots)
- ✅ All numbers traced to sources in detailed tables
- ✅ LastUpdated component

### ❌ Gaps vs Best Practice
- ❌ **Missing SpeakableSpecification** — No CSS selectors for AI voice/answer extraction
- ❌ **Missing BreadcrumbList** — Other resource guides have it
- ❌ **Not in llms.txt** — Priority resource not yet listed for agent discovery

### 🔧 Recommendations
1. Add `SpeakableSpecification` pointing to `#executive` and FAQ section
2. Add `BreadcrumbList`: Home → Resources → Cost of Living
3. Add to `llms.txt` and `llms-full.txt`
4. (No HowTo needed — budgeting is not a step-by-step procedure)

---

## Quick Check: Other Ultimate Guides Parity

Checking if `family-guide`, `health-guide`, `school-guide`, `neighborhoods-san-luis-potosi` need parity fixes:

**Pattern from `living-guide.tsx` (lines 170-173):**
```typescript
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": [".speakable", "#quick-answer-heading", "#faq"]
}
```

**To verify:**
- Do they all have Speakable?
- Do they all have BreadcrumbList?
- Do they all have FAQPage?

→ Will perform quick inspection only if already have Article but missing Speakable/BreadcrumbList.

---

## GEO Assets to Update

### `public/llms.txt`
**Current:** Lists `living-guide` but NOT the two new pillars.  
**Add after line ~28 (after living-guide):**
```
- https://www.sanluisway.com/resources/mexico-visas-residency-san-luis-potosi — Mexico visas & residency 2026: FMM, temporary/permanent resident, INM canje, UMA solvency
- https://www.sanluisway.com/resources/cost-of-living-san-luis-potosi — Cost of living 2026: monthly budgets, neighborhood rents, utilities, healthcare, schools
```

### `public/llms-full.txt`
**Add in same priority section** (after living-guide entry or near cost-of-living blog entry).

---

## Implementation Plan

1. ✅ Create this audit document
2. ⏳ Update `mexico-visas-residency-san-luis-potosi.tsx`:
   - Add SpeakableSpecification
   - Add HowTo schema for 5-step process
   - Add BreadcrumbList
3. ⏳ Update `cost-of-living-san-luis-potosi.tsx`:
   - Add SpeakableSpecification
   - Add BreadcrumbList
4. ⏳ Update `llms.txt` and `llms-full.txt`
5. ⏳ Quick check family/health/school/neighborhoods guides
6. ⏳ Test TypeScript compilation
7. ⏳ Commit & push
8. ⏳ Create/update PR
9. ⏳ Update logs

---

## Success Criteria

- ✅ Both pillars have SpeakableSpecification
- ✅ Visas page has HowTo schema for consulate→INM process
- ✅ Both pages have BreadcrumbList
- ✅ Both pages listed in llms.txt and llms-full.txt
- ✅ No fabricated data added
- ✅ TypeScript compiles
- ✅ PR updated with detailed body listing GEO additions
