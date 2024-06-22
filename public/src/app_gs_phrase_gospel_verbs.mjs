import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_gospel_verbs() {
  return string_combine_multiple([
    string_random_or_empty(
      string_combine_multiple([
        "died",
        string_random_or_empty(", was buried"),
        " and ",
      ]),
    ),
    "rose to life",
  ]);
}
