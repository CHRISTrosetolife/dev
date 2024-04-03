import { assert } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_ends_with_test_7() {
    let result = string_ends_with('ba', 'ab');
    assert(equal(result, false))
}