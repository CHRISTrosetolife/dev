import { log } from "./log.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_combine } from "./string_combine.mjs";
export async function files_rename_if_ends_with(
  input_path,
  file_extension,
  suffix_old,
  suffix_new,
) {
  assert_arguments_length(arguments, 4);
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b_old = string_suffix_without(file_name_old, file_extension);
    if (!string_ends_with(file_name_old, suffix_old)) {
      return;
    }
    let file_name_new_less_extension = string_suffix_change(
      b_old,
      suffix_old,
      suffix_new,
    );
    let file_name_new = string_combine(
      file_name_new_less_extension,
      file_extension,
    );
    log({
      file_name_new,
    });
    return;
    await file_rename(file_name_old, file_name_new);
  });
}
