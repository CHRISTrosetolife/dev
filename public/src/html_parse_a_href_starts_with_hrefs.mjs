import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
export function html_parse_a_href_starts_with_hrefs(root, prefix) {
  let links_get = html_parse_a_href_starts_with;
  let links = links_get(root, prefix);
  let hrefs = list_map(links, html_parse_href);
  return hrefs;
}
