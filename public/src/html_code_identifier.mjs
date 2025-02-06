import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_code_identifier(parent, param) {
  let f_name = html_span_text(parent, param);
  html_style_font_color(f_name, "blue");
}
