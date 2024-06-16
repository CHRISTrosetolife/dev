import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { assert_message } from "./assert_message.mjs";
export function assert_arguments_length(args, length) {
  assert(equal, [arguments.length, 2]);
  assert_message(equal, [args.length, length], () => ({
    message: "expecting different argument count",
  }));
}
