import { function_params } from "./function_params.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function function_params_names(function_name) {
  let params = await function_params(function_name);
  let param_names = list_map_property(params, "name");
  return param_names;
}
