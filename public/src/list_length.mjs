import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_length(list) {
  assert_arguments_length(arguments, 1);
  return list.length;
}
