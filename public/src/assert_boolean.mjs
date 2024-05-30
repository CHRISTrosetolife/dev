import { error } from "./error.mjs";
export function assert_boolean(condition) {
  let message = "assert";
  if (condition === false) {
    error(message);
  }
}
