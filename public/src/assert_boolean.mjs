import { error } from "./error.mjs";
export function assert_boolean(condition) {
  if (condition === false) {
    error("assert");
  }
}
