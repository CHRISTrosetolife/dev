import { folder_path_public } from "./folder_path_public.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function sermon_folder() {
  let a = string_combine_multiple([folder_path_public(), "sermons", "/"]);
  return a;
}
