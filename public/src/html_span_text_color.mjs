import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_color(section, keyword, color) {
  let kw = html_span_text(section, keyword);
  html_style_font_color(kw, color);
}
