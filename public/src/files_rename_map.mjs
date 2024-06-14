import { string_prefix_change } from "./string_prefix_change.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
import { path_join } from "./path_join.mjs";
import { function_import } from "./function_import.mjs";
export async function files_rename_map(
  input_path,
  file_extension,
  mapper_function_name,
) {
  assert_arguments_length(arguments, 4);
  let mapper = await function_import(mapper_function_name);
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b = path_parse_base(file_name_old);
    if (!string_starts_with(b, prefix_old)) {
      return;
    }
    let d = path_dirname(file_name_old);
    let b_new = string_prefix_change(b, prefix_old, prefix_new);
    let file_name_new = path_join([d, b_new]);
    await file_rename(file_name_old, file_name_new);
  });
}
