import { ceb_definition_prefix } from "./ceb_definition_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function ceb_definition_url(word) {
  return string_combine_multiple([
    ceb_definition_prefix(),
    "node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
}
