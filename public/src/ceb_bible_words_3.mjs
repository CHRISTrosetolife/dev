import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { bible_ceb_3_url_base } from "./bible_ceb_3_url_base.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_second } from "./list_second.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_first } from "./list_first.mjs";
import { list_length_2 } from "./list_length_2.mjs";
import { assert } from "./assert.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { log } from "./log.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
import { list_get } from "./list_get.mjs";
export async function ceb_bible_words_3() {
  let hrefs = await bible_ceb_3_hrefs();
  await each_index_async(hrefs, async (href_, index) => {
    let url_base = bible_ceb_3_url_base();
    let hrefs = await bible_ceb_3_hrefs();
    let href = list_get(hrefs, index);
    log({
      href,
    });
    let url = string_combine(url_base, href);
    let root = await html_cache_parse(url);
    let tables = html_parse_visit_tag_list(root, "table");
    assert(list_length_2, [tables]);
    let first = list_first(tables);
    let trs = html_parse_visit_tag_list(first, "tr");
    let verses = list_map(trs, (tr) => {
      let tds = html_parse_visit_tag_list(tr, "td");
      assert(list_length_2, [tds]);
      let verse_number = html_parse_text(list_first(tds));
      let text = html_parse_text(list_second(tds));
      let tokens = string_split_space(text);
      return {
        verse_number,
        tokens,
      };
    });
  });
}
