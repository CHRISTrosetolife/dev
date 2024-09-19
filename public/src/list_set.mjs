import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_set(list, index, value) {
  assert_arguments_length(arguments, 3);
  list[index] = value;
}
