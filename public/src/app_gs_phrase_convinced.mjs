import { list_random_item } from "./list_random_item.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_convinced() {
  return string_combine_multiple([
    string_random_or_empty(
      string_combine_multiple([list_random_item(["fully", "completely"]), " "]),
    ),
    list_random_item(["convinced", "persuaded"]),
  ]);
}
