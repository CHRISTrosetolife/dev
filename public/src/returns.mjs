import { assert_boolean_message } from "./assert_boolean_message.mjs";
import { equal } from "./equal.mjs";
import { json_to } from "./json_to.mjs";
export function returns(fn, expected, args) {
  let actual = fn(...args);
  let e = equal(actual, expected);
  assert_boolean_message(e, message_get);
  function message_get() {
    return json_to(args);
  }
}
