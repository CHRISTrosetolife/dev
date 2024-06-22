import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_thanks() {
  return string_combine_multiple([
    string_combine_multiple(["Thanks", string_random_or_empty(" a lot")]),
    string_combine_multiple([
      "Thank you",
      string_random_or_empty(" very much"),
    ]),
  ]);
}
