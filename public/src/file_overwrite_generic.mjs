import { global_file_changes } from "./global_file_changes.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
export async function file_overwrite_generic(path, contents, encoding) {
  if (web_is()) {
    let { files } = global_get();
    let existing = object_property_initialize(files, path, {});
    object_property_set(existing, "contents", contents);
    let fcs = global_file_changes();
    list_add(fcs, {
      path,
      contents,
    });
  } else {
    let fs = await import("fs");
    await folder_parent_exists_ensure(path);
    let v = await fs.promises.writeFile(path, contents, encoding);
    return v;
  }
}
