import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_includes } from "./list_includes.mjs";
export async function file_exists(file_name) {
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    let keys = object_properties(files);
    return list_includes(keys, file_name);
  }
  let fs = await import_node("fs");
  return await new Promise((resolve, reject) => {
    fs.stat(file_name, function (err, stat) {
      if (err == null) {
        resolve(true);
      } else {
        if (err.code === "ENOENT") {
          resolve(false);
        } else {
          reject(err);
        }
      }
    });
  });
}
