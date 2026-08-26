// OpenAI GPT-5.6 tiers (2026-08). All are reasoning models: the Responses API
// rejects `temperature` / `top_p` for them, so call sites must not pass those.
//
// - sol:   deepest reasoning, slowest, $5/$30 per 1M tokens — weekly full edition.
// - terra: balanced (≈ GPT-5.5 quality at half the cost), $2.50/$15 — short and
//          interactive calls where latency matters.
export const NEWSLETTER_MODEL = 'gpt-5.6-sol';
export const NEWSLETTER_FAST_MODEL = 'gpt-5.6-terra';
