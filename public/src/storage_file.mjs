import { storage_bucket_prefix } from "./storage_bucket_prefix.mjs";
import { list_sort_string_map_property } from "./list_sort_string_map_property.mjs";
import { list_single } from "./list_single.mjs";
export async function storage_file(prefix) {
  let bucket = await storage_bucket_prefix(prefix);
  let data = await bucket.getFiles({
    prefix,
  });
  let files = list_single(data);
  list_sort_string_map_property(files, "name");
  return files;
}
