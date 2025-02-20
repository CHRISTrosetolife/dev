import { app_code_property_deleted } from "./app_code_property_deleted.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { app_code_property_path } from "./app_code_property_path.mjs";
import { list_add } from "./list_add.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
export function global_file_changes_add(file_path, contents, deleted) {
  let fcs = global_file_changes();
  list_add(fcs, {
    [app_code_property_path()]: file_path,
    [app_code_property_contents()]: contents,
    [app_code_property_deleted()]: deleted,
  });
}
