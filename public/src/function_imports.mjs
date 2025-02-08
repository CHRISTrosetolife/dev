import { functions_names } from "./functions_names.mjs";
import { function_imports_multiple } from "./function_imports_multiple.mjs";
export async function function_imports(function_name) {
  let functions_names = [function_name];
  return await function_imports_multiple(functions_names);
}
