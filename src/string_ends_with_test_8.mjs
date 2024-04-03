import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_ends_with_test_8() {
    let result = string_ends_with('b', 'b');
    assert(equal(result, true));
}
