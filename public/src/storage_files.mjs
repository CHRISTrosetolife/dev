import { list_sort_string_property } from "./list_sort_string_property.mjs";
import { storage_bucket_prefix } from "./storage_bucket_prefix.mjs";
import { list_single } from "./list_single.mjs";
export async function storage_files(prefix) {
  let bucket = await storage_bucket_prefix(prefix);
  let data = await bucket.getFiles({
    prefix,
  });
  let files = list_single(data);
  list_sort_string_property(files, "name");
  return files;
}
