function hasVerifiedActivity(source) {
  if (!source?.url || !Number.isFinite(Date.parse(source.observedAt))) return false;
  if (source.evidenceKind === 'indexed_post') {
    if (!source.dateEvidence || !Number.isFinite(Date.parse(source.publishedAt))) return false;
    const metric = source.metric;
    return !!metric && typeof metric.display === 'string' && Number.isFinite(metric.value)
      && (metric.type === 'views' ? metric.value >= 1000
        : ['comments', 'replies'].includes(metric.type) && metric.value >= 2);
  }
  return Number.isFinite(source.participantCount) && source.participantCount >= 2
    && Number.isFinite(source.commentCount) && source.commentCount >= 2;
}

function evidenceLabel(source, locale) {
  if (source.evidenceKind === 'indexed_post') {
    const count = source.metric.display;
    const views = source.metric.type === 'views';
    return {
      es: `${count} ${views ? 'visualizaciones' : 'comentarios'} en la página indexada.`,
      en: `${count} ${views ? 'views' : 'comments'} shown on the indexed page.`,
      de: `${count} ${views ? 'Aufrufe' : 'Kommentare'} auf der indexierten Seite.`,
      ja: `インデックス済みページに${count}${views ? '回の閲覧' : '件のコメント'}を表示。`,
    }[locale];
  }
  return {
    es: `Al menos ${source.commentCount} respuestas observadas.`,
    en: `At least ${source.commentCount} replies observed.`,
    de: `Mindestens ${source.commentCount} beobachtete Antworten.`,
    ja: `少なくとも${source.commentCount}件の返信を確認。`,
  }[locale];
}

module.exports = { hasVerifiedActivity, evidenceLabel };
