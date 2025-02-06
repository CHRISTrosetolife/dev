import { html_span_text_font_color } from "./html_span_text_font_color.mjs";
import { string_delimit_double } from "./string_delimit_double.mjs";
export function html_code_string(section, value) {
  let text = string_delimit_double(value);
  html_span_text_font_color(section, text, "chocolate");
}
