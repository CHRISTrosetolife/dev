import { assert_boolean } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_starts_with_test_9() {
  let result = string_starts_with("aa", "aa");
  assert_boolean(equal(result, true));
}
