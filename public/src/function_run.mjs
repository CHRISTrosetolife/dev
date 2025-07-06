import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_import } from "./function_import.mjs";
export async function function_run(function_name, args) {
  assert_arguments_length(arguments, 2);
  let imported_function = await function_import(function_name);
  let result = await imported_function(...args);
  return result;
}
