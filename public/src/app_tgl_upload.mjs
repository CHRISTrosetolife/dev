import { each_log_async } from "./each_log_async.mjs";
import { list_take } from "./list_take.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { equal_json } from "./equal_json.mjs";
import { list_index } from "./list_index.mjs";
import { list_get } from "./list_get.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { string_includes } from "./string_includes.mjs";
export async function app_tgl_upload() {
  let limit = 100;
  let filtered2 = await english_words_dictionary();
  let taken = list_take(filtered2, limit);
  let words = await list_adder_async(async (la) => {
    await each_log_async(taken, async (w) => {
      let p = await definition_bohol(w);
      let center = html_parse_visit_id(p, "center");
      let contents = html_parse_visit_class_single(center, "contents");
      let contents_text = html_parse_text(contents);
      let en = "English";
      if (
        string_includes(
          contents_text,
          string_combine_multiple(["No ", en, " words found matching"]),
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
      let tgl = "Tagalog";
      let expected = [en, "Grammar", "Cebuano", tgl, "Hiligaynon"];
      assert(equal_json, [languages, expected]);
      let en_index = list_index(expected, en);
      let tgl_index = list_index(expected, tgl);
      each(remaining, (row) => {
        let row_tds = html_parse_visit_tag_list(row, "td");
        assert(list_size_equal, [row_tds, expected]);
        let td_en = list_get(row_tds, en_index);
        let a_en = html_parse_visit_tag_single(td_en, "a");
        let word_en = html_parse_text(a_en);
        word_en = string_trim_whitespace(word_en);
        let td_tgl = list_get(row_tds, tgl_index);
        let as_tgl = html_parse_visit_tag_list(td_tgl, "a");
        list_map(as_tgl, (a_tgl) => {
          let href = html_parse_href(a_tgl);
          assert(string_starts_with, [href, "diksyunaryo.php?sw="]);
          assert(string_ends_with, [
            href,
            string_combine_multiple(["&lang=", tgl]),
          ]);
          let word_tgl = html_parse_text(a_tgl);
          word_tgl = string_trim_whitespace(word_tgl);
          la([word_tgl, word_en]);
        });
      });
    });
  });
  return words;
  let from = "tgl";
  let to = "en";
  let result_new = app_language_upload_result(atoms, {
    definitions,
  });
  let existing_path = await app_language_group_upload(
    {
      from,
      to,
    },
    "all",
    result_new,
  );
}
