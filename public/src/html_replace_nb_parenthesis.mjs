import { each } from "./each.mjs";
import { string_replace_nb } from "./string_replace_nb.mjs";
export function html_replace_nb_parenthesis(s) {
  each(["(", ")"], (item) => {});
  s = string_replace_nb(s, " ");
  return s;
}
