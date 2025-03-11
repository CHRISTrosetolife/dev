import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export function html_parse_text_trim_whitespace(a) {
  let t = html_parse_text(a);
  t = string_trim_whitespace(t);
  return t;
}
