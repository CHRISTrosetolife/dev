import { global_get } from "./global_get.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { web_is } from "./web_is.mjs";
export async function file_read(file_name) {
  if (web_is()) {
    let g = global_get();
    let { files } = g;
    return object_property_get(files, file_name);
  }
  let encoding = "utf-8";
  let fs = await import_node("fs");
  return await fs.promises.readFile(file_name, encoding);
}
