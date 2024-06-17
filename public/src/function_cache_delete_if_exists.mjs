import { file_delete } from "./file_delete.mjs";
import { function_cache_path } from "./function_cache_path.mjs";
export async function function_cache_delete_if_exists(function_name) {
  let file_path = function_cache_path(function_name, args);
  await file_delete(file_path);
}
