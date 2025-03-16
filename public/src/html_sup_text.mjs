import { html_inner_set } from "./html_inner_set.mjs";
import { html_sup } from "./html_sup.mjs";
export function html_sup_text(root, e) {
  let exponent = html_sup(root);
  html_inner_set(exponent, e);
  return exponent;
}
