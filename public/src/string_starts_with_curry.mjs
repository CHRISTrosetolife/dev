import { string_starts_with } from "./string_starts_with.mjs";
export function string_starts_with_curry(prefix) {
  return (h) => string_starts_with(h, prefix);
}
