import { html_style_font_size_object } from "./html_style_font_size_object.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_font_size(begin, font_size_bigger) {
  html_style(begin, html_style_font_size_object(font_size_bigger));
}
