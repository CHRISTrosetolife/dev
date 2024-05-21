import { function_delete } from "./function_delete.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_names } from "./function_names.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_exists } from "./file_exists.mjs";
export async function tests_generate() {
  let names = await function_names();
  let filtered = list_filter(names, (n) => string_includes(n, "_test_"));
  let function_name = "tests";
  let function_path = function_name_to_path(function_name);
  if (await file_exists(function_path)) {
    await function_delete(function_name);
  }
  await function_new_generic(function_name, "", "", false, [], false);
  return filtered;
}
