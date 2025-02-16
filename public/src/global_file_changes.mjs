import { object_property_initialize } from "./object_property_initialize.mjs";
import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
import { global_function } from "./global_function.mjs";
export function global_file_changes() {
  let g = global_function(file_overwrite_generic);
  let fcs = object_property_initialize(g, "files_changes", []);
  return fcs;
}
