import { generate_list_fn } from "./generate_list_fn.mjs";
import { function_names } from "./function_names.mjs";
export async function functions_list_generate() {
  await generate_list_fn(function_names, functions_list_generate);
}
