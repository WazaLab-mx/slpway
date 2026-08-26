import OpenAI from 'openai';
import { NEWSLETTER_FAST_MODEL } from './newsletter-models';

// Uses OpenAI (the primary generator); the project's Gemini free-tier quota is
// exhausted, so a Gemini call here always 429s and drops back to raw content.
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// Function to rewrite custom content in a friendly tone using AI
async function rewriteContentInFriendlyTone(customContent: string): Promise<{ title: string; body: string; cta?: string }> {
  console.log('   📝 rewriteContentInFriendlyTone called with:', customContent.substring(0, 100) + '...');

  if (!customContent || !customContent.trim()) {
    console.log('   ⚠️ No custom content to rewrite');
    return { title: '', body: '' };
  }

  const rewritePrompt = `
You are the friendly editor of "San Luis Way Weekly", a newsletter for expats and locals in San Luis Potosí, México.

Rewrite the following content in a warm, friendly, conversational tone. Make it sound like a friend sharing a tip, not a corporate announcement.

ORIGINAL CONTENT:
${customContent}

INSTRUCTIONS:
1. Create an engaging TITLE (short, catchy, with an emoji)
2. Rewrite the BODY in a friendly tone (2-3 sentences max)
3. If there's a discount code, special offer, or call-to-action, include it as CTA
4. Keep ALL specific details: dates, prices, codes, names, addresses
5. Write in English

Return ONLY valid JSON in this exact format (no markdown, no code blocks):
{"title":"Your catchy title here","body":"Your friendly rewritten content here.","cta":"CODE123 or special offer if any"}

If there's no special code/offer, set cta to null.
`;

  try {
    if (!openai) throw new Error('OpenAI API key not configured');

    console.log('   🤖 Calling OpenAI to rewrite content...');
    const response = await openai.responses.create({
      model: NEWSLETTER_FAST_MODEL,
      instructions: 'You rewrite short community blurbs in a warm, friendly tone. Return ONLY valid JSON.',
      input: rewritePrompt,
      max_output_tokens: 1000,
    });
    let text = (response.output_text || '').trim();
    console.log('   📄 OpenAI response:', text.substring(0, 200) + '...');

    // Clean up response - remove markdown code blocks if present
    text = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : text);
    console.log('   ✅ Parsed result - Title:', parsed.title, '| Body length:', parsed.body?.length || 0);

    return {
      title: parsed.title || '🤝 Community Update',
      body: parsed.body || customContent,
      cta: parsed.cta || undefined
    };
  } catch (error) {
    console.error('   ❌ Error rewriting content:', error);
    // Fallback to original content if AI fails
    console.log('   ⚠️ Using fallback - original content');
    return {
      title: '🤝 Community Update',
      body: customContent,
      cta: undefined
    };
  }
}

// Comunidad block as semantic HTML (the newsletter is pasted into Beehiiv's
// editor, which keeps headings/paragraphs and discards layout + inline CSS).
// The section comment and the "🤝 Comunidad" heading are load-bearing anchors
// for the section parser, per-section UTM tagging and the admin editor.
export function generateComunidadSection(title: string, body: string, cta?: string): string {
  if (!body || !body.trim()) {
    return '';
  }

  const ctaLine = cta ? `\n<p><strong>${cta}</strong></p>` : '';

  return `<!-- COMUNIDAD SECTION - CUSTOM CONTENT -->
<h3>🤝 Comunidad</h3>
<p><em>From our community to yours</em></p>
<h4>${title}</h4>
<p>${body}</p>${ctaLine}`;
}

// Places the block at the template's placeholder, else right before the CTA
// anchor, else at the end — never drops content.
export function placeComunidadSection(html: string, sectionHtml: string): string {
  if (html.includes('<!-- COMUNIDAD_PLACEHOLDER -->')) {
    return html.replace('<!-- COMUNIDAD_PLACEHOLDER -->', sectionHtml);
  }
  if (html.includes('<!-- CALL TO ACTION -->')) {
    return html.replace('<!-- CALL TO ACTION -->', `${sectionHtml}\n\n<!-- CALL TO ACTION -->`);
  }
  console.warn('   ⚠️ No Comunidad anchor found — appending section at the end');
  return `${html}\n\n${sectionHtml}`;
}

// Function to inject Comunidad section into newsletter HTML
export async function injectComunidadSection(html: string, customContent: string): Promise<string> {
  if (!customContent || !customContent.trim()) {
    console.log('   ⚠️ No custom content provided, skipping Comunidad section');
    return html;
  }

  // Rewrite content in friendly tone using AI
  console.log('   🎨 Rewriting custom content in friendly tone...');
  const { title, body, cta } = await rewriteContentInFriendlyTone(customContent);
  console.log(`   ✅ Rewritten: "${title.substring(0, 30)}..."`);

  const comunidadHtml = generateComunidadSection(title, body, cta);

  if (!comunidadHtml || !comunidadHtml.trim()) {
    console.log('   ⚠️ Generated Comunidad HTML is empty');
    return html;
  }

  console.log(`   📝 Comunidad HTML generated (${comunidadHtml.length} chars)`);
  return placeComunidadSection(html, comunidadHtml);
}
