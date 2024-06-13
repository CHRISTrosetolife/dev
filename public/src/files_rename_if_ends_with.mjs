import { string_suffix_change } from "./string_suffix_change.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export async function files_rename_if_ends_with(
  input_path,
  file_extension,
  suffix_old,
  suffix_new,
) {
  assert_arguments_length(arguments, 3);
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    if (!string_ends_with(file_name_old, suffix_old)) {
      return;
    }
    let file_name_new = string_suffix_change(
      file_name_old,
      suffix_old,
      suffix_new,
    );
    await file_rename(file_name_old, file_name_new);
  });
}
