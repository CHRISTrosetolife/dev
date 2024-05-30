import { assert_boolean_message } from "./assert_boolean_message.mjs";
import { assert_message_error } from "./assert_message_error.mjs";
import { equal } from "./equal.mjs";
export async function returns_async(fn, expected, args) {
  let message = assert_message_error();
  let actual = await fn(...args);
  let e = equal(actual, expected);
  assert_boolean_message(e, message);
}
