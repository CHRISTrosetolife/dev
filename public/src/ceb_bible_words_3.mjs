import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function ceb_bible_words_3() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "htmlbible.com/sacrednamebiblecom/cebuano/",
  ]);
  let root_bible = await html_cache_parse(url_base);
  html_parse_a_hrefs();
}
