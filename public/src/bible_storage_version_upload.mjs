import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export async function bible_storage_version_upload(bible_folder, key, data) {
  let destination = bible_storage_path_file_version(key, bible_folder);
  await storage_upload_object(data, destination);
}
