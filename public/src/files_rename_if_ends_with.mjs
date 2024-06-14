import { files_rename_generic } from "./files_rename_generic.mjs";
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
  await files_rename_generic(input_path, file_extension, (b_old) => {});
  log({
    suffix_old,
  });
  assert_arguments_length(arguments, 4);
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b_old = string_suffix_without(file_name_old, file_extension);
    if (!string_ends_with(b_old, suffix_old)) {
      return;
    }
    let b_new = string_suffix_change(b_old, suffix_old, suffix_new);
    let file_name_new = string_combine(b_new, file_extension);
    log({
      file_name_new,
    });
    await file_rename(file_name_old, file_name_new);
  });
}
