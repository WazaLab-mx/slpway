const { cleanText } = require('./rss-feeds');

const POST_FEED = 'https://www.reddit.com/r/SanLuisPotosi/hot/.rss?limit=50';
const COMMENT_FEED = 'https://www.reddit.com/r/SanLuisPotosi/comments/.rss?limit=100';
const EXCLUDED = /\b(nsfw|sexual|anabolicos|sustancias|moteles|drogas|crimen|homicidio|balacera|secuestr\w*)\b/i;
const DAY = 86400000;

function parseRedditFeed(xml) {
  return [...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)].map(([, block]) => {
    const tag = name => block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1] || '';
    const text = cleanText(cleanText(tag('content'))).replace(/\s*submitted by\s.*$/i, '').trim();
    const date = new Date(tag('published') || tag('updated'));
    const url = cleanText(block.match(/<link\b[^>]*href="([^"]+)"/)?.[1] || '');
    return {
      id: tag('id'), title: cleanText(tag('title')), text, url,
      threadId: url.match(/\/comments\/([^/]+)/)?.[1] || '',
      author: cleanText(tag('name')),
      publishedAt: Number.isFinite(date.getTime()) ? date.toISOString() : null,
    };
  }).filter(entry => /^https:\/\/www\.reddit\.com\/r\/SanLuisPotosi\/comments\//i.test(entry.url));
}

function collectRedditConversations(posts, comments, now = Date.now()) {
  const recent = date => date && new Date(date).getTime() <= now && new Date(date).getTime() >= now - 7 * DAY;
  return posts.filter(post => post.id.startsWith('t3_') && recent(post.publishedAt)
    && !EXCLUDED.test(`${post.title} ${post.text}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
    .map(post => {
      const replies = [...new Map(comments.filter(comment => comment.id.startsWith('t1_')
        && comment.threadId === post.threadId && recent(comment.publishedAt)
        && comment.author && !/AutoModerator|\[deleted\]/i.test(comment.author)
        && comment.text && !/^\[(removed|deleted)\]$/.test(comment.text))
        .map(comment => [comment.id, comment])).values()];
      const participantCount = new Set(replies.map(reply => reply.author)).size;
      const lastActiveAt = replies.map(reply => reply.publishedAt).sort().at(-1);
      const ageDays = (now - new Date(post.publishedAt).getTime()) / DAY;
      return {
        id: post.id, title: post.title, description: post.text.slice(0, 1000),
        url: post.url, source: 'Reddit · r/SanLuisPotosi', platform: 'Reddit',
        publishedAt: post.publishedAt, observedAt: new Date(now).toISOString(), lastActiveAt,
        commentCount: replies.length, participantCount,
        comments: replies.slice(0, 6).map(reply => reply.text.slice(0, 400)),
        score: participantCount / Math.sqrt(1 + ageDays),
      };
    }).filter(topic => topic.commentCount >= 2 && topic.participantCount >= 2
      && new Date(topic.lastActiveAt).getTime() >= now - 3 * DAY)
    .sort((first, second) => second.score - first.score).slice(0, 12);
}

async function fetchRedditConversations() {
  const read = async url => {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'SanLuisWay/1.0 (+https://www.sanluisway.com)' },
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`Reddit feed HTTP ${response.status}`);
    const xml = await response.text();
    if (!xml.includes('<feed')) throw new Error('Reddit returned an invalid feed');
    return parseRedditFeed(xml);
  };
  // Two feeds supply both posts and observed replies; no per-thread request fanout.
  const posts = await read(POST_FEED);
  const comments = await read(COMMENT_FEED);
  return collectRedditConversations(posts, comments);
}

module.exports = { parseRedditFeed, collectRedditConversations, fetchRedditConversations };
