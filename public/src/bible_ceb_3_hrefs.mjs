import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_ceb_3_url_base } from "./bible_ceb_3_url_base.mjs";
export async function bible_ceb_3_hrefs() {
  let url_base = bible_ceb_3_url_base();
  let root_bible = await html_cache_parse(url_base);
  let hrefs = html_parse_a_hrefs(root_bible, string_starts_with_curry("B"));
  return hrefs;
}
