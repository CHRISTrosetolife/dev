import { global_function_initialize } from "./global_function_initialize.mjs";
export function global_function(fn) {
  let value = {};
  return global_function_initialize(fn, () => value);
}
