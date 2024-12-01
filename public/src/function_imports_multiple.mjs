import { function_imports_recursive } from "./function_imports_recursive.mjs";
import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
export async function function_imports_multiple(function_names) {
  let found = {};
  await each_async(function_names, async (function_name) => {
    await function_imports_recursive(found, function_name);
  });
  return found;
}
