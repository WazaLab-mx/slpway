/**
 * Newsletter chat-edit utility.
 *
 * Lets the admin steer the LLM with natural-language instructions ("make this
 * shorter", "swap the headline for X", "add a mention of the country fest") and
 * receive back a brief explanation plus the updated HTML, without forcing a
 * full section regeneration.
 *
 * Mirrors the OpenAI-first / Gemini-fallback pattern used by
 * regenerateSection() in newsletter-sections.ts.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const geminiClient = process.env.GOOGLE_API_KEY
  ? new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
  : null;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatEditRequest {
  message: string;
  currentHtml: string;
  scope: 'section' | 'newsletter';
  sectionName?: string;
  sectionType?: string;
  history?: ChatMessage[];
}

export interface ChatEditResult {
  reply: string;
  html: string;
}

const SYSTEM_PROMPT = `You are the editor-in-chief of "San Luis Way Weekly", an email newsletter
for expats and locals in San Luis Potosí, México. You take natural-language
instructions from the admin and return an updated version of the HTML they
give you, plus one short sentence explaining what you changed.

ABSOLUTE RULES:
1. Output strict JSON ONLY, no markdown fences, matching this shape exactly:
   { "reply": "<one short sentence>", "html": "<the updated HTML>" }
2. Preserve the existing HTML structure (tables, <tr>, <td>, inline styles,
   section markers like <!-- WEATHER -->). Email clients are picky — do not
   swap to <div> layouts or strip inline styles.
3. Keep all <a href> URLs intact unless the user explicitly asks you to
   change a specific link.
4. Never invent dates, prices, opening hours, or venues. If the user asks for
   information you do not have, ask for it in "reply" and return the HTML
   unchanged.
5. Keep tone friendly and useful, prices in MXN, phones starting with +52.
6. Do not add <img> tags (Beehiiv handles images separately).
7. If the requested change is impossible or unsafe (e.g., remove disclaimer
   required by law), explain in "reply" and leave the HTML unchanged.`;

function buildUserPrompt(req: ChatEditRequest): string {
  const scopeLine =
    req.scope === 'section'
      ? `You are editing ONE SECTION of the newsletter: "${req.sectionName ?? req.sectionType ?? 'unknown'}".`
      : 'You are editing the FULL newsletter HTML.';

  const historyBlock =
    req.history && req.history.length > 0
      ? `\nPRIOR CONVERSATION (most recent last):\n${req.history
          .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
          .join('\n')}\n`
      : '';

  return `${scopeLine}
${historyBlock}
ADMIN REQUEST:
${req.message}

CURRENT HTML:
${req.currentHtml}

Return ONLY the JSON object described in the system prompt.`;
}

function extractJson(raw: string): { reply: string; html: string } | null {
  let cleaned = raw.trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '');

  try {
    const parsed = JSON.parse(cleaned);
    if (typeof parsed?.reply === 'string' && typeof parsed?.html === 'string') {
      return { reply: parsed.reply, html: parsed.html };
    }
  } catch {
    // fall through to brace-balanced fallback
  }

  // Models sometimes wrap the JSON with extra prose. Find the first balanced
  // {...} block and try again before giving up.
  const start = cleaned.indexOf('{');
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        try {
          const candidate = JSON.parse(cleaned.slice(start, i + 1));
          if (typeof candidate?.reply === 'string' && typeof candidate?.html === 'string') {
            return { reply: candidate.reply, html: candidate.html };
          }
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

export async function chatEditHtml(req: ChatEditRequest): Promise<ChatEditResult> {
  if (!openai && !geminiClient) {
    throw new Error('OPENAI_API_KEY or GOOGLE_API_KEY is required');
  }

  const userPrompt = buildUserPrompt(req);
  // Full-newsletter HTML can be ~30-50KB, so the response also needs room.
  // Section-level edits are an order of magnitude smaller.
  const maxOutputTokens = req.scope === 'newsletter' ? 32000 : 8000;
  let lastError: unknown = null;

  // Use the Responses API to match the working pattern elsewhere in this
  // codebase (newsletter-generator.ts, newsletter-sections.ts). Chat
  // Completions doesn't accept gpt-5.4 and trips on response_format.
  if (openai) {
    try {
      const res = await openai.responses.create({
        model: 'gpt-5.4',
        instructions: SYSTEM_PROMPT,
        input: userPrompt,
        max_output_tokens: maxOutputTokens,
        temperature: 0.4,
        top_p: 0.95,
      });
      const text = res.output_text || '';
      const parsed = extractJson(text);
      if (!parsed) {
        console.error('OpenAI chat-edit unparseable text (first 500 chars):', text.slice(0, 500));
        throw new Error('OpenAI returned unparseable response');
      }
      return parsed;
    } catch (err) {
      console.error('OpenAI chat-edit error, trying Gemini fallback:', err);
      lastError = err;
    }
  }

  if (geminiClient) {
    try {
      const model = geminiClient.getGenerativeModel({
        model: 'gemini-2.0-flash',
        generationConfig: {
          maxOutputTokens,
          temperature: 0.4,
          responseMimeType: 'application/json',
        },
      });
      const result = await model.generateContent(`${SYSTEM_PROMPT}\n\n${userPrompt}`);
      const response = await result.response;
      const text = response.text();
      const parsed = extractJson(text);
      if (!parsed) {
        console.error('Gemini chat-edit unparseable text (first 500 chars):', text.slice(0, 500));
        throw new Error('Gemini returned unparseable response');
      }
      return parsed;
    } catch (err) {
      console.error('Gemini chat-edit also failed:', err);
      lastError = err;
    }
  }

  const message = lastError instanceof Error ? lastError.message : 'Unknown error';
  throw new Error(`Chat-edit failed: ${message}`);
}
