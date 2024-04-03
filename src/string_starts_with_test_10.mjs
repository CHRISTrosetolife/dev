import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_10() {
    let result = string_starts_with('', '');
    assert(equal(result, true));
}
