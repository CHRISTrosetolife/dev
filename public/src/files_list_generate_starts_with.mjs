import { generate_list_generic } from "./generate_list_generic.mjs";
import { function_names } from "./function_names.mjs";
export async function files_list_generate_starts_with() {
  let name = "functions_list";
  await generate_list_generic(function_names, name);
}
