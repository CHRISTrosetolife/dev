import { string_starts_with } from "./string_starts_with.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_starts_with_test_4() {
  let result = string_starts_with("aa", "b");
  assert_boolean(equal(result, false));
}
