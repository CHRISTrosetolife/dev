import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function string_combine(a, b) {
  assert_arguments_length(arguments, 2);
  return a + b;
}
