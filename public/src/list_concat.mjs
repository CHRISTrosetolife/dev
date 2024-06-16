import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_concat(a, b) {
  assert_arguments_length(arguments, 2);
  return a.concat(b);
}
