import { functions_list_generate } from "./functions_list_generate.mjs";
import { function_names } from "./function_names.mjs";
import { generate_list_fn_name } from "./generate_list_fn_name.mjs";
export async function apps_list_generate() {
  await generate_list_fn_name(function_names, functions_list_generate);
}
