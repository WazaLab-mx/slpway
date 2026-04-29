const { schedule } = require('@netlify/functions');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanluisway.com';

const handler = async () => {
  console.log('Starting scheduled weekly newsletter generation...');

  const adminKey = process.env.NEWSLETTER_ADMIN_KEY;
  if (!adminKey) {
    console.error('Missing NEWSLETTER_ADMIN_KEY');
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing NEWSLETTER_ADMIN_KEY' }) };
  }

  const url = `${SITE_URL}/api/newsletter/generate`;
  console.log('POSTing to', url);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': adminKey
      },
      body: JSON.stringify({})
    });

    const responseText = await response.text();
    let parsed = null;
    try { parsed = JSON.parse(responseText); } catch (_) { /* leave null */ }

    if (!response.ok) {
      console.error(`Newsletter generation failed: ${response.status}`, responseText.slice(0, 500));
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Newsletter generation failed',
          status: response.status,
          response: parsed || responseText.slice(0, 500)
        })
      };
    }

    console.log('Newsletter generated successfully:', parsed && parsed.subject ? parsed.subject : 'OK');
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        result: parsed || responseText.slice(0, 500)
      })
    };
  } catch (error) {
    console.error('Newsletter scheduled function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Unknown error' })
    };
  }
};

// Run every Monday at 13:00 UTC (7am Mexico City)
exports.handler = schedule('0 13 * * 1', handler);
