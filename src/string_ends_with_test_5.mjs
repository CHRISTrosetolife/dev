import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_ends_with_test_5() {
    let result = string_ends_with('b', 'ba');
    assert(equal(result, false));
}
