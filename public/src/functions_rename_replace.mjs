import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_replace } from "./string_replace.mjs";
export async function functions_rename_replace(
  replacement_before,
  replacement_after,
) {
  await functions_rename_generic(fn_new_get);
  function fn_new_get(fn) {
    let fn_new = fn;
    if (string_includes(fn, replacement_before)) {
      fn_new = string_replace(fn, replacement_before, replacement_after);
    }
    return fn_new;
  }
}
