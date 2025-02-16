import { folder_read_shallow_extensions } from "./folder_read_shallow_extensions.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_path_slash_forward } from "./folder_path_slash_forward.mjs";
import { list_map } from "./list_map.mjs";
import { app_extension_html } from "./app_extension_html.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
import { files_contents_lookup } from "./files_contents_lookup.mjs";
import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { object_map } from "./object_map.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
import { app_code_batch_name } from "./app_code_batch_name.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
export async function app_code_local_upload() {
  let paths_html = await folder_read_shallow_extensions(folder_path_public(), [
    app_extension_html(),
  ]);
  let paths_html_mapped = list_map(paths_html, function (p) {
    let m = folder_path_slash_forward(p);
    let m2 = string_combine_multiple([folder_current_prefix(), m]);
    return m2;
  });
  let htmls = await files_contents_lookup(paths_html_mapped);
  let mjss = await functions_source_get();
  let combined = object_merge_strict(mjss, htmls);
  let batch_name = await app_code_batch_name();
  let batch_path = app_code_local_files_path(batch_name);
  let files = object_map(combined, function (contents) {
    let v = {
      contents,
    };
    return v;
  });
  await storage_upload_object(batch_path, {
    files,
  });
  let latest_path = app_code_local_files_path_latest();
  await storage_upload_object(latest_path, {
    batch_path,
  });
}
