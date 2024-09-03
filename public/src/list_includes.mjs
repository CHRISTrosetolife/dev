import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_includes(list, item) {
  assert_arguments_length(arguments, 2);
  return list.includes(item);
}
