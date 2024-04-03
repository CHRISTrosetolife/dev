import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
export function string_starts_with_test_9() {
    let result = string_starts_with('aa', 'aa');
    assert(equal(result, true));
}
