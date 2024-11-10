import { tautology } from "./tautology.mjs";
import { html_parse_a_hrefs_filter } from "./html_parse_a_hrefs_filter.mjs";
export function html_parse_a_hrefs(element) {
  return html_parse_a_hrefs_filter(element, tautology);
}
