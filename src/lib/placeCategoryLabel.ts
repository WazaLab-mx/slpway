type Translate = (key: string, defaultValue: string) => string;

// "local-food" -> "Local Food"; used when a category has no translated label.
export function humanizeCategory(category: string): string {
  return category.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Translated label from `placeCategories.<slug>`, falling back to the humanized slug.
export function placeCategoryLabel(category: string, t: Translate): string {
  return t(`placeCategories.${category}`, humanizeCategory(category));
}
