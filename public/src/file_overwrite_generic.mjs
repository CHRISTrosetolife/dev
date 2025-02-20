import { global_file_changes_add } from "./global_file_changes_add.mjs";
import { global_files } from "./global_files.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { todo } from "./todo.mjs";
import { global_function } from "./global_function.mjs";
export async function file_overwrite_generic(file_path, contents, encoding) {
  if (web_is()) {
    todo(
      "maybe this should use ",
      global_function,
      "instead of a specific property name",
    );
    let { [global_files()]: files } = global_get();
    object_property_set(files, file_path, contents);
    let deleted = false;
    global_file_changes_add(file_path, contents, deleted);
  } else {
    let fs = await import("fs");
    await folder_parent_exists_ensure(file_path);
    let v = await fs.promises.writeFile(file_path, contents, encoding);
    return v;
  }
}
