import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { add } from "./add.mjs";
export function set_add(set, item) {
  assert_arguments_length(arguments, 2);
  set.add(item);
}
