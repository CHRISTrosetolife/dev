import { html_p } from "./html_p.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_p_text(parent, text) {
  arguments_assert_length(arguments, 2);
  let p = html_p(parent);
  html_inner_set(p, text);
  return p;
}
