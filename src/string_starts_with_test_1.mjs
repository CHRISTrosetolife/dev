import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_1() {
  let result = string_starts_with('bb', 'aa');
  assert(equal(result, false));
}
