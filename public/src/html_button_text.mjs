import { html_button_element } from "./html_button_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_button_text(container, text) {
  let b = html_button_element(container);
  html_inner_set(b, text);
  return b;
}
