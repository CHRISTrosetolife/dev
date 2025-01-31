import { html_style_font_color_default_set } from "./html_style_font_color_default_set.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_enable } from "./html_enable.mjs";
export function html_button_enable(button) {
  html_enable(button);
  html_style_button_default(button);
  html_style_font_color_default_set(button);
}
