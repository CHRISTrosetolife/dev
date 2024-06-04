import { assert_boolean_message } from "./assert_boolean_message.mjs";
import { equal } from "./equal.mjs";
export function returns_message(fn, expected, args, message_get) {
  let actual = fn(...args);
  let e = equal(actual, expected);
  assert_boolean_message(e, message_get);
}
