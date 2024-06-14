import { string_suffix_change } from "./string_suffix_change.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { files_rename_generic } from "./files_rename_generic.mjs";
import { path_base_change } from "./path_base_change.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
import { string_replace } from "./string_replace.mjs";
export async function files_rename_replace(
  input_path,
  file_extension,
  replace_from,
  replace_to,
) {
  assert_arguments_length(arguments, 4);
  await files_rename_generic(input_path, file_extension, (b_old) => {
    if (!string_ends_with(b_old, suffix_old)) {
      return b_old;
    }
    let b_new = string_suffix_change(b_old, suffix_old, suffix_new);
    return b_new;
  });
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b = path_parse_base(file_name_old);
    let b_new = string_replace(b, replace_from, replace_to);
    if (b === b_new) {
      return;
    }
    let file_name_new = path_base_change(file_name_old, b_new);
    await file_rename(file_name_old, file_name_new);
  });
}
