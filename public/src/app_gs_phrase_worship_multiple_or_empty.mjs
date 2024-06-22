import { app_gs_phrase_worship } from "./app_gs_phrase_worship.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_worship_multiple_or_empty() {
  return string_combine_multiple([
    string_random_or_empty("Amen! "),
    string_random_or_empty(
      string_combine_multiple([app_gs_phrase_worship(), " "]),
    ),
  ]);
}
