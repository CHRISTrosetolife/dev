import {assert_boolean} from './assert_boolean.mjs';
import {equal} from './equal.mjs';
export function returns(fn, expected, args) {
    let actual = fn(...args);
    let e = equal(actual, expected);
    assert_boolean(e);
}
