import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_you_have } from "./app_gs_phrase_you_have.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_what_youve_said() {
  return string_combine_multiple([
    "what ",
    app_gs_phrase_you_have(),
    list_random_item(["said", "spoken"]),
    string_random_or_empty(" to me"),
  ]);
}
