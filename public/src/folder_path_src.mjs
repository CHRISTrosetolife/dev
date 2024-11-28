import { folder_path_public } from "./folder_path_public.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_name_src } from "./folder_name_src.mjs";
export function folder_path_src() {
  let a = string_combine_multiple([
    folder_path_public(),
    folder_name_src(),
    "/",
  ]);
  return a;
}
