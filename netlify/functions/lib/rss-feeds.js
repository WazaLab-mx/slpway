// RSS ingestion for the scheduled news update. Feeds are free — the LLM only
// curates/translates, it never searches the web (that was the cost driver).
const FEEDS = [
  // NOT /rss.xml — that one carries only national OEM content; /local/rss is the SLP section.
  { source: 'El Sol de San Luis', url: 'https://www.elsoldesanluis.com.mx/local/rss' },
  { source: 'Astrolabio', url: 'https://www.astrolabio.com.mx/feed/' },
  { source: 'Código San Luis', url: 'https://codigosanluis.com/feed/' },
  { source: 'La Orquesta', url: 'https://laorquesta.mx/feed/' },
];

const MAX_ITEMS_PER_FEED = 15;
const MAX_TOTAL_ITEMS = 60;
const MAX_ITEM_AGE_HOURS = 72;
const DESCRIPTION_MAX_CHARS = 260;

const NAMED_ENTITIES = {
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú', ntilde: 'ñ', uuml: 'ü',
  Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú', Ntilde: 'Ñ',
  nbsp: ' ', hellip: '…', ndash: '–', mdash: '—',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', iexcl: '¡', iquest: '¿',
};

function decodeEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => NAMED_ENTITIES[name] || m)
    .replace(/&amp;/g, '&');
}

function cleanText(raw) {
  if (!raw) return '';
  const noCdata = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  return decodeEntities(noCdata.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? m[1].trim() : '';
}

// Parses RSS 2.0 <item> blocks. Returns {source, title, url, description, publishedAt}.
function parseRssItems(xml, source) {
  const items = [];
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
  for (const block of blocks) {
    const title = cleanText(extractTag(block, 'title'));
    const url = cleanText(extractTag(block, 'link'));
    if (!title || !/^https?:\/\//.test(url)) continue;
    const pubDate = extractTag(block, 'pubDate');
    const parsedDate = pubDate ? new Date(pubDate) : null;
    items.push({
      source,
      title,
      url,
      description: cleanText(extractTag(block, 'description')).slice(0, DESCRIPTION_MAX_CHARS),
      publishedAt: parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null,
    });
  }
  return items;
}

function filterRecent(items, now = Date.now(), maxAgeHours = MAX_ITEM_AGE_HOURS) {
  const cutoff = now - maxAgeHours * 3600 * 1000;
  // Items without a parseable date are kept — feeds are already newest-first.
  return items.filter(i => !i.publishedAt || new Date(i.publishedAt).getTime() >= cutoff);
}

async function fetchFeed(feed) {
  const response = await fetch(feed.url, {
    // Browser-like UA: some outlets (Astrolabio) return 403 to bot UAs.
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return parseRssItems(await response.text(), feed.source);
}

// Fetches all feeds; a failing feed is logged and skipped, never fatal.
// Deduped by URL — feeds sometimes list the same nota twice, and a duplicated
// input makes the model pick it twice.
async function fetchAllFeeds(feeds = FEEDS) {
  const results = await Promise.allSettled(feeds.map(fetchFeed));
  const items = [];
  const seen = new Set();
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      for (const item of filterRecent(r.value).slice(0, MAX_ITEMS_PER_FEED)) {
        if (seen.has(item.url)) continue;
        seen.add(item.url);
        items.push(item);
      }
    } else {
      console.error(`Feed failed (${feeds[i].source}):`, r.reason && r.reason.message);
    }
  });
  return items.slice(0, MAX_TOTAL_ITEMS);
}

module.exports = { FEEDS, parseRssItems, filterRecent, fetchAllFeeds, cleanText };
