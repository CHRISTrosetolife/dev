import { folder_path_src } from "./folder_path_src.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function folder_path_src_prefixed() {
  return string_combine_multiple([folder_current_prefix(), folder_path_src()]);
}
