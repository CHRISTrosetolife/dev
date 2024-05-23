import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
export async function file_overwrite_generic(file_name, data, encoding) {
  if (web_is()) {
    let { files } = global_get();
    object_property_set(files, file_name, data);
  } else {
    let fs = await import("fs");
    await folder_parent_exists_ensure(file_name);
    return await fs.promises.writeFile(file_name, data, encoding);
  }
}
