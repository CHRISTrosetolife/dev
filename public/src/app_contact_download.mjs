import { log } from "./log.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_contact_firebase_folder_prefix } from "./app_contact_firebase_folder_prefix.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { storage_files_download } from "./storage_files_download.mjs";
export async function app_contact_download() {
  let prefix = app_contact_firebase_folder_prefix();
  let file_paths = await storage_files_download(prefix);
  let mapped = list_map(file_paths, async function (file_path) {
    let file = await file_read_json(file_path);
    let message = object_property_get(file, "message");
    let r = app_contact_respond(message);
    let respond_null = r === null;
    let v = {
      file_path,
      message,
      respond_null,
    };
    log({
      v,
    });
    return v;
  });
  let filtered = list_filter(mapped, function (m) {
    log({
      m,
    });
    let v2 = object_property_get(m, "respond_null");
    return v2;
  });
  let v3 = filtered;
  return v3;
}
