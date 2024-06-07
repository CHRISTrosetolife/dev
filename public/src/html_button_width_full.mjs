import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_width_full(parent) {
  let b = html_button(parent);
  html_style_width_full(b);
  return b;
}
