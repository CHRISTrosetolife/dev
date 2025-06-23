import { list_map } from "./list_map.mjs";
import { app_contact_firebase_folder_prefix } from "./app_contact_firebase_folder_prefix.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { storage_files_download } from "./storage_files_download.mjs";
export async function app_contact_download() {
  let prefix = app_contact_firebase_folder_prefix();
  let file_paths = await storage_files_download(prefix);
  let messages = list_map(file_path, async function () {
    let read = await file_read_json(file_path);
  });
  list_fil;
}
