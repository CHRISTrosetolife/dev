import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_concat } from "./list_concat.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
export function app_contact_separate(result, words_lower, w) {
  each(words_lower, function (l) {
    if (string_starts_with(w, l)) {
      let c = list_concat(result, [l]);
      let remaining = string_prefix_without(w, l);
    }
  });
}
