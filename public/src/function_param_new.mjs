import { function_rename } from "./function_rename.mjs";
import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
export async function function_param_new() {
  let fns = await function_names();
  await each_async(fns, async (fn) => {
    let fn_new = await fn_new_get(fn);
    if (fn_new !== fn) {
      await function_rename(fn, fn_new);
    }
  });
}
