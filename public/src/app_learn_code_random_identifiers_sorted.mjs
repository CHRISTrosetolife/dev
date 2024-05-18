import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
export function app_learn_code_random_identifiers_sorted(count) {
  let identifiers = app_learn_code_random_identifiers(count);
  list_sort_string(identifiers, identity);
  return identifiers;
}
