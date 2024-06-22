import { app_gs_phrase_doxology } from "./app_gs_phrase_doxology.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
export function app_gs_phrase_doxology_or_empty() {
  return string_random_or_empty(
    string_combine_multiple([app_gs_phrase_doxology(), " "]),
  );
}
