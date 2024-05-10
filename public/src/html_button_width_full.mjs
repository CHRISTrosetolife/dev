import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_width_full(root) {
  let button_previous = html_button(root);
  html_style_width_full(button_previous);
  return button_previous;
}
