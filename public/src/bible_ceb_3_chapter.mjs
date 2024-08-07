import { list_size } from "./list_size.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { assert_message } from "./assert_message.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { equal_json } from "./equal_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { bible_ceb_3_url_base } from "./bible_ceb_3_url_base.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_second } from "./list_second.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { assert } from "./assert.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { log } from "./log.mjs";
import { list_get } from "./list_get.mjs";
import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_ceb_3_chapter(index) {
  let url_base = bible_ceb_3_url_base();
  let hrefs = await bible_ceb_3_hrefs();
  let href = list_get(hrefs, index);
  let url = string_combine(url_base, href);
  let root = await html_cache_parse(url);
  let root_text = html_parse_text(root);
  if (0) {
    log({
      url,
      index,
    });
  }
  if (string_includes(root_text, "404 Not Found")) {
    return [];
  }
  let tables = html_parse_visit_tag_list(root, "table");
  assert_message(less_than_equal, [list_size(tables), 2], () => ({
    url,
    index,
    root_text,
  }));
  let first = list_first(tables);
  let trs = html_parse_visit_tag_list(first, "tr");
  trs = list_skip(trs, 1);
  let verses = list_map(trs, (tr) => {
    let tds = html_parse_visit_tag_list(tr, "td");
    assert(list_size_2, [tds]);
    let verse_number = html_parse_text(list_first(tds));
    let text = html_parse_text(list_second(tds));
    let tokens = string_split_space(text);
    return {
      verse_number,
      tokens,
    };
  });
  let filtered = [];
  each(verses, (v) => {
    let existing = list_filter(filtered, (f) => equal_json(f, v));
    if (list_empty_is(existing)) {
      list_add(filtered, v);
    }
  });
  return filtered;
}
