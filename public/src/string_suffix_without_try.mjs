import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export function string_suffix_without_try(t, suffix) {
  if (string_ends_with(suffix)) {
    t = string_suffix_without(t, suffix);
  }
  return t;
}
