import { string_starts_with } from "./string_starts_with.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
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
  let files = await folder_read(input_path, file_extension);
  await each_async(files, async (file_name_old) => {
    let b = path_parse_base(file_name_old);
    if (!string_starts_with(b, prefix_old)) {
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
