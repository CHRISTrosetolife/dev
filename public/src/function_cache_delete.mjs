import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_delete(function_name) {
  await function_cache_delete_generic(function_name, []);
}
