import { function_cache_name } from "./function_cache_name.mjs";
import { function_cache_delete } from "./function_cache_delete.mjs";
export async function function_cache_refresh(function_name) {
  let cache_name = function_cache_name(function_name);
  await function_cache_delete(cache_name);
  await cache_name();
}
