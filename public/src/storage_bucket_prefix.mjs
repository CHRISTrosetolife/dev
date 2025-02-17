import { storage_bucket } from "./storage_bucket.mjs";
import { error } from "./error.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function storage_bucket_prefix(prefix) {
  if (string_starts_with(prefix, "/")) {
    error();
  }
  let bucket = await storage_bucket();
  return bucket;
}
