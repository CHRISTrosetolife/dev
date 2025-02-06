import { html_style_font_color } from "./html_style_font_color.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_code_string(section, value) {
  let st = html_span_text(section, string_delimit(value));
  html_style_font_color(st, "chocolate");
}
