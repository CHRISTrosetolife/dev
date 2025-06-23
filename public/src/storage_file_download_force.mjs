import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
export async function storage_file_download_force(firebase_file) {
  await folder_parent_exists_ensure(destination);
  await firebase_file.download({
    destination,
  });
}
