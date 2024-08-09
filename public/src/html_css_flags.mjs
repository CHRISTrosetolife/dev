import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_css_flags(parent) {
  let c = html_element(parent, "link");
  html_attribute_set(c, "rel", "stylesheet");
  html_attribute_set(
    c,
    "href",
    "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css",
  );
}
