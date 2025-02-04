import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { identity } from "./identity.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
export function app_learn_code_random_identifiers_sorted(count) {
  let identifiers = app_learn_code_random_identifiers(count);
  list_sort_string_map(identifiers, identity);
  return identifiers;
}
