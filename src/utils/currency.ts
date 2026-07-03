const MXN_FORMATTER = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Parses a price value into a number.
 * Accepts numbers or strings with currency decoration ($, MXN, pesos, commas).
 * Returns null when the value is not a recognizable price.
 */
function parsePrice(price: string | number): number | null {
  if (typeof price === 'number') {
    return Number.isFinite(price) ? price : null;
  }

  // Strip currency decoration only; any other letters mean it's not a price.
  const stripped = price
    .replace(/\bMXN\b|\bpesos?\b/gi, '')
    .replace(/[$,\s]/g, '');

  if (!/^-?\d+(\.\d+)?$/.test(stripped)) {
    return null;
  }

  return parseFloat(stripped);
}

/**
 * Formats a price value to Mexican peso currency format.
 * @param price - The price value (can be string or number)
 * @returns Formatted price string like "$1,234.00 MXN"
 */
export function formatMXNPrice(price: string | number | null | undefined): string {
  if (price === null || price === undefined || price === '') return '';

  const numericPrice = parsePrice(price);
  if (numericPrice === null) {
    return price.toString(); // Return original if we can't parse it
  }

  return `${MXN_FORMATTER.format(numericPrice)} MXN`;
}

/**
 * Formats a price value for display in listing cards (compact format).
 * @param price - The price value (can be string or number)
 * @returns Formatted price string like "$1,234.00"
 */
export function formatMXNPriceCompact(price: string | number | null | undefined): string {
  if (price === null || price === undefined || price === '') return '';

  const numericPrice = parsePrice(price);
  if (numericPrice === null) {
    return price.toString(); // Return original if we can't parse it
  }

  return MXN_FORMATTER.format(numericPrice);
}
