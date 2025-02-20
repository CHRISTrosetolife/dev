import { global_get } from "./global_get.mjs";
import { global_files } from "./global_files.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
export async function file_delete(file_path) {
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    object_property_delete(files, file_path);
    return;
  }
  let fs = await import_node("fs");
  let v = await fs.promises.rm(file_path);
  return v;
}
