import OpenAI from 'openai';

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
      model: 'gpt-5.4',
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

// Function to generate Comunidad section HTML from rewritten content
function generateComunidadSection(title: string, body: string, cta?: string): string {
  if (!body || !body.trim()) {
    return '';
  }

  const ctaHtml = cta
    ? `<p style="margin: 15px 0 0 0; font-size: 14px;"><span style="background-color: #F3E8FF; color: #7C3AED; padding: 6px 14px; border-radius: 4px; font-weight: bold;">${cta}</span></p>`
    : '';

  return `
          <!-- COMUNIDAD SECTION - CUSTOM CONTENT -->
          <tr>
            <td style="padding: 30px; background-color: #FDF4FF;">
              <h2 style="font-size: 20px; color: #1F2937; margin-bottom: 15px;">
                🤝 Comunidad
              </h2>
              <p style="font-size: 14px; color: #6B7280; margin-bottom: 20px;">From our community to yours</p>
              <div style="background-color: #FFFFFF; border: 1px solid #E9D5FF; border-left: 4px solid #A855F7; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 16px; margin: 0 0 12px 0; color: #7C3AED;">${title}</h3>
                <p style="margin: 0; font-size: 14px; color: #4B5563; line-height: 1.7;">${body}</p>
                ${ctaHtml}
              </div>
            </td>
          </tr>
`;
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

  // Try multiple injection patterns in order of preference

  // Pattern 1: Look for the placeholder comment
  if (html.includes('<!-- COMUNIDAD_PLACEHOLDER -->')) {
    console.log('   ✅ Found COMUNIDAD_PLACEHOLDER, injecting there');
    return html.replace('<!-- COMUNIDAD_PLACEHOLDER -->', comunidadHtml);
  }

  // Pattern 2: Look for <!-- CALL TO ACTION --> comment
  if (html.includes('<!-- CALL TO ACTION -->')) {
    console.log('   ✅ Found CALL TO ACTION comment, injecting before it');
    return html.replace('<!-- CALL TO ACTION -->', comunidadHtml + '\n\n          <!-- CALL TO ACTION -->');
  }

  // Pattern 3: Look for CTA section by background color #C75B39
  const ctaByColorPattern = /(<tr>\s*<td[^>]*background-color:\s*#C75B39)/i;
  if (ctaByColorPattern.test(html)) {
    console.log('   ✅ Found CTA by background color, injecting before it');
    return html.replace(ctaByColorPattern, comunidadHtml + '\n\n          $1');
  }

  // Pattern 4: Look for "From the Blog" section and inject after it
  const blogEndPattern = /(📖 From the Blog[\s\S]*?<\/div>\s*<\/td>\s*<\/tr>)/i;
  if (blogEndPattern.test(html)) {
    console.log('   ✅ Found From the Blog section, injecting after it');
    return html.replace(blogEndPattern, '$1\n\n' + comunidadHtml);
  }

  // Pattern 5: Look for Pro Tip section and inject after it
  const proTipEndPattern = /(💡 Expat Pro Tip[\s\S]*?<\/td>\s*<\/tr>)/i;
  if (proTipEndPattern.test(html)) {
    console.log('   ✅ Found Pro Tip section, injecting after it');
    return html.replace(proTipEndPattern, '$1\n\n' + comunidadHtml);
  }

  // Pattern 6: Look for any section with terracotta/CTA background
  const terracottaPattern = /(<tr>\s*<td[^>]*style="[^"]*background[^"]*#[Cc]75[Bb]39)/i;
  if (terracottaPattern.test(html)) {
    console.log('   ✅ Found terracotta section, injecting before it');
    return html.replace(terracottaPattern, comunidadHtml + '\n\n          $1');
  }

  // Pattern 7: Fallback - inject before CLOSING_FOOTER_PLACEHOLDER
  if (html.includes('<!-- CLOSING_FOOTER_PLACEHOLDER -->')) {
    console.log('   ✅ Found CLOSING_FOOTER_PLACEHOLDER, injecting before it');
    return html.replace('<!-- CLOSING_FOOTER_PLACEHOLDER -->', comunidadHtml + '\n\n          <!-- CLOSING_FOOTER_PLACEHOLDER -->');
  }

  // Pattern 8: Last resort - inject before the last </table>
  const lastTablePattern = /(<\/table>\s*<\/td>\s*<\/tr>\s*<\/table>)/i;
  if (lastTablePattern.test(html)) {
    console.log('   ✅ Found closing table structure, injecting before it');
    return html.replace(lastTablePattern, comunidadHtml + '\n\n          $1');
  }

  console.log('   ⚠️ Could not find ANY injection point for Comunidad section!');
  console.log('   📄 HTML snippet (first 500 chars):', html.substring(0, 500));

  // Absolute fallback - append before </body>
  if (html.includes('</body>')) {
    console.log('   ✅ Fallback: injecting before </body>');
    return html.replace('</body>', comunidadHtml + '\n</body>');
  }

  return html;
}
