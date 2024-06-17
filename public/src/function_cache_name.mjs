import { string_combine } from "./string_combine.mjs";
export function function_cache_name(function_name) {
  return string_combine(function_name, "_cache");
}
