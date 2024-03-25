import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function string_starts_with_test_2() {
    let result = string_starts_with('', 'b');
    assert(equal(result, false))
}