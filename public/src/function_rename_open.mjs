import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_rename } from "./function_rename.mjs";
export async function function_rename_open(fn_name_from, fn_name_to) {
  let r = await function_rename(fn_name_from, fn_name_to);
  let fn_path_to = function_name_to_path(fn_name_to);
  return r;
}
