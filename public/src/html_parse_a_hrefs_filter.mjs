import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_a_hrefs_nodes_filter } from "./html_parse_a_hrefs_nodes_filter.mjs";
export function html_parse_a_hrefs_filter(root, condition) {
  let nodes = html_parse_a_hrefs_nodes_filter(root, condition);
  return list_map(nodes, html_parse_href);
}
