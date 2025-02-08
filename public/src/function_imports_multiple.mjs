import { functions_names } from "./functions_names.mjs";
import { function_imports_recursive } from "./function_imports_recursive.mjs";
import { each_async } from "./each_async.mjs";
export async function function_imports_multiple(functions_names) {
  let found = {};
  await each_async(functions_names, async (function_name) => {
    await function_imports_recursive(found, function_name);
  });
  return found;
}
