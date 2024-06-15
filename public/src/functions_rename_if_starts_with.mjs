import { string_prefix_change } from "./string_prefix_change.mjs";
import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function functions_rename_if_starts_with(
  prefix_before,
  prefix_after,
) {
  let fns = await function_names();
  await each_async(fns, async (fn) => {
    let fn_new = fn;
    if (string_starts_with(fn, prefix_before)) {
      fn_new = string_prefix_change(fn, prefix_before, prefix_after);
    }
    if (fn_new !== fn) {
      await function_rename(fn, fn_new);
    }
  });
}
