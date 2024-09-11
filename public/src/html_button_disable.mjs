import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { html_style_border_color } from "./html_style_border_color.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_disable } from "./html_disable.mjs";
export function html_button_disable(button) {
  html_disable(button);
  html_style_font_color_gray(button);
  html_style_background_color(button, "#d8ecf3");
  html_style_border_color(button, "lightblue");
}
