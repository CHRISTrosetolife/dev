import { list_index } from "./list_index.mjs";
import { function_params_names } from "./function_params_names.mjs";
export async function function_param_index(function_name, param_name) {
  let params_names = await function_params_names(function_name);
  let index = list_index(params_names, param_name);
  return index;
}
