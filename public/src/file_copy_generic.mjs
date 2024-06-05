import { assert_not_message_async } from "./assert_not_message_async.mjs";
import { file_open } from "./file_open.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { import_node } from "./import_node.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { global_get } from "./global_get.mjs";
import { web_is } from "./web_is.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_copy_generic(file_name_to, file_name_from, open) {
  await assert_not_message_async(file_exists, [file_name_to]);
  if (web_is()) {
    let { files } = global_get();
    let existing = object_property_get(files, file_name_from);
    object_property_set(files, file_name_to, existing);
  } else {
    let fs = await import_node("fs");
    await folder_parent_exists_ensure(file_name_to);
    await fs.promises.copyFile(file_name_from, file_name_to);
    if (open) {
      await file_open(file_name_to);
    }
  }
}
