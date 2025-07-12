import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_concat } from "./list_concat.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_contact_separate(dictionary, remaining, result) {
  if (string_empty_is(remaining)) {
    let v = [result];
    return v;
  }
  let results = [];
  each(dictionary, function (d) {
    if (string_starts_with(remaining, d)) {
      let result_new = list_concat(result, [d]);
      let remaining_new = string_prefix_without(remaining, d);
      let r = app_contact_separate(dictionary, remaining_new, result_new);
      list_add_multiple(results, r);
    }
  });
  let v2 = results;
  return v2;
}
