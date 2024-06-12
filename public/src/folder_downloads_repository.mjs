import { folder_user_downloads } from "./folder_user_downloads.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
export function folder_downloads_repository(repository_name) {
  let m = string_combine(repository_name, "-master\\");
  return string_combine_multiple([folder_user_downloads(), m, m]);
}
