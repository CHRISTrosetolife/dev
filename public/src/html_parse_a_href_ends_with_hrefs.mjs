import { html_parse_a_href_ends_with } from "./html_parse_a_href_ends_with.mjs";
import { html_parse_a_href_starts_with_hrefs_generic } from "./html_parse_a_href_starts_with_hrefs_generic.mjs";
export function html_parse_a_href_ends_with_hrefs(root, prefix) {
  let links_get = html_parse_a_href_ends_with;
  return html_parse_a_href_starts_with_hrefs_generic(links_get, root, prefix);
}
