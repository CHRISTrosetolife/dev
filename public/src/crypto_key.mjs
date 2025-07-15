import { function_run_save_parent_path } from "./function_run_save_parent_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function crypto_key() {
  let p = function_run_save_parent_path("key");
  let v = await file_read_json(p);
  return v;
}
