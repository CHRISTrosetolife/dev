import { files_rename_generic } from "./files_rename_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { string_replace } from "./string_replace.mjs";
export async function files_rename_replace(
  input_path,
  file_extension,
  replace_from,
  replace_to,
) {
  assert_arguments_length(arguments, 4);
  await files_rename_generic(input_path, file_extension, (b_old) => {
    let b_new = string_replace(b_old, replace_from, replace_to);
    return b_new;
  });
}
