import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
import { function_rename } from "./function_rename.mjs";
export async function functions_rename_if_starts_with(
  prefix_before,
  prefix_after,
) {
  let fns = await function_names();
  await each_async(fns, (fn) => {
    function_rename;
  });
}
