// HTML building blocks from BLOG_DEEP_DIVE_STYLE_GUIDE.md. The blog page already
// renders the hero image and H1, so posts start at the Quick Answer.
// Only uses classes present in the production CSS: content lives in the DB, outside Tailwind's scan.
// Every helper takes already-localized strings; text is trusted (written by us).

export const quickAnswer = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed mt-0">${text}</p></div>`;

export const toc = (title, items, readingTime) =>
  `<div class="not-prose mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-100"><h3 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2"><span>📑</span> ${title}</h3><nav class="space-y-2">` +
  items.map(([id, label]) => `<a href="#${id}" class="block text-blue-600 hover:text-blue-800 hover:underline">→ ${label}</a>`).join('') +
  `</nav><p class="mt-4 text-sm text-gray-600 italic">${readingTime}</p></div>`;

export const hook = (html) => `<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">${html}</p>`;

export const p = (html) => `<p class="text-lg leading-relaxed text-gray-700 mb-6">${html}</p>`;

export const section = (id, title, subtitle, body) =>
  `<section id="${id}" class="mb-16 scroll-mt-24"><div class="not-prose mb-8"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">${title}</h2>` +
  (subtitle ? `<p class="text-lg text-gray-600 mt-4 italic">${subtitle}</p>` : '') +
  `</div>${body}</section>`;

export const h3 = (text) => `<h3 class="text-2xl font-bold text-gray-900 mt-10 mb-4">${text}</h3>`;

// Credit is required for every photo (license + author), shown in the caption.
export const figure = ({ src, alt, caption, credit }) =>
  `<figure class="not-prose my-12"><div class="rounded-xl overflow-hidden shadow-lg"><img src="${src}" alt="${alt}" class="w-full h-auto" loading="lazy" /></div><figcaption class="mt-4 text-center text-sm text-gray-600 italic">${caption}${credit ? ` <span class="text-gray-500">— ${credit}</span>` : ''}</figcaption></figure>`;

// Compact fact sheet for each place/trail.
export const factCard = (title, rows) =>
  `<div class="not-prose my-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><div class="bg-gray-50 px-6 py-3 border-b border-gray-200"><p class="font-semibold text-gray-900 mt-0">${title}</p></div><dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 p-6">` +
  rows.map(([k, v]) => `<div><dt class="text-xs font-bold uppercase tracking-wider text-gray-500">${k}</dt><dd class="text-gray-800 mt-0">${v}</dd></div>`).join('') +
  `</dl></div>`;

export const callout = (emoji, title, html, tone = 'amber') =>
  `<div class="not-prose my-8 bg-${tone}-50 border-l-4 border-${tone}-500 p-6 rounded-r-lg"><p class="text-${tone}-900 mt-0"><strong>${emoji} ${title}</strong> ${html}</p></div>`;

export const citation = (title, quote, source, url) =>
  `<div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg"><div class="flex items-start gap-3"><span class="text-2xl">📚</span><div><p class="font-semibold text-gray-900 mb-2">${title}</p><p class="text-gray-700 mb-3">${quote}</p><p class="text-sm text-gray-600 mt-0">— ${source} <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">↗</a></p></div></div></div>`;

export const proTips = (title, tips) =>
  `<div class="not-prose my-12 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 md:p-8"><h4 class="text-2xl font-bold text-yellow-900 mb-6 flex items-center gap-3"><span class="text-3xl">💡</span> ${title}</h4><div class="space-y-4">` +
  tips.map(([t, d]) => `<div class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-yellow-500"><p class="font-semibold text-gray-900 mb-2">${t}</p><p class="text-gray-700 mt-0">${d}</p></div>`).join('') +
  `</div></div>`;

export const table = (headers, rows) =>
  `<div class="not-prose overflow-x-auto my-12"><table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg"><thead class="bg-gradient-to-r from-blue-600 to-blue-700"><tr>` +
  headers.map((h) => `<th class="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">${h}</th>`).join('') +
  `</tr></thead><tbody class="divide-y divide-gray-200">` +
  rows.map((r) => `<tr class="hover:bg-gray-50">${r.map((c, i) => `<td class="px-4 py-3 text-sm ${i === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}">${c}</td>`).join('')}</tr>`).join('') +
  `</tbody></table></div>`;

export const divider = () =>
  `<div class="not-prose my-12"><div class="flex items-center justify-center"><div class="border-t-2 border-gray-300 flex-grow"></div><span class="px-6 text-gray-400 text-4xl">✦</span><div class="border-t-2 border-gray-300 flex-grow"></div></div></div>`;

export const takeaways = (title, items) =>
  `<div class="not-prose my-12 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl"><h4 class="text-2xl font-bold mb-6 flex items-center gap-3"><span class="text-3xl">🎯</span> ${title}</h4><ul class="space-y-4">` +
  items.map((t) => `<li class="flex items-start gap-3"><span class="text-yellow-300 text-xl flex-shrink-0">✓</span><p class="text-lg mt-0">${t}</p></li>`).join('') +
  `</ul></div>`;

// <details> markup is what src/lib/faq-schema.ts parses into FAQPage JSON-LD.
export const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-4 inline-block">${title}</h2></div><div class="space-y-4 mt-6">` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('') +
  `</div>`;

export const related = (title, items) =>
  `<div class="not-prose my-12 bg-gray-50 p-6 rounded-xl border border-gray-200"><h4 class="text-lg font-semibold mb-4 text-gray-900">📚 ${title}</h4><ul class="space-y-3">` +
  items.map(([href, label, note]) => `<li><a href="${href}" class="text-blue-600 hover:text-blue-800 hover:underline">→ ${label}</a><p class="text-sm text-gray-600 mt-1">${note}</p></li>`).join('') +
  `</ul></div>`;

export const sources = (title, items) =>
  `<div class="not-prose mt-12 border-t border-gray-200 pt-6"><h4 class="text-base font-semibold text-gray-900 mb-3">${title}</h4><ol class="list-decimal pl-6 space-y-1 text-sm text-gray-600">` +
  items.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${label}</a></li>`).join('') +
  `</ol></div>`;

export const wrap = (...parts) => `<div class="prose prose-lg lg:prose-xl max-w-none">${parts.join('\n')}</div>`;

// "Photo: Author (License), via Wikimedia Commons" for Commons images; nothing for our own.
export const photoCredit = (label, photo) => {
  if (!photo.artist) return '';
  const license = photo.licenseUrl
    ? `<a href="${photo.licenseUrl}" target="_blank" rel="noopener noreferrer" class="underline">${photo.license}</a>`
    : photo.license;
  return `${label}: <a href="${photo.page}" target="_blank" rel="noopener noreferrer" class="underline">${photo.artist}</a> (${license}), via Wikimedia Commons`;
};
