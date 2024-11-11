import { functions_identifier_list } from "./functions_identifier_list.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
export async function functions_identifier(name) {
  let matches = await functions_identifier_list(name);
  return function_names_to_lookup(matches);
}
