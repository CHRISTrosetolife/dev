import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function string_split(input, delimeter) {
  assert_arguments_length(arguments, 2);
  return input.split(delimeter);
}
