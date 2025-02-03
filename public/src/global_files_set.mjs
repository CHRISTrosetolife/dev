import { global_files } from "./global_files.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function global_files_set(files) {
  object_property_set(global_get(), global_files(), files);
  return global_get();
}
