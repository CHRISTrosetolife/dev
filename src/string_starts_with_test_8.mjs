import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_8() {
    let result = string_starts_with('a', 'aa');
    assert(equal(result, false));
}
