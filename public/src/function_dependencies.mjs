import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  each_object(object, (key, value) => {});
}
