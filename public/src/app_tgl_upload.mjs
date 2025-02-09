import { object_property_get } from "./object_property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { log } from "./log.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { equal_json } from "./equal_json.mjs";
import { list_index } from "./list_index.mjs";
export async function app_tgl_upload() {
  let p = await definition_bohol("the");
  let center = html_parse_visit_id(p, "center");
  let contents = html_parse_visit_class_single(center, "contents");
  let table = html_parse_visit_attribute_value_single(
    contents,
    "width",
    "100%",
  );
  let trs = html_parse_visit_tag_list(table, "tr");
  let fr = list_first_remaining(trs);
  let remaining = object_property_get(fr, "remaining");
  let first = object_property_get(fr, "first");
  let td = html_parse_visit_tag_list(tr_first, "td");
  let languages = list_map(td, html_parse_text);
  let en = "English";
  let tgl = "Tagalog";
  let expected = [en, "Grammar", "Cebuano", tgl, "Hiligaynon"];
  assert(equal_json, [languages, expected]);
  let en_index = list_index(expected, en);
  let tgl_index = list_index(expected, tgl);
  log({
    languages,
  });
  return;
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
