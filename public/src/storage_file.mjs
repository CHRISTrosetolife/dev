import { storage_bucket_prefix } from "./storage_bucket_prefix.mjs";
export async function storage_file(prefix) {
  let bucket = await storage_bucket_prefix(prefix);
  let data = bucket.file(prefix);
  return data;
}
