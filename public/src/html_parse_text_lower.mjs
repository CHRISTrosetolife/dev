import { string_case_lower } from "./string_case_lower.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export function html_parse_text_lower(c) {
  let t = html_parse_text(c);
  t = string_case_lower(t);
  return t;
}
