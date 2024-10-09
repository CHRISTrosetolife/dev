import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_prefix_without_try(t, prefix) {
  if (string_starts_with(t, prefix)) {
    t = string_prefix_without(t, prefix);
  }
  return t;
}
