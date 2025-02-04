import { function_name_separator } from "./function_name_separator.mjs";
import { list_join } from "./list_join.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_combine(left, right) {
  let joined = list_join([left, right], function_name_separator());
  return string_combine_multiple(joined);
}
