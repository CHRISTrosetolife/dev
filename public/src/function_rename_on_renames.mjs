import { file_rename } from "./file_rename.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function function_rename_on_renames() {
  let g = global_function_initialize(file_rename, () => ({
    on_renames: [],
  }));
  let on_renames = object_property_get(g, "on_renames");
  return on_renames;
}
