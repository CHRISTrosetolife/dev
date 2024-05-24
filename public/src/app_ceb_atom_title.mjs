import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_colon_spaces } from "./list_join_colon_spaces.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { list_map_nested } from "./list_map_nested.mjs";
export function app_ceb_atom_title(atom) {
  let mapped = list_map_nested(atom, string_delimit_backtick);
  let text = string_combine_multiple([
    "words ",
    list_join_colon_spaces(list_first(mapped)),
    " through ",
    list_join_colon_spaces(list_last(mapped)),
  ]);
  return text;
}
