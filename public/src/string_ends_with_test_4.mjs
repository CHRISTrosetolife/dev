import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function string_ends_with_test_4() {
    let result = string_ends_with('abc', '');
    assert(equal(result, true))
}