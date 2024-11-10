import { html_parse_a_hrefs_nodes_filter } from "./html_parse_a_hrefs_nodes_filter.mjs";
import { tautology } from "./tautology.mjs";
export function html_parse_a_hrefs(element) {
  return html_parse_a_hrefs_nodes_filter(element, tautology);
}
