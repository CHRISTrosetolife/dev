import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_concat } from "./list_concat.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
export function app_contact_separate(result, dictionary, remaining) {
  each(dictionary, function (d) {
    if (string_starts_with(remaining, d)) {
      let result_new = list_concat(result, [d]);
      let remaining_new = string_prefix_without(remaining, d);
      app_contact_separate(result_new, dictionary, remaining_new);
    }
  });
}
