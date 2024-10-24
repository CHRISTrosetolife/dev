import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_replace_nb_parenthesis } from "./html_replace_nb_parenthesis.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
export function app_language_refresh_node_begin_text() {
  let atom_count = app_language_atom_size();
  let begin_text = html_replace_nb_parenthesis(
    string_combine_multiple(["( learn words 1 - ", atom_count, " )"]),
  );
  return begin_text;
}
