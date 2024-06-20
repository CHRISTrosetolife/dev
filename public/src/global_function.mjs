import { global_function_initialize } from "./global_function_initialize.mjs";
export function global_function(fn) {
  return global_function_initialize(fn, () => ({}));
}
