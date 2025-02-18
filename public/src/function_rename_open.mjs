import { watch_lock } from "./watch_lock.mjs";
import { function_open } from "./function_open.mjs";
import { function_rename } from "./function_rename.mjs";
export async function function_rename_open(fn_name_from, fn_name_to) {
  let v2 = await watch_lock(async function () {
    let r = await function_rename(fn_name_from, fn_name_to);
    await function_open(fn_name_to);
    let v = r;
    return v;
  });
  return v2;
}
