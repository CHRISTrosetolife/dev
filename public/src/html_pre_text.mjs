import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_pre_text(root, contents) {
  let e = html_element(root, "pre");
  html_inner_set(e, contents);
}
