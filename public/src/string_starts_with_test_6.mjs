import { string_starts_with } from "./string_starts_with.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_starts_with_test_6() {
  let result = string_starts_with("b", "b");
  assert_boolean(equal(result, true));
}
