import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { log } from "./log.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
export async function app_tgl_upload() {
  let p = await definition_bohol("the");
  html_parse_visit_class_single();
  log({
    p,
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
