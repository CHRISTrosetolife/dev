import {assert_boolean} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_ends_with_test_4() {
    let result = string_ends_with('abc', '');
    assert_boolean(equal(result, true));
}
