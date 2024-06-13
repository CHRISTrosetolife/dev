import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { string_get_reverse } from "./string_get_reverse.mjs";
import { string_starts_with_generic } from "./string_starts_with_generic.mjs";
export function string_ends_with(input, prefix) {
  assert_arguments_length(arguments, 2);
  let string_get_lambda = string_get_reverse;
  return string_starts_with_generic(string_get_lambda, input, prefix);
}
