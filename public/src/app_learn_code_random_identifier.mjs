import { list_single } from "./list_single.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
export function app_learn_code_random_identifier() {
  let list = app_learn_code_random_identifiers(1);
  return list_single(list);
}
