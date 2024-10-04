import { html_parse_href } from "./html_parse_href.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let prefix_url = "https://mechon-mamre.org/p/pt/";
  let url = string_combine_multiple([prefix_url, "pt00.htm"]);
  let p = await http_cache_parse_parsed(url);
  let { root } = p;
  let prefix = "../../mp3/";
  let links = html_parse_a_href_starts_with(root, prefix);
  let hrefs = list_map(links, html_parse_href);
  return hrefs;
}
