import { generate_list_generic } from "./generate_list_generic.mjs";
import { list_get } from "./list_get.mjs";
import { function_names } from "./function_names.mjs";
export async function functions_list_generate() {
  let name = "functions_list";
  let list_get = function_names;
  await generate_list_generic(list_get, name);
}
