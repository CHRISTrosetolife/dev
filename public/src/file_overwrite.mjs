import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { folder_new } from "./folder_new.mjs";
export async function file_overwrite(file_name, data) {
  if (web_is()) {
    let { files } = global_get();
    object_property_set(files, file_name, data);
  } else {
    let fs = await import("fs");
    let path = await import("path");
    let parent = path.dirname(file_name);
    if (!await file_exists(parent)) {
        await folder_new(parent);
    }
    return await fs.promises.writeFile(file_name, data, "utf-8");
  }
}
