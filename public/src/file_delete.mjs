import { object_property_get } from "./object_property_get.mjs";
import { global_get } from "./global_get.mjs";
import { global_files } from "./global_files.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
export async function file_delete(file_name) {
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    let existing = object_property_get(files, file_name_from);
  }
  let fs = await import_node("fs");
  let v = await fs.promises.rm(file_name);
  return v;
}
