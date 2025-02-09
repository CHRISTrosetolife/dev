import { list_first } from "./list_first.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { log } from "./log.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
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
  let tr_first = list_first(trs);
  let td = html_parse_visit_tag_list(tr_first, "td");
  log({
    table,
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
