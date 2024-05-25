import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export function assert_arguments_length(length) {
  assert(equal, [arguments.length, length]);
}
