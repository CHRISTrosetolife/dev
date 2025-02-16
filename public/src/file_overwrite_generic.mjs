import { global_files } from "./global_files.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { list_add } from "./list_add.mjs";
import { todo } from "./todo.mjs";
import { global_function } from "./global_function.mjs";
export async function file_overwrite_generic(path, contents, encoding) {
  if (web_is()) {
    todo(
      "maybe this should use ",
      global_function,
      "instead of a specific property name",
    );
    let { [global_files()]: files } = global_get();
    object_property_set(files, path, contents);
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
