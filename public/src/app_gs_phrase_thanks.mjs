import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_phrase_thanks() {
  return list_random_item([
    string_combine_multiple(["Thanks", string_random_or_empty(" a lot")]),
    string_combine_multiple([
      "Thank you",
      string_random_or_empty(" very much"),
    ]),
  ]);
}
