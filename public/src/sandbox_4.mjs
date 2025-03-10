import { list_second } from "./list_second.mjs";
import { list_size } from "./list_size.mjs";
import { assert } from "./assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_first } from "./list_first.mjs";
import { log } from "./log.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
export async function sandbox_4() {
  let word = "system";
  let url = string_combine_multiple([
    "https://www.urduword.com/search.php?English=",
    word,
  ]);
  let root = await html_cache_parse(url);
  let table = html_parse_visit_attribute_value_single(root, "cellpadding", "3");
  let rows = html_parse_visit_tag_list(table, "tr");
  list_adder(function (la) {});
  each(rows, function (row) {
    let columns = html_parse_visit_tag_list(row, "td");
    if (false) {
    }
    assert(gr, [list_size(columns), 4]);
    let column_first = list_first(columns);
    let columen_first_text = html_parse_text(column_first);
    let column_first_text_trimmed = string_trim_whitespace(columen_first_text);
    let column_first_lower = string_case_lower(column_first_text_trimmed);
    if (column_first_lower === word) {
      let column_second = list_second(columns);
      let column_second_text = html_parse_text(column_second);
      log(column_second_text);
    }
  });
  return;
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
