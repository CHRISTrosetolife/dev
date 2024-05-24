import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_style } from "./html_style.mjs";
import { html_element } from "./html_element.mjs";
export function html_button(root) {
  let result = html_element(root, "button");
  html_style(result, html_style_button_default_value());
  return result;
}
