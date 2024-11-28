import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_name_src } from "./folder_name_src.mjs";
import { folder_name_public } from "./folder_name_public.mjs";
export function folder_path_src() {
  let a = string_combine_multiple([
    folder_name_public(),
    "/",
    folder_name_src(),
    "/",
  ]);
  return a;
}
