import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_doxology() {
  return string_combine_multiple([
    list_random_item([
      string_combine_multiple([
        "Praise the Lord",
        string_random_or_empty(", our God"),
      ]),
      "Thank You, Jesus",
      string_combine_multiple([
        "Praise be to ",
        list_random_item(["our God and Savior", "God"]),
      ]),
      "What a God we serve",
    ]),
    "!",
  ]);
}
