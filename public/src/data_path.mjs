import { folder_name_public } from "./folder_name_public.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { path_join } from "./path_join.mjs";
export function data_path() {
  return folder_current_prefix_combine(
    path_join([folder_name_public(), data_file_name()]),
  );
}
function data_file_name() {
    return "data.json";
}

