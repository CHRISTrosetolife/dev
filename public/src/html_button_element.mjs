import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_element } from "./html_element.mjs";
export function html_button_element(root) {
  let result = html_element(root, "button");
  html_style_button_default(result);
  return result;
}
