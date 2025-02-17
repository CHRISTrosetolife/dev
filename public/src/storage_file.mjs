import { storage_bucket_prefix } from "./storage_bucket_prefix.mjs";
export async function storage_file(file_path) {
  let bucket = await storage_bucket_prefix(file_path);
  let data = bucket.file(file_path);
  return data;
}
