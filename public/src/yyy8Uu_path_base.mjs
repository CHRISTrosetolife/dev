import { folder_user_downloads } from "./folder_user_downloads.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function yyy8Uu_path_base() {
  let repository_name = "yyy8Uu";
  let m = string_combine(repository_name, "-master\\");
  return string_combine_multiple([folder_user_downloads(), m, m]);
}
