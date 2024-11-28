import { folder_name_public } from "./folder_name_public.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function folder_path_public() {
  return string_combine_multiple([folder_name_public(), "/"]);
}
