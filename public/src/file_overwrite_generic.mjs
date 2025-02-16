import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_function } from "./global_function.mjs";
export async function file_overwrite_generic(file_name, contents, encoding) {
  if (web_is()) {
    let g = global_function(file_overwrite_generic);
    let fcs = object_property_initialize(g, "files_changes", []);
    let { files } = global_get();
    let existing = object_property_initialize(files, file_name, {});
    object_property_set(existing, "contents", contents);
  } else {
    let fs = await import("fs");
    await folder_parent_exists_ensure(file_name);
    let v = await fs.promises.writeFile(file_name, contents, encoding);
    return v;
  }
}
