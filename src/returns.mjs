import {assert_boolean} from './assert_boolean.mjs';
import {equal} from './equal.mjs';
export async function returns(fn, expected, args) {
    let actual = await fn(...args);
    let e = equal(actual, expected);
    assert_boolean(e);
}
