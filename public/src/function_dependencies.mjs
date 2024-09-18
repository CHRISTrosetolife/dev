import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(function_name) {
  return await function_imports(function_name);
}
