import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_add(list, item) {
  assert_arguments_length(arguments, 2);
  list.push(item);
}
