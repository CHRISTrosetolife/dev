import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_6() {
  let result = string_starts_with('b', 'b');
  assert(equal(result, true));
}
