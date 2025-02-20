import { file_overwrite } from "./file_overwrite.mjs";
import { file_open } from "./file_open.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { import_node } from "./import_node.mjs";
import { web_is } from "./web_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { assert_not_async } from "./assert_not_async.mjs";
import { file_read } from "./file_read.mjs";
export async function file_copy_generic(file_name_from, file_name_to, open) {
  await assert_not_async(file_exists, [file_name_to]);
  if (web_is()) {
    let existing = await file_read(file_name_from);
    await file_overwrite(file_name_to, existing);
  } else {
    let fs = await import_node("fs");
    await folder_parent_exists_ensure(file_name_to);
    await fs.promises.copyFile(file_name_from, file_name_to);
    if (open) {
      await file_open(file_name_to);
    }
  }
}
