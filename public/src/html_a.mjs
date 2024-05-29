import { html_style_bold } from "./html_style_bold.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_a(e, text, url) {
  let a = html_element(e, "a");
  html_inner_set(a, text);
  html_attribute_set(a, "href", url);
  html_attribute_set(a, "target", "_blank");
  html_style_bold(a);
  return a;
}
