import { storage_bucket } from "./storage_bucket.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { error } from "./error.mjs";
export async function storage_files(prefix) {
  if (string_starts_with(destination, "/")) {
    error();
  }
  let bucket = await storage_bucket();
  return await bucket.getFiles({
    prefix,
  });
}
