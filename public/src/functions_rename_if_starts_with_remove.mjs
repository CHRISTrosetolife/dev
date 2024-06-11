import { string_includes } from "./string_includes.mjs";
import { string_replace } from "./string_replace.mjs";
import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function functions_rename_if_starts_with_remove(prefix, removal) {
  let fns = await function_names();
  await each_async(fns, async (fn) => {
    if (string_starts_with(fn, prefix)) {
      if (string_includes(fn, removal)) {
        let fn_new = string_replace(fn, removal, "");
        await function_rename(fn, fn_new);
      }
    }
  });
}
