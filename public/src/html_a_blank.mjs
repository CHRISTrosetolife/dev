import { html_a } from "./html_a.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_a_blank(parent, text, url) {
  let a = html_a(parent, text, url);
  html_attribute_set(a, "target", "_blank");
  return a;
}
