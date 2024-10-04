import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let prefix_url = "https://mechon-mamre.org/p/pt/";
  let url = string_combine_multiple([prefix_url, "pt00.htm"]);
  let p = await http_cache_parse_parsed(url);
  let { root } = p;
  let links = html_parse_a_href_starts_with(root, "../../mp3/");
  return list_size(links);
}
