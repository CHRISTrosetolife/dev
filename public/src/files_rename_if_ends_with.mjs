import { string_suffix_without } from "./string_suffix_without.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { string_combine } from "./string_combine.mjs";
export async function files_rename_if_ends_with(
  input_path,
  suffix_old,
  suffix_new,
) {
  assert_arguments_length(arguments, 3);
  let files = await folder_read(input_path);
  await each_async(files, async (file_name_old) => {
    if (!string_ends_with(suffix)) {
      return;
    }
    let without = string_suffix_without(file_name_old, suffix);
    let file_name_new = string_combine(without, suffix_new);
    await file_rename(file_name_old, file_name_new);
  });
}
