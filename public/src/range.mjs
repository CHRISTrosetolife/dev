import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_add } from "./list_add.mjs";
export function range(count) {
    assert_arguments_length(arguments,1)
  let result = [];
  for (let i = 0; i < count; i++) {
    list_add(result, i);
  }
  return result;
}
