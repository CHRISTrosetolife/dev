import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export async function bible_storage_version_upload(bible_folder, key, data) {
  let storage_path = bible_storage_path_file_version(bible_folder, key);
  await storage_upload_object_gitignore(storage_path, data);
}
