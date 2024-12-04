import { sermon_folder_name } from "./sermon_folder_name.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function sermon_folder() {
  let a = string_combine_multiple([
    folder_path_public(),
    sermon_folder_name(),
    "/",
  ]);
  return a;
}
