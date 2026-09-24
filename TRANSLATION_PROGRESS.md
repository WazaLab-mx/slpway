# Ultimate Guides Translation Progress

## Task Overview
Translate all 5 Ultimate Guide pages from English to Spanish (Mexico), German, and Japanese for proper SEO and to eliminate duplicate content issues.

## Guides to Translate
1. ✅ **Living Guide** (`living-guide.tsx`) - COMPLETE
2. ⏳ **School Guide** (`school-guide.tsx`) - IN PROGRESS
3. ⏳ **Health Guide** (`health-guide.tsx`) - TODO
4. ⏳ **Family Guide** (`family-guide.tsx`) - TODO  
5. ⏳ **Neighborhoods Guide** (`neighborhoods-san-luis-potosi.tsx`) - TODO

## Completed Work

### Living Guide ✅
- [x] Created `en/living-guide.json` with all English content structured
- [x] Created `es/living-guide.json` with complete Mexican Spanish translation
- [x] Created `de/living-guide.json` with complete German translation
- [x] Created `ja/living-guide.json` with complete Japanese translation
- [x] Updated `living-guide.tsx` to use `useTranslation` hook
- [x] Added hreflang tags for all 4 locales (en, es, de, ja)
- [x] Added proper canonical URLs per locale
- [x] Updated SEO meta tags with translated content
- [x] Updated JSON-LD structured data with translations
- [x] Updated breadcrumbs and hero section
- [x] Updated `next-i18next.config.js` with guide namespaces

## What Each Translation Includes
Each guide has translations for:
- SEO metadata (title, description, keywords, og:title, JSON-LD)
- Breadcrumbs
- Hero section (title, subtitle, image alt)
- All section headings
- Quick stats
- Main content sections
- Tables (headers and data where applicable)
- FAQ items (questions and answers)
- Sources and related links
- All UI strings specific to the guide

## Technical Implementation
- Translation files: `/public/locales/{locale}/{guide-name}.json`
- Page updates: `/src/pages/resources/{guide-name}.tsx`
- Namespace config: `/next-i18next.config.js`
- Hreflang pattern: `https://www.sanluisway.com/{locale}/resources/{guide-name}`
- Canonical pattern: One unique canonical per locale

## SEO Improvements Applied
1. **Unique titles per locale** - No more duplicate <title> tags
2. **Unique meta descriptions** - Natural, localized descriptions
3. **Proper hreflang implementation** - Links all 4 language versions
4. **Canonical URLs** - Each locale has its own canonical
5. **Localized JSON-LD** - Structured data in each language
6. **Localized breadcrumbs** - Better UX and SEO

## Remaining Work
1. Complete School Guide translations (3 locales remaining)
2. Complete Health Guide translations (4 locales)  
3. Complete Family Guide translations (4 locales)
4. Complete Neighborhoods Guide translations (4 locales)
5. Update each guide page to use translations
6. Test builds and verify routing works correctly
7. Verify all translations are natural and accurate
8. Create PR with comprehensive documentation

## Files Created
```
public/locales/en/living-guide.json
public/locales/es/living-guide.json
public/locales/de/living-guide.json
public/locales/ja/living-guide.json
```

## Files Modified
```
next-i18next.config.js
src/pages/resources/living-guide.tsx
```

## Branch
`cursor/translate-ultimate-guides-seo-0715`

## Pull Request
https://github.com/WazaLab-mx/slpway/pull/3

## Status
Living Guide complete and ready for review. Pattern established for remaining guides.

## Notes
- All facts, figures, prices, addresses kept accurate and unchanged
- Internal links localized where matching locale route exists
- Natural, professional translations targeting expats/travelers
- Mexican Spanish for es locale (not Spain Spanish)
- Maintained SEO best practices throughout
- No database writes - all content in reviewable files
