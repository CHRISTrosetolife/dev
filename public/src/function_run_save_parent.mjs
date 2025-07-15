import { file_write_json } from "./file_write_json.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_save_parent(f_name, parent_file_name) {
  let result = await function_run(f_name);
  await file_write_json(parent_file_name, result);
}
