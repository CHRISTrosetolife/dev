import { list_sort_string } from "./list_sort_string.mjs";
import { list_single } from "./list_single.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { error } from "./error.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function storage_files(prefix) {
  if (string_starts_with(prefix, "/")) {
    error();
  }
  let bucket = await storage_bucket();
  let data = await bucket.getFiles({
    prefix,
  });
  let files = list_single(data);
  list_sort_string(files, (f) => f.name);
  return files;
}
