import { app_code_property_path } from "./app_code_property_path.mjs";
import { app_code_property_deleted } from "./app_code_property_deleted.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { list_add } from "./list_add.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
import { global_get } from "./global_get.mjs";
import { global_files } from "./global_files.mjs";
import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
export async function file_delete(file_path) {
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    object_property_delete(files, file_path);
    let fcs = global_file_changes();
    list_add(fcs, {
      [app_code_property_path()]: file_path,
      [app_code_property_contents()]: null,
      [app_code_property_deleted()]: true,
    });
    return;
  }
  let fs = await import_node("fs");
  let v = await fs.promises.rm(file_path);
  return v;
}
