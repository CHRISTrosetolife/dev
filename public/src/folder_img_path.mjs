import { folder_img_name } from "./folder_img_name.mjs";
import { folder_name_public } from "./folder_name_public.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function folder_img_path() {
  return string_combine_multiple([
    folder_name_public(),
    "\\",
    folder_img_name(),
    "\\",
  ]);
}
