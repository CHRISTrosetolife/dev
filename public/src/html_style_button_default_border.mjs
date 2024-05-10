import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_style_button_default_border_color } from "./html_style_button_default_border_color.mjs";
export function html_style_button_default_border() {
  let color = html_style_button_default_border_color();
  return html_style_default_border_value(color);
}
