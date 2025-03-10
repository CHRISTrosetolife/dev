import { string_case_lower } from "./string_case_lower.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { list_size } from "./list_size.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { string_parenthesis_remove } from "./string_parenthesis_remove.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { each } from "./each.mjs";
import { list_index } from "./list_index.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_includes } from "./string_includes.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { definition_bohol_http_parse } from "./definition_bohol_http_parse.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function definition_bohol(word, language_from, language_to) {
  let pairs = await list_adder_async(async function (la_inner) {
    let p = await definition_bohol_http_parse(word, language_from);
    let center = html_parse_visit_id(p, "center");
    let contents = html_parse_visit_class_single(center, "contents");
    let contents_text = html_parse_text(contents);
    if (
      string_includes(
        contents_text,
        string_combine_multiple([
          "No ",
          language_from,
          " words found matching",
        ]),
      )
    ) {
      return;
    }
    let table = html_parse_visit_attribute_value_single(
      contents,
      "width",
      "100%",
    );
    let trs = html_parse_visit_tag_list(table, "tr");
    let fr = list_first_remaining(trs);
    let remaining = object_property_get(fr, "remaining");
    let tr_first = object_property_get(fr, "first");
    let first_tds = html_parse_visit_tag_list(tr_first, "td");
    let languages = list_map(first_tds, html_parse_text);
    let expected = ["English", "Grammar", "Cebuano", "Tagalog", "Hiligaynon"];
    assert(equal_json, [languages, expected]);
    let en_index = list_index(expected, language_from);
    let tgl_index = list_index(expected, language_to);
    each(remaining, function (row) {
      let row_tds = html_parse_visit_tag_list(row, "td");
      assert(list_size_equal, [row_tds, expected]);
      let td_en = list_get(row_tds, en_index);
      let a_en = html_parse_visit_tag_single(td_en, "a");
      let word_en = html_parse_text(a_en);
      word_en = string_trim_whitespace(word_en);
      let td_tgl = list_get(row_tds, tgl_index);
      let a_tgl = html_parse_visit_tag_single(td_tgl, "a");
      let href = html_parse_href(a_tgl);
      assert(string_starts_with, [href, "diksyunaryo.php?sw="]);
      let words_tgl = html_parse_text(a_tgl);
      let split = string_split_comma(words_tgl);
      if (!string_includes(words_tgl, "'")) {
        assert(string_ends_with, [
          href,
          string_combine_multiple(["&lang=", language_to]),
        ]);
      }
      list_map(split, function (s) {
        let word_tgl = string_parenthesis_remove(s);
        word_tgl = string_trim_whitespace(word_tgl);
        if (string_empty_is(word_tgl)) {
          return;
        }
        let w_split = string_split_space(word_tgl);
        if (false) {
          let max_word_count = 1;
          if (list_size(w_split) > max_word_count) {
            return;
          }
        }
        let pair = [word_tgl, word_en];
        pair = list_map(pair, string_case_lower);
        la_inner(pair);
      });
    });
  });
  pairs = list_unique_json(pairs);
  return pairs;
}
