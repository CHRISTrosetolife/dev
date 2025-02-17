import { list_sort_string_map_property } from "./list_sort_string_map_property.mjs";
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
  let property_name = "name";
  list_sort_string_map_property(files, property_name);
  return files;
}
