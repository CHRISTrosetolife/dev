import { html_button_element } from "./html_button_element.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
export function html_button_width_full(parent) {
  let b = html_button_element(parent);
  html_style_width_full(b);
  return b;
}
