import { html_style_font_size_object } from "./html_style_font_size_object.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_font_size(c, size) {
  html_style(c, html_style_font_size_object(size));
}
