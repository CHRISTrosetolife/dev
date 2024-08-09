import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_span } from "./html_span.mjs";
export function html_flag(p, country_code) {
  let s = html_span(p);
  html_attribute_set(s, "class", "fi fi-" + country_code);
}
