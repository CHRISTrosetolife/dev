import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function each(list, lambda) {
  assert_arguments_length(arguments, 2);
  for (let item of list) {
    if (lambda(item) === true) {
      return;
    }
  }
}
