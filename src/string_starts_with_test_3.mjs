import {assert_boolean} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_3() {
    let result = string_starts_with('', 'aa');
    assert_boolean(equal(result, false));
}
