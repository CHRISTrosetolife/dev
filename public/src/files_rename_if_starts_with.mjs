import { files_rename_generic } from "./files_rename_generic.mjs";
import { string_prefix_change } from "./string_prefix_change.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
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
}
