import { storage_files } from "./storage_files.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { list_first } from "./list_first.mjs";
export async function storage_files_download(prefix) {
  let bucket = await storage_bucket();
  let file_names = await storage_files(prefix);
  let file_name = list_first(file_names);
  let f = bucket.file(file_name);
  return f;
}
