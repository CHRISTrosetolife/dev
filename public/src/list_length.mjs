import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_length(list) {
  const length = 1;
  assert_arguments_length(length);
  return list.length;
}
