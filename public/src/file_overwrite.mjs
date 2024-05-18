import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function file_overwrite(file_name, data) {
  if (web_is()) {
    let { files } = global_get();
    object_property_set(files, file_name, data);
  } else {
    let fs = await import("fs");
    await folder_parent_exists_ensure(file_name);
    return await fs.promises.writeFile(file_name, data, "utf-8");
  }
}
