import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_3() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "htmlbible.com/sacrednamebiblecom/cebuano/",
  ]);
  let root_bible = await html_cache_parse(url_base);
  let hrefs = html_parse_a_hrefs(root_bible, string_starts_with_curry("B"));
  await each_async(hrefs, async (href) => {
    log({
      href,
    });
    let url = string_combine(url_base, href);
    let root = await html_cache_parse(url);
    let t = html_parse_visit_tag_list(root, "table");
    log(list_map(t, html_parse_text));
  });
}
