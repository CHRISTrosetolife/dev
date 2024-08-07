import { list_random_item } from "./list_random_item.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_jesus() {
  return string_combine_multiple([
    "Jesus",
    string_random_or_empty(" Christ"),
    string_random_or_empty(
      string_combine_multiple([
        " the ",
        list_random_item([
          "Messiah",
          string_combine_multiple([
            "Son of God",
            string_random_or_empty(" the Father"),
          ]),
        ]),
      ]),
    ),
  ]);
}
