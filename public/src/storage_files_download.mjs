import { storage_files } from "./storage_files.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
export async function storage_files_download(prefix) {
  let bucket = await storage_bucket();
  let file_names = await storage_files(prefix);
}
