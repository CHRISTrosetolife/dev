import { global_files } from "./global_files.mjs";
import { file_read_generic } from "./file_read_generic.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { web_is } from "./web_is.mjs";
export async function file_read(file_name) {
  if (web_is()) {
    let g = global_get();
    let { [global_files()]: files } = g;
    let existing = object_property_get(files, file_name);
    return existing;
  }
  let encoding = "utf-8";
  let v2 = await file_read_generic(file_name, encoding);
  return v2;
}
