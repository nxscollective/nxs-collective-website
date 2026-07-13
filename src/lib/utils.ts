/**
 * Lightweight class-name combiner (kept dependency-free so `npm install`
 * has nothing extra to fetch). Filters out falsy values and joins the rest.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
