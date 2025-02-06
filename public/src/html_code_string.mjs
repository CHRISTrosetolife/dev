import { string_delimit_double } from "./string_delimit_double.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_code_string(section, value) {
  let st = html_span_text(section, string_delimit_double(value));
  html_style_font_color(st, "chocolate");
}
