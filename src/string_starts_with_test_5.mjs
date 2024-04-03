import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_5() {
    let result = string_starts_with('ab', 'a');
    assert(equal(result, true));
}
