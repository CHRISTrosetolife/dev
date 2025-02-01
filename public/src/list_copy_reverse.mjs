import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_copy } from "./list_copy.mjs";
export function list_copy_reverse(list) {
  assert_arguments_length(arguments, 1);
  let result = list_copy(list);
  list_reverse(result);
  return result;
}
