import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_join_colon_spaces } from "./list_join_colon_spaces.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { list_map_nested } from "./list_map_nested.mjs";
export function app_language_words(l, r, invert) {
  let mapped = list_map_nested([l, r], string_delimit_backtick);
  let words = string_combine_multiple([
    "words ",
    html_replace_nb(
      list_join_colon_spaces((invert ? list_last : list_first)(mapped)),
    ),
    " - ",
    html_replace_nb(
      list_join_colon_spaces((invert ? list_first : list_last)(mapped)),
    ),
  ]);
  return words;
}
