import { assert_boolean_message } from "./assert_boolean_message.mjs";
import { equal } from "./equal.mjs";
export async function returns_message_async(fn, expected, args, message) {
  let actual = await fn(...args);
  let e = equal(actual, expected);
  assert_boolean_message(e, message);
}
