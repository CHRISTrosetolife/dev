import { html_pre } from "./html_pre.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_pre_text(root, contents) {
  let e = html_pre(root);
  html_inner_set(e, contents);
  return e;
}
