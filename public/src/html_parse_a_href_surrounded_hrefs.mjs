import { html_parse_a_href_surrounded } from "./html_parse_a_href_surrounded.mjs";
import { html_parse_a_href_starts_with_hrefs_generic } from "./html_parse_a_href_starts_with_hrefs_generic.mjs";
export function html_parse_a_href_surrounded_hrefs(root, prefix) {
  let links_get = html_parse_a_href_surrounded;
  let v = html_parse_a_href_starts_with_hrefs_generic(links_get, root, prefix);
  return v;
}
