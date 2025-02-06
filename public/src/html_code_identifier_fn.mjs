import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_code_identifier_fn(parent, name) {
  let f_name = html_span_text(parent, name);
  html_style_font_color(f_name, "forestgreen");
}
