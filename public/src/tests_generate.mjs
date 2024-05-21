import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_names } from "./function_names.mjs";
export async function tests_generate() {
  let names = await function_names();
  let filtered = list_filter(names, (n) => string_includes(n, "_test_"));
  return filtered;
}
