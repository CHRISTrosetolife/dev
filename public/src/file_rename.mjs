import { each_async } from "./each_async.mjs";
import { function_rename_on_renames } from "./function_rename_on_renames.mjs";
import { import_node } from "./import_node.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
export async function file_rename(file_name_from, file_name_to) {
  let fs = await import_node("fs");
  await folder_parent_exists_ensure(file_name_to);
  await fs.promises.rename(file_name_from, file_name_to);
  let on_renames = function_rename_on_renames();
  await each_async(on_renames, () => {
    on_renames();
  });
}
