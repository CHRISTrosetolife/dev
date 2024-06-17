import { function_cache_delete } from "./function_cache_delete.mjs";
export async function function_cache_refresh(function_name) {
  await function_cache_delete(function_name);
  await function_name();
}
