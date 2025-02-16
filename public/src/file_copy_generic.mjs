import { global_files } from "./global_files.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { file_open } from "./file_open.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { assert_not_async } from "./assert_not_async.mjs";
export async function file_copy_generic(file_name_from, file_name_to, open) {
  await assert_not_async(file_exists, [file_name_to]);
  if (web_is()) {
    let { [global_files()]: files } = global_get();
    let existing = object_property_get(files, file_name_from);
    object_property_set(
      files,
      file_name_to,
      object_properties_new(existing, ["contents"]),
    );
  } else {
    let fs = await import_node("fs");
    await folder_parent_exists_ensure(file_name_to);
    await fs.promises.copyFile(file_name_from, file_name_to);
    if (open) {
      await file_open(file_name_to);
    }
  }
}
