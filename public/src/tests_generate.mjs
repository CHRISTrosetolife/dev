import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_names } from "./function_names.mjs";
export async function tests_generate() {
  let names = await function_names();
  let filtered = list_filter(names, (n) => string_includes(n, "_test_"));
  let function_name = "tests";
  await function_delete_if_exists(function_name);
  await function_new_generic(function_name, "", "", false, [], false);
  return filtered;
}
