import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
export function html_parse_a_href_starts_with_hrefs_generic(
  links_get,
  root,
  prefix,
) {
  let links = links_get(root, prefix);
  let hrefs = list_map(links, html_parse_href);
  return hrefs;
}
