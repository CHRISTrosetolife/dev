import { storage_files_download } from "./storage_files_download.mjs";
import { app_contact_firebase_folder_prefix } from "./app_contact_firebase_folder_prefix.mjs";
export async function app_contact_download_file_paths() {
  let prefix = app_contact_firebase_folder_prefix();
  let file_paths = await storage_files_download(prefix);
  return file_paths;
}
