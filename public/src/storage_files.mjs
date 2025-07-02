import { log } from "./log.mjs";
import { list_size } from "./list_size.mjs";
import { exit } from "./exit.mjs";
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
  let files_size = list_size(files);
  log({
    file_paths_size: files_size,
  });
  if (files_size >= 1000) {
    ("this needs pagination");
    exit();
  }
  return files;
}
