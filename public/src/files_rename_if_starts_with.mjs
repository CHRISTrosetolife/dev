import { files_rename_generic } from "./files_rename_generic.mjs";
import { path_base_change } from "./path_base_change.mjs";
import { string_prefix_change } from "./string_prefix_change.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
export async function files_rename_if_starts_with(
  input_path,
  file_extension,
  prefix_old,
  prefix_new,
) {
  assert_arguments_length(arguments, 4);
  await files_rename_generic(input_path, file_extension, (b_old) => {
    if (!string_starts_with(b_old, prefix_old)) {
      return b_old;
    }
    let b_new = string_prefix_change(b_old, prefix_old, prefix_new);
    return b_new;
  });
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b_old = path_parse_base(file_name_old);
    if (!string_starts_with(b_old, prefix_old)) {
      return;
    }
    let b_new = string_prefix_change(b_old, prefix_old, prefix_new);
    let file_name_new = path_base_change(file_name_old, b_new);
    await file_rename(file_name_old, file_name_new);
  });
}
