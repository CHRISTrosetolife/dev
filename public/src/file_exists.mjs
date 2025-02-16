import { global_files } from "./global_files.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_includes } from "./list_includes.mjs";
export async function file_exists(file_name) {
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    let keys = object_properties(files);
    let v = list_includes(keys, file_name);
    return v;
  }
  let fs = await import_node("fs");
  let v2 = await new Promise(function (resolve, reject) {
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
  return v2;
}
