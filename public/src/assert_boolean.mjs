import { assert_message_error } from "./assert_message_error.mjs";
import { assert_boolean_message } from "./assert_boolean_message.mjs";
export function assert_boolean(condition) {
  assert_boolean_message(condition, assert_message_error);
}
