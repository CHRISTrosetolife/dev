import { object_property_get } from "./object_property_get.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
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
  list_sort_string_map(files, function (f) {
    let v = object_property_get(f, property_name);
    return v;
  });
  return files;
}
