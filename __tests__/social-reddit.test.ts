import fs from 'fs';
import path from 'path';
const { parseRedditFeed, collectRedditConversations } = require('../netlify/functions/lib/social-reddit');
const capturedAt = new Date('2026-09-08T00:58:11Z').getTime();
const fixture = (name: string) => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');

describe('direct Reddit conversations', () => {
  test('reads real Atom post dates and removes encoded markup', () => {
    const posts = parseRedditFeed(fixture('reddit-hot-2026-09-07.xml'));
    const colonche = posts.find((post: any) => post.id === 't3_1w9clmp');
    expect(colonche.title).toBe('Y a todo esto, ¿sí han probado el colonche?');
    expect(colonche.publishedAt).toBe('2026-09-07T00:09:35.000Z');
    expect(colonche.text).toContain('temporada de tunas');
    expect(colonche.text).not.toMatch(/<[^>]+>|submitted by|\/u\//);
  });

  test('joins real replies to original posts and ranks observed conversation', () => {
    const posts = parseRedditFeed(fixture('reddit-hot-2026-09-07.xml'));
    const comments = parseRedditFeed(fixture('reddit-comments-2026-09-07.xml'));
    const topics = collectRedditConversations(posts, comments, capturedAt);
    const colonche = topics.find((topic: any) => topic.id === 't3_1w9clmp');
    expect(colonche.commentCount).toBe(11);
    expect(colonche.participantCount).toBeGreaterThanOrEqual(2);
    expect(colonche.url).toContain('/r/SanLuisPotosi/comments/1w9clmp/');
    expect(colonche.comments.length).toBeGreaterThan(0);
    expect(topics.some((topic: any) => /anabolicos|NSFW/i.test(topic.title))).toBe(false);
    expect(topics.every((topic: any) => topic.commentCount >= 2 && topic.participantCount >= 2)).toBe(true);
  });

  test('does not turn posts without replies into trends or recycle old conversations', () => {
    const posts = parseRedditFeed(fixture('reddit-hot-2026-09-07.xml'));
    const comments = parseRedditFeed(fixture('reddit-comments-2026-09-07.xml'));
    expect(collectRedditConversations(posts, [], capturedAt)).toEqual([]);
    expect(collectRedditConversations(posts, comments, capturedAt + 14 * 86400000)).toEqual([]);
    expect(parseRedditFeed('<html>rate limited</html>')).toEqual([]);
  });
});
