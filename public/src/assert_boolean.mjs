import { assert_boolean_message } from "./assert_boolean_message.mjs";
export function assert_boolean(condition) {
  let message = "assert";
  assert_boolean_message(condition, message);
}
