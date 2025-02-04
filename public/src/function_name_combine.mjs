import { function_name_separator } from "./function_name_separator.mjs";
import { list_between } from "./list_between.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_combine(left, right) {
  let b = list_between([left, right], function_name_separator());
  let joined = list_join_empty(b);
  return string_combine_multiple(joined);
}
