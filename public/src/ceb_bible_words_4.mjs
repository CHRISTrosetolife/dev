import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { tautology } from "./tautology.mjs";
import { list_remove } from "./list_remove.mjs";
export async function ceb_bible_words_4() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "wordproject.org/bibles/ceb/",
  ]);
  let root_bible = await html_cache_parse(url_base);
  let newLocal = "ym-grid linearize-level-2";
  let s = html_parse_visit_class_single(root_bible, newLocal);
  let hrefs = html_parse_a_hrefs(s, tautology);
  list_remove(hrefs, "index_en.htm#1");
  await each_async(hrefs, async (href) => {
    log({
      href,
    });
    let url = string_combine(url_base, href);
    await html_cache_parse(url);
  });
}
