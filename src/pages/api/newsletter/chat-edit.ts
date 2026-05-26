import { NextApiRequest, NextApiResponse } from 'next';
import { chatEditHtml, ChatMessage } from '@/lib/newsletter-chat';
import { logger } from '@/lib/logger';

export const config = {
  api: { bodyParser: { sizeLimit: '2mb' } },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.NEWSLETTER_ADMIN_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const { message, currentHtml, scope, sectionName, sectionType, history } = req.body as {
      message?: string;
      currentHtml?: string;
      scope?: 'section' | 'newsletter';
      sectionName?: string;
      sectionType?: string;
      history?: ChatMessage[];
    };

    if (!message || !currentHtml) {
      return res.status(400).json({ message: 'Missing required fields: message, currentHtml' });
    }

    const safeScope: 'section' | 'newsletter' = scope === 'section' ? 'section' : 'newsletter';
    const trimmedHistory = Array.isArray(history) ? history.slice(-10) : undefined;

    logger.log(`Chat-edit request [scope=${safeScope}, section=${sectionType ?? '-'}]`);

    const result = await chatEditHtml({
      message,
      currentHtml,
      scope: safeScope,
      sectionName,
      sectionType,
      history: trimmedHistory,
    });

    return res.status(200).json({
      success: true,
      reply: result.reply,
      html: result.html,
    });
  } catch (error) {
    logger.error('Chat-edit error:', error);
    return res.status(500).json({
      success: false,
      message: 'Chat-edit failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
