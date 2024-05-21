import { string_ends_with } from "./string_ends_with.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_ends_with_test_9() {
  let result = string_ends_with("", "a");
  assert_boolean(equal(result, false));
}
