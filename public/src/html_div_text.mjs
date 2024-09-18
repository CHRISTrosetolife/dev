import { html_inner_set } from "./html_inner_set.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_text(root, item) {
  let d = html_div(root);
  html_inner_set(d, item);
}
