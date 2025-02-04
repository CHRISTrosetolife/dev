import { list_join_empty } from "./list_join_empty.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { list_between } from "./list_between.mjs";
export function function_name_combine_multiple(terms) {
  let b = list_between(terms, function_name_separator());
  let joined = list_join_empty(b);
  return joined;
}
