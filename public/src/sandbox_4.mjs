import { never } from "./never.mjs";
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
    assert(never, []);
    let column_first = list_first(columns);
    let column_first_text = string_trim_whitespace(
      html_parse_text(column_first),
    );
    let lower = string_case_lower(column_first_text);
    if (lower === word) {
      log(lower);
    }
  });
  return;
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
