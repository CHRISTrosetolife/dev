import {assert_boolean} from "./assert_boolean.mjs";
import {equal} from "./equal.mjs";
export function string_ends_with_test_3() {
    let result = string_ends_with('bb', 'bb');
    assert_boolean(equal(result, true));
}
