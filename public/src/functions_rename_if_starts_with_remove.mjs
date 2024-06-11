import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function functions_rename_if_starts_with_remove(
  prefix_before,
  prefix_after,
) {
  let fns = await function_names();
  await each_async(fns, async (fn) => {
    if (string_starts_with(fn, prefix_before)) {
      let without = string_prefix_without(fn, prefix_before);
      let fn_new = string_combine(prefix_after, without);
      await function_rename(fn, fn_new);
    }
  });
}
