import { ceb_definition_prefix_en } from "./ceb_definition_prefix_en.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_tag_attribute_value } from "./html_parse_visit_tag_attribute_value.mjs";
import { html_parse_map_text_trim } from "./html_parse_map_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { ceb_definition_prefix_1 } from "./ceb_definition_prefix_1.mjs";
import { ceb_definition_no_results } from "./ceb_definition_no_results.mjs";
import { ceb_html_cache_parse_form1 } from "./ceb_html_cache_parse_form1.mjs";
import { ceb_definition_url } from "./ceb_definition_url.mjs";
import { assert } from "./assert.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
export async function ceb_definition_2(word) {
  let url = ceb_definition_url(word);
  let { parsed, children, form1 } = await ceb_html_cache_parse_form1(url);
  if (ceb_definition_no_results(children)) {
    return {
      word,
      definitions: [],
    };
  }
  let table = html_parse_visit_tag_attribute_value(
    form1,
    "tbody",
    "style",
    "border-top:none;color:black",
  );
  let result = {};
  let prefix_1 = ceb_definition_prefix_1();
  let prefix_2 = ceb_definition_prefix_en();
  let rows = html_parse_visit_tag_list(table, "tr");
  each(rows, (row) => {
    let row_text = html_parse_text(row);
    if (string_empty_is(row_text)) {
      return;
    }
    let columns = html_parse_visit_tag_list(row, "td");
    assert(list_size_2, [columns]);
    let f = list_first(columns);
    let a_href_fs = html_parse_a_href_starts_with(f, prefix_1);
    let word_cebs = html_parse_map_text_trim(a_href_fs);
    let s = list_second(columns);
    let a_href_ss = html_parse_a_href_starts_with(s, prefix_2);
    let word_ens = html_parse_map_text_trim(a_href_ss);
    object_merge_strict(result, {
      [list_single(word_cebs)]: word_ens,
    });
  });
  return result;
}
