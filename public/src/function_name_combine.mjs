import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
export function function_name_combine(left, right) {
  assert_arguments_length(arguments, 2);
  let terms = [left, right];
  return function_name_combine_multiple(terms);
}
