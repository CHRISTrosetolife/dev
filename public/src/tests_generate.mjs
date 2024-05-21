import { function_names } from "./function_names.mjs";
export async function tests_generate() {
  let names = await function_names();
  let filtered=list_filter(names,n=>string_contains(n,'_test_'))
  return filtered;
}
