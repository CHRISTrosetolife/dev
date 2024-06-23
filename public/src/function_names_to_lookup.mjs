import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
export function function_names_to_lookup(matches) {
  return list_to_lookup_value(matches, (m) => function_name_to_path(m));
}
