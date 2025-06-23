import { app_contact_firebase_folder_prefix } from "./app_contact_firebase_folder_prefix.mjs";
import { storage_files_download } from "./storage_files_download.mjs";
export async function app_contact_download() {
  let prefix = app_contact_firebase_folder_prefix();
  await storage_files_download();
}
