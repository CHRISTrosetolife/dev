import { function_delete } from "./function_delete.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_delete_if_exists(function_name) {
  let function_path = function_name_to_path(function_name);
  let e = await file_exists(function_path);
  if (e) {
    await function_delete(function_name);
  }
}
