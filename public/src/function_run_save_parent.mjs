import { folder_previous_join } from "./folder_previous_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_save_parent(f_name, parent_file_name) {
  let result = await function_run(f_name, []);
  let f = file_name_json(parent_file_name);
  let p = folder_previous_join(f);
  await file_write_json(p, result);
}
