import { string_starts_with } from "./string_starts_with.mjs";
export function string_starts_with_not(text, prefix) {
  return !string_starts_with(text, prefix);
}
