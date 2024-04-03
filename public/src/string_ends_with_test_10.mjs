import { assert } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_ends_with_test_10() {
    let result = string_ends_with('bb', 'aa');
    assert(equal(result, false))
}