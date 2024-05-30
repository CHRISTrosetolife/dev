import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
export function function_path_prefix() {
  return `${folder_current_prefix()}${folder_path_src()}`;
}
