import { function_names } from "./function_names.mjs";
export async function tests_generate() {
  let names = await function_names();
  return names;
}
