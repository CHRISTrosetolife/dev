import { function_cache } from "./function_cache.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
export async function function_cache_force(fn, args) {
  await function_cache_delete_generic(fn.name, args, file_delete_if_exists);
  let v = await function_cache(fn, args);
  return v;
}
