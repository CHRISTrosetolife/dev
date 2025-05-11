import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_a_href_surrounded } from "./html_parse_a_href_surrounded.mjs";
export function html_parse_a_href_surrounded_hrefs(root, prefix) {
  let links_get = html_parse_a_href_surrounded;
  let links = links_get(root, prefix);
  let v = list_map(links, html_parse_href);
  return v;
}
