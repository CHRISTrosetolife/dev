import { object_properties } from "./object_properties.mjs";
import { global_get } from "./global_get.mjs";
export function app_code_global_file_paths() {
  let { files } = global_get();
  let choices = object_properties(files);
  return choices;
}
