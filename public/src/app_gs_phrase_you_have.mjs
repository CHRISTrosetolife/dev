import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_phrase_you_have() {
  return string_combine_multiple(["you", list_random_item([" ha", "'"]), "ve"]);
}
