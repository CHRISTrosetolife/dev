import { functions_names } from "./functions_names.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function functions_list_generate() {
  await generate_list_fn(functions_names, functions_list_generate);
}
