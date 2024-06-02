import { function_cache_path } from "./function_cache_path.mjs";
import { file_delete } from "./file_delete.mjs";
export async function function_cache_delete(fn, args) {
  let file_path = function_cache_path(fn, args);
  await file_delete(file_path);
}
