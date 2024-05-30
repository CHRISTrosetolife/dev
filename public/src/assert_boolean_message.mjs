import { error } from "./error.mjs";
export function assert_boolean_message(condition, message) {
  if (condition === false) {
    error(message);
  }
}
