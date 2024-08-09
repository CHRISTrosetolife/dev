import { app_language_words } from "./app_language_words.mjs";
import { log } from "./log.mjs";
import { app_language_atom_count } from "./app_language_atom_count.mjs";
import { add } from "./add.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_index } from "./list_index.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_atom_title(group, atom_left, atom_right, invert) {
  assert_arguments_length(arguments, 4);
  let l = list_first(atom_left);
  let r = list_last(atom_right);
  let atom_count = app_language_atom_count();
  let words = app_language_words(l, r, invert);
  let text = string_combine_multiple([
    words,
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
