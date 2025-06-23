import { log } from "./log.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
export async function storage_file_download_force(firebase_file) {
  let destination = storage_file_download_path(firebase_file);
  log({
    destination,
  });
  await folder_parent_exists_ensure(destination);
  await firebase_file.download({
    destination,
  });
}
