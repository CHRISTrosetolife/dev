import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let dependency_names = object_properties(map);
  return dependency_names;
}
