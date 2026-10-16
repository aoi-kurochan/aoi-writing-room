import { articles } from "./content";

// 執筆室への追加月。2026-07-24/25、08-16、09-07/20、10-11の履歴と照合。
export const articleMonths: Record<string, string> = {
  "longform-with-codex": "2026-07",
  "ai-voice-before-after": "2026-07",
  "codex-book-rewrite": "2026-08",
  "writing-to-youtube": "2026-09",
  "ai-prompts": "2026-09",
  "kindle-category-tool": "2026-10",
};
export const articleResources: Record<string, readonly string[]> = {
  "longform-with-codex": ["01", "02", "03", "04", "05", "06", "07"],
  "codex-book-rewrite": ["08"],
};
export const monthlyArticles = [...articles].sort(
  (a, b) => articleMonths[b.slug].localeCompare(articleMonths[a.slug]) || Number(b.number) - Number(a.number),
);
export const updateMonths = [...new Set(monthlyArticles.map((a) => articleMonths[a.slug]))];
export function monthLabel(month: string) {
  return `${month.slice(0, 4)}年${Number(month.slice(5))}月`;
}
