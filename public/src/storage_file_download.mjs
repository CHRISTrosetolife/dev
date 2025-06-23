import { storage_file_download_force } from "./storage_file_download_force.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function storage_file_download(firebase_file) {
  let destination = storage_file_download_path(firebase_file);
  if (await file_exists_not(destination)) {
    await storage_file_download_force(firebase_file);
  }
  let v = destination;
  return v;
}
