import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { string_prefix_change } from "./string_prefix_change.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function functions_rename_replace(prefix_before, prefix_after) {
  await functions_rename_generic(fn_new_get);
  function fn_new_get(fn) {
    let fn_new = fn;
    if (string_starts_with(fn, prefix_before)) {
      fn_new = string_prefix_change(fn, prefix_before, prefix_after);
    }
    return fn_new;
  }
}
