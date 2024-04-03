import { assert } from "./assert_boolean.mjs";
import { equal } from "./equal.mjs";
export function string_starts_with_test_3() {
    let result = string_starts_with('', 'aa');
    assert(equal(result, false))
}