import { function_auto_after } from "./function_auto_after.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export async function function_auto_after_path(path) {
  let function_name = function_path_to_name(path);
  let after = await function_auto_after(function_name);
  return after;
}
