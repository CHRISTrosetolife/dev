import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function storage_file_download(firebase_file) {
  let destination = storage_file_download_path(firebase_file);
  if (await file_exists_not(destination)) {
    await folder_parent_exists_ensure(destination);
    firebase_file.download({
      destination,
    });
  }
}
