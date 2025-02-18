import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function functions_rename_if_starts_with_remove(prefix, removal) {
  return await watch_lock(async function () {
    await functions_rename_generic(fn_new_get);
    function fn_new_get(fn) {
      let fn_new = fn;
      if (string_starts_with(fn, prefix)) {
        if (string_includes(fn, removal)) {
          fn_new = string_replace(fn, removal, "");
        }
        return fn_new;
      }
    }
  });
}
