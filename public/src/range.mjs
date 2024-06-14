import { add } from "./add.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_add } from "./list_add.mjs";
export function range(count) {
  assert_arguments_length(arguments, 1);
  let offset = 0;
  let result = [];
  for (let i = 0; i < count; i++) {
    list_add(result, add(i, offset));
  }
  return result;
}
