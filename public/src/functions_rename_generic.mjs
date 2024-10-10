import { function_names_each } from "./function_names_each.mjs";
import { function_rename } from "./function_rename.mjs";
export async function functions_rename_generic(fn_new_get) {
  await function_names_each(lambda);
  async function lambda(fn) {
    let fn_new = await fn_new_get(fn);
    if (fn_new !== fn) {
      await function_rename(fn, fn_new);
    }
  }
}
