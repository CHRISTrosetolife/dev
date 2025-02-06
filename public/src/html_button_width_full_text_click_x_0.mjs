import { html_button } from "./html_button.mjs";
import { html_style_margin_x_0 } from "./html_style_margin_x_0.mjs";
export function html_button_width_full_text_click_x_0(root, key, value) {
  let b = html_button(root, key, value);
  html_style_margin_x_0(b);
  return b;
}
