import {assert_boolean} from './assert_boolean.mjs';
import {equal} from './equal.mjs';
import function_run from './function_run.mjs';
export async function returns(function_name, expected, args) {
    let actual = await function_run(function_name, args);
    let e = equal(actual, expected);
    assert_boolean(e);
}
