import { error } from "./error.mjs";
export function assert_boolean_message(condition, message_get) {
  if (condition === false) {
    error(message_get());
  }
}
