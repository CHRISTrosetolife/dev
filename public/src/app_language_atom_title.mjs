import { html_replace_nb } from "./html_replace_nb.mjs";
import { log } from "./log.mjs";
import { app_language_atom_count } from "./app_language_atom_count.mjs";
import { add } from "./add.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_colon_spaces } from "./list_join_colon_spaces.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { list_map_nested } from "./list_map_nested.mjs";
import { list_index } from "./list_index.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_atom_title(group, atom_left, atom_right, invert) {
  assert_arguments_length(arguments, 4);
  let l = list_first(atom_left);
  let r = list_last(atom_right);
  let atom_count = app_language_atom_count();
  let mapped = list_map_nested([l, r], string_delimit_backtick);
  let text = string_combine_multiple([
    string_combine_multiple([
      "words ",
      html_replace_nb(
        list_join_colon_spaces((invert ? list_last : list_first)(mapped)),
      ),
      " - ",
      html_replace_nb(
        list_join_colon_spaces((invert ? list_first : list_last)(mapped)),
      ),
    ]),
    "<br>( words ",
    add_1(multiply(list_index(group, atom_left), atom_count)),
    " - ",
    add(multiply(list_index(group, atom_right), atom_count), atom_count),
    " ) ",
  ]);
  log({
    inverted: invert,
  });
  return text;
}
