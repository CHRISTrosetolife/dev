import { app_contact_firebase_folder_combine } from "./app_contact_firebase_folder_combine.mjs";
import { storage_files_download } from "./storage_files_download.mjs";
export async function app_contact_download() {
  app_contact_firebase_folder_combine("");
  await storage_files_download();
}
