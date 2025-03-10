import { function_cache_refresh_args_generic } from "./function_cache_refresh_args_generic.mjs";
export async function function_cache_refresh_args(fn, args) {
  let v = await function_cache_refresh_args_generic(fn.name, args);
  return v;
}
