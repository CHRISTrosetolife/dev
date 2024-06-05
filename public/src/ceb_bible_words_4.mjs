import { list_single } from "./list_single.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_4() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "wordproject.org/bibles/ceb/",
  ]);
  let root_bible = await html_cache_parse(url_base);
  let newLocal = "ym-grid linearize-level-2";
  let s = list_single(html_parse_visit_class_list(root_bible, newLocal));
  return;
  let hrefs = html_parse_a_hrefs(root_bible, string_starts_with_curry("B"));
  await each_async(hrefs, async (href) => {
    log({
      href,
    });
    let url = string_combine(url_base, href);
    await html_cache_parse(url);
  });
}
