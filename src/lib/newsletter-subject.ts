import { GoogleGenerativeAI } from '@google/generative-ai';

// Strips HTML tags and normalizes whitespace/entities to plain readable text.
function stripTagsToText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&rsquo;|&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Pulls the few signals that make a compelling subject line — the opening hook,
 * the top news headlines, and the top event names — out of the finished HTML.
 * Pure/deterministic so it can be unit-tested without the AI call.
 */
export function extractContentDigest(html: string): string {
  const parts: string[] = [];

  const hookMatch = html.match(/<!-- OPENING HOOK -->[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
  if (hookMatch) {
    const hook = stripTagsToText(hookMatch[1]);
    if (hook) parts.push(`OPENING: ${hook.slice(0, 400)}`);
  }

  const newsBlock = html.match(/📰 Top News([\s\S]*?)(?:⚡ Quick Hits|<!-- CARD 2|🎟️ What)/i);
  if (newsBlock) {
    const headlines = Array.from(newsBlock[1].matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi))
      .map((m) => stripTagsToText(m[1]))
      .filter(Boolean)
      .slice(0, 3);
    if (headlines.length) parts.push(`NEWS: ${headlines.join(' | ')}`);
  }

  const eventsBlock = html.match(/Top Picks([\s\S]*?)(?:See All Events|More This Week)/i);
  if (eventsBlock) {
    const events = Array.from(eventsBlock[1].matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi))
      .map((m) => stripTagsToText(m[1]))
      .filter(Boolean)
      .slice(0, 3);
    if (events.length) parts.push(`EVENTS: ${events.join(' | ')}`);
  }

  return parts.join('\n');
}

/**
 * Generates an open-rate-optimized subject line and preview text from the
 * edition's actual top story/event, instead of the old generic date-based
 * strings. Uses a cheap Gemini call and falls back to the generic values on any
 * failure so generation never breaks over this.
 */
export async function generateSubjectAndPreview(
  html: string,
  dateRangeStr: string
): Promise<{ subject: string; previewText: string }> {
  const fallback = {
    subject: `San Luis Way Weekly | ${dateRangeStr}`,
    previewText: `Your weekly guide to San Luis Potosí for ${dateRangeStr}`,
  };

  const digest = extractContentDigest(html);
  if (!digest || digest.length < 30 || !process.env.GOOGLE_API_KEY) {
    return fallback;
  }

  // Short date keeps the char budget for the hook (e.g. "Jul 13–20").
  const shortDate = dateRangeStr.replace(/,?\s*\d{4}\s*$/, '').replace(/\s-\s/, '–');

  const prompt = `You write the SUBJECT LINE and PREVIEW TEXT for "San Luis Way Weekly", an email newsletter about San Luis Potosí, México, for expats and locals.

This week's actual content:
${digest}

Write a subject line and preview text that make people open the email.

SUBJECT LINE rules:
- Lead with the single most compelling, specific hook from the content above (a real event name or concrete news item). NEVER generic.
- Format: one emoji + hook + " | ${shortDate}". Keep the whole thing under 55 characters when possible.
- No clickbait, no ALL CAPS, do not use the word "Newsletter".
- English, keeping Spanish only for proper nouns.

PREVIEW TEXT rules:
- 80-110 characters. Complements the subject — tease 2-3 OTHER things inside, do not repeat the subject's hook.
- Making the reader curious is the goal.

Return ONLY valid JSON, no markdown, no code fences:
{"subject":"...","previewText":"..."}`;

  try {
    const model = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY).getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: { maxOutputTokens: 200, temperature: 0.85 },
    });
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();
    text = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');

    const parsed = JSON.parse(text);
    const subject = typeof parsed.subject === 'string' ? parsed.subject.trim() : '';
    const previewText = typeof parsed.previewText === 'string' ? parsed.previewText.trim() : '';

    // Guardrails: reject empty/absurd output; keep the subject within inbox limits.
    if (!subject || subject.length < 8 || subject.length > 90) return fallback;
    if (!previewText || previewText.length < 20) {
      return { subject, previewText: fallback.previewText };
    }
    return { subject, previewText: previewText.slice(0, 140) };
  } catch (err) {
    console.warn('[newsletter] Subject/preview generation failed, using fallback:', err);
    return fallback;
  }
}
