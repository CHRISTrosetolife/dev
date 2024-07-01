import { storage_file_download_path_string } from "./storage_file_download_path_string.mjs";
export function storage_file_download_path(firebase_file) {
  let file_name = firebase_file.name;
  return storage_file_download_path_string(file_name);
}
