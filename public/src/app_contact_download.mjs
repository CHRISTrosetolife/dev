import { app_contact_download_file } from "./app_contact_download_file.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_contact_firebase_folder_prefix } from "./app_contact_firebase_folder_prefix.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { storage_files_download } from "./storage_files_download.mjs";
export async function app_contact_download() {
  let prefix = app_contact_firebase_folder_prefix();
  let file_paths = await storage_files_download(prefix);
  let d = await app_contact_dictionary();
  let mapped = await list_map_async(file_paths, async function (file_path) {
    let file = await file_read_json(file_path);
    let v = app_contact_download_file(file, d, file_path);
    return v;
  });
  let filtered = list_filter(mapped, function (m) {
    let v2 = object_property_get(m, "output_null");
    return v2;
  });
  let v3 = filtered;
  return v3;
}
