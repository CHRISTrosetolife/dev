import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { bible_ceb_3_url_base } from "./bible_ceb_3_url_base.mjs";
export async function bible_ceb_3_hrefs() {
  let url_base = bible_ceb_3_url_base();
  let hrefs = await html_cache_parse_hrefs(
    url_base,
    string_starts_with_curry("B"),
  );
  return hrefs;
}
