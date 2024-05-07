import {assert_boolean} from './assert_boolean.mjs';
import {equal} from './equal.mjs';
export async function returns_async(fn, expected, args) {
    let actual = await fn(...args);
    console.log({actual})
    let e = equal(actual, expected);
    assert_boolean(e);
}
