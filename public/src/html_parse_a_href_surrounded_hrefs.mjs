import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_a_href_surrounded } from "./html_parse_a_href_surrounded.mjs";
export function html_parse_a_href_surrounded_hrefs(root, prefix, suffix) {
  let links = html_parse_a_href_surrounded(root, prefix, suffix);
  let v = list_map(links, html_parse_href);
  return v;
}
