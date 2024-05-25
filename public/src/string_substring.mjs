import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function string_substring(input, start, end) {
  assert_arguments_length(arguments, 3);
  return input.substring(start, end);
}
