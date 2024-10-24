import { string_replace_nb } from "./string_replace_nb.mjs";
import { string_replace } from "./string_replace.mjs";
export function html_replace_nb_parenthesis(s) {
  s = string_replace_nb(s, " ");
  s = string_replace(s, "-", "&#8209;");
  return s;
}
