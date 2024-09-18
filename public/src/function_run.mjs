import { function_import } from "./function_import.mjs";
export async function function_run(function_name, args) {
  let imported_function = await function_import(function_name);
  let result = await imported_function(...args);
  return result;
}
