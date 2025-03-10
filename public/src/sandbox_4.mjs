import { each } from "./each.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function sandbox_4() {
  let word = "system";
  let url = string_combine_multiple([
    "https://www.urduword.com/search.php?English=",
    word,
  ]);
  let root = await html_cache_parse(url);
  let table = html_parse_visit_attribute_value_single(root, "cellpadding", "3");
  let rows = html_parse_visit_tag_list(table, "tr");
  each(list, function (item) {});
  log(
    list_map(rows, function (row) {
      let v = list_first(html_parse_children(row));
      let v2 = html_parse_text(v);
      return v;
    }),
  );
  return;
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
