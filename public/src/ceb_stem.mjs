import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export function ceb_stem(word) {
  let suffix = "ng";
  if (string_ends_with(word, suffix)) {
    string_suffix_without(word, suffix);
  }
}
