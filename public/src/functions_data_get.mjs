import { functions_data_get_list } from "./functions_data_get_list.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
export async function functions_data_get(data_get_fn, name) {
  let matches = await functions_data_get_list(data_get_fn, name);
  let result = function_names_to_lookup(matches);
  return result;
}
