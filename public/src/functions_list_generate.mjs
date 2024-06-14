import { generate_list_generic } from "./generate_list_generic.mjs";
import { function_names } from "./function_names.mjs";
export async function functions_list_generate() {
  let name = "functions_list";
  await generate_list_generic(function_names, name);
}
