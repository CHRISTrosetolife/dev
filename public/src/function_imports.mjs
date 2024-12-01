import { function_imports_multiple } from "./function_imports_multiple.mjs";
import { function_names } from "./function_names.mjs";
export async function function_imports(function_name) {
  let function_names = [function_name];
  return await function_imports_multiple(function_names);
}
