import { global_get } from "./global_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function global_files_initialize(files) {
  object_property_set(global_get(), "files", files);
}
