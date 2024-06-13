import { string_length } from "./string_length.mjs";
import { string_take } from "./string_take.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export function string_suffix_without(input, suffix) {
  assert_boolean(string_ends_with(input, suffix));
  let prefix_length = string_length(suffix);
  let input_length = string_length(input);
  let difference = input_length - prefix_length;
  return string_take(input, difference);
}
