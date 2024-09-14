import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
export async function html_cache_parse_hrefs(url, condition) {
  let root_bible = await html_cache_parse(url);
  let book_hrefs = html_parse_a_hrefs(root_bible, condition);
  return book_hrefs;
}
