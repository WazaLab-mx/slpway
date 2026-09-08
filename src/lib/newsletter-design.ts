const BLUE = '#00007A';
const GOLD = '#FFCB05';
const SERIF = "Georgia,'Times New Roman',serif";
const SANS = 'Arial,Helvetica,sans-serif';
const LEADING_HEADING_ICONS = new RegExp('^[\\s\\p{Extended_Pictographic}\\uFE0F\\u200D]+', 'u');

const ELEMENT_STYLES: Record<string, string> = {
  h2: `font-family:${SERIF};font-size:30px;line-height:1.2;font-weight:700;color:${BLUE};margin:36px 0 20px;padding:18px 0 14px;border-top:4px solid ${GOLD}`,
  h3: `font-family:${SANS};font-size:13px;line-height:1.5;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${BLUE};margin:30px 0 14px;padding-bottom:10px;border-bottom:1px solid #E5E5E5`,
  h4: `font-family:${SERIF};font-size:25px;line-height:1.25;font-weight:700;color:#171717;margin:22px 0 12px`,
  p: `font-family:${SANS};font-size:16px;line-height:1.65;color:#404040;margin:0 0 16px`,
  ul: `font-family:${SANS};font-size:16px;line-height:1.65;color:#404040;margin:0 0 20px;padding-left:22px`,
  li: 'margin:0 0 8px;padding-left:2px',
  a: `color:${BLUE};text-decoration:underline;text-underline-offset:3px;overflow-wrap:anywhere`,
  img: 'display:block;width:100%;max-width:100%;height:auto;border:0;border-radius:8px;margin:18px 0',
  hr: 'height:1px;border:0;border-top:1px solid #E5E5E5;margin:30px 0',
  blockquote: `margin:20px 0;padding:16px 20px;background:#FFFEF0;border-left:4px solid ${GOLD}`,
};

function normalizeEmailMarkup(html: string): string {
  let tableDepth = 0;
  // Saved editions contain the old sponsor frame; remove only its extra gutters.
  html = html.replace(/(<td\b[^>]*style=")([^"]*)("\s*>\s*<div\b[^>]*style=")([^"]*)("\s*>\s*<p\b[^>]*>Sponsored<\/p>)/gi,
    (match, cell, cellStyle, frame, frameStyle, label) => {
      if (!/border:\s*1px dashed #d1d5db/i.test(frameStyle)) return match;
      return `${cell}${cellStyle.replace(/padding\s*:[^;]+/gi, 'padding:20px 0')}${frame}${frameStyle.replace(/padding\s*:[^;]+/gi, 'padding:0').replace(/border\s*:[^;]+/gi, 'border:0')}${label}`;
    });
  return html.replace(/<(\/?)(table|tbody|thead|tfoot|tr|td|th)\b([^>]*)>/gi, (tag, closing, name, attrs) => {
    if (name.toLowerCase() === 'table') {
      tableDepth += closing ? -1 : 1;
      tableDepth = Math.max(0, tableDepth);
      return tag;
    }
    // Older ad injections include standalone rows in otherwise semantic drafts.
    return tableDepth === 0 ? `<${closing}div${attrs}>` : tag;
  }).replace(/\b(src|href)=(['"])(\/[^'"]*)\2/gi, (_, attr, quote, url) =>
    `${attr}=${quote}${url.startsWith('//') ? 'https:' : 'https://www.sanluisway.com'}${url}${quote}`);
}

function styleContent(html: string): string {
  return html
    .replace(/<(h[234])([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag, attrs, text) =>
      `<${tag}${attrs}>${text.replace(LEADING_HEADING_ICONS, '')}</${tag}>`)
    .replace(/<(h[234]|p|ul|li|a|img|hr|blockquote)\b([^>]*)>/gi, (_, tag: string, attrs: string) => {
      const existing = attrs.match(/\sstyle=(?:"([^"]*)"|'([^']*)')/i);
      const cleanAttrs = attrs.replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, '').replace(/\s*\/$/, '');
      return `<${tag}${cleanAttrs} style="${ELEMENT_STYLES[tag.toLowerCase()]}${existing ? `;${existing[1] || existing[2]}` : ''}">`;
    })
    .replace(/(<p\b[^>]*>\s*<strong>Why it matters:<\/strong>)([\s\S]*?<\/p>)/gi,
      (_, opening, rest) => `${opening.replace('style="', `style="background:#FFFEF0;border-left:3px solid ${GOLD};padding:14px 16px;`)}${rest}`)
    .replace(/(<a\b[^>]*)(>\s*(?:See All Events|Read the Full Story|Mark your calendar)[\s\S]*?<\/a>)/gi,
      (_, opening, rest) => `${opening.replace('style="', `style="display:inline-block;background:${GOLD};padding:12px 20px;border-radius:6px;font-weight:700;`)}${rest}`);
}

// Keep editable source HTML separate; all preview/export surfaces share this renderer.
export function renderNewsletterDesign(html: string): string {
  if (!html.trim() || html.includes('data-newsletter-design="sanluisway"')) return html;
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  const content = styleContent(normalizeEmailMarkup(body.replace(/<!DOCTYPE[^>]*>|<head[\s\S]*?<\/head>|<\/?html[^>]*>|<style[\s\S]*?<\/style>/gi, '')));
  return `<table data-newsletter-design="sanluisway" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F4F6F8" style="width:100%;background:#F4F6F8;border-collapse:collapse;table-layout:fixed">
<tr><td align="center" style="padding:12px 0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="width:100%;max-width:640px;background:#FFFFFF;border-collapse:collapse;table-layout:fixed">
<tr><td bgcolor="${BLUE}" style="background:${BLUE};padding:30px 16px;border-top:6px solid ${GOLD}">
<p style="font-family:${SANS};font-size:10px;line-height:1.5;letter-spacing:3px;text-transform:uppercase;color:${GOLD};margin:0 0 12px">San Luis Potosí · The weekly edition</p>
<a href="https://www.sanluisway.com/?utm_content=header" style="font-family:${SERIF};font-size:42px;line-height:1.1;font-weight:700;letter-spacing:-1px;color:#FFFFFF;text-decoration:none">San Luis Way<span style="color:${GOLD}">.</span></a>
<p style="font-family:${SANS};font-size:13px;line-height:1.6;color:#FFFFFF;margin:14px 0 0">Your city. Your community. Your weekly read.</p>
</td></tr>
<tr><td style="padding:24px 16px;font-family:${SANS};font-size:16px;line-height:1.65;color:#404040;overflow-wrap:break-word">${content}</td></tr>
<tr><td style="padding:18px 16px;border-top:4px solid ${GOLD};font-family:${SANS};font-size:11px;line-height:1.5;letter-spacing:2px;text-transform:uppercase;color:${BLUE}">Explore. Live. Thrive.</td></tr>
</table></td></tr></table>`;
}

export function exportNewsletterDocument(html: string): string {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>San Luis Way Weekly</title></head><body style="margin:0">${renderNewsletterDesign(html)}</body></html>`;
}
