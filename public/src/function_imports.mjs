import { function_names } from "./function_names.mjs";
import { function_imports_recursive } from "./function_imports_recursive.mjs";
export async function function_imports(function_name) {
  let function_names = [function_name];
  let found = {};
  await function_imports_recursive(found, function_name);
  return found;
}
