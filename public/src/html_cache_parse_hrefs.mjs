import { html_parse_a_hrefs_filter } from "./html_parse_a_hrefs_filter.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
export async function html_cache_parse_hrefs(url, condition) {
  let root_bible = await html_cache_parse(url);
  let book_hrefs = html_parse_a_hrefs_filter(root_bible, condition);
  return book_hrefs;
}
