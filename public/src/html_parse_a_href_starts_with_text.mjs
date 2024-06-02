import { html_parse_map_text_trim } from "./html_parse_map_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
export function html_parse_a_href_starts_with_text(parsed, prefix) {
  let filtered = html_parse_a_href_starts_with(parsed, prefix);
  let mapped3 = html_parse_map_text_trim(parsed, filtered);
  return mapped3;
}
