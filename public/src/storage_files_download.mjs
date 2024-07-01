import { object_properties } from "./object_properties.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
export async function storage_files_download(prefix) {
  let bucket = await storage_bucket();
  return object_properties(bucket);
}
