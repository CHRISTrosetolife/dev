import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_gray(parent, text) {
  let s2 = html_span_text(parent, text);
  html_style_font_color_gray(s2);
}
