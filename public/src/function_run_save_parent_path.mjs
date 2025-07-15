import { folder_previous_join } from "./folder_previous_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function function_run_save_parent_path(parent_file_name) {
  let f = file_name_json(parent_file_name);
  let p = folder_previous_join(f);
  return p;
}
