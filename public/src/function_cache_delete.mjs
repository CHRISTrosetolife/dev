import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
export async function function_cache_delete(function_name) {
  await function_cache_delete_generic(function_name, []);
}
