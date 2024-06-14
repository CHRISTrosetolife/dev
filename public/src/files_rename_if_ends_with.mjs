import { files_rename_generic } from "./files_rename_generic.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export async function files_rename_if_ends_with(
  input_path,
  file_extension,
  suffix_old,
  suffix_new,
) {
  await files_rename_generic(input_path, file_extension, (b_old) => {
    if (!string_ends_with(b_old, suffix_old)) {
      return b_old;
    }
    let b_new = string_suffix_change(b_old, suffix_old, suffix_new);
    return b_new;
  });
}
