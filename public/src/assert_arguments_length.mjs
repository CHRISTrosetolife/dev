import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export function assert_arguments_length(args, length) {
  assert(equal, [arguments.length, 2]);
  assert(equal, [args.length, length]);
}
