import { firebase_download } from "./firebase_download.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export async function firebase_download_bible(version_folder, key) {
  let destination = bible_storage_path_file_version(version_folder, key);
  return await firebase_download(destination);
}
