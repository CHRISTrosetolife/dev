import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { assert_message } from "./assert_message.mjs";
export function assert_arguments_length(args, expected) {
  assert(equal, [arguments.length, 2]);
  let actual = args.length;
  assert_message(equal, [actual, expected], () => ({
    message: "expecting different argument count",
  }));
}
