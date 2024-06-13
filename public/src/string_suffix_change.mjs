import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export function string_suffix_change(input, suffix_old, suffix_new) {
  assert_arguments_length(arguments, 3);
  let without = string_suffix_without(input, suffix_old);
  let output = string_combine(without, suffix_new);
  return output;
}
