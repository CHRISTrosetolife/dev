import {assert_boolean} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_ends_with_test_2() {
    let result = string_ends_with('abc', 'ba');
    assert_boolean(equal(result, false));
}
