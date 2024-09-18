import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
}
