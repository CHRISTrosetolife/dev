import { firebase_download } from "./firebase_download.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export async function firebase_download_bible(key, version_folder) {
  let destination = bible_storage_path_file_version(key, version_folder);
  return await firebase_download(destination);
}
