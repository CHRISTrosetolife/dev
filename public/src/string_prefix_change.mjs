import { string_combine } from "./string_combine.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function string_prefix_change(fn, prefix_before, prefix_after) {
  let without = string_prefix_without(fn, prefix_before);
  let fn_new = string_combine(prefix_after, without);
  return fn_new;
}
