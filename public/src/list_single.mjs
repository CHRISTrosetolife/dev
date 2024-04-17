import {list_length} from './list_length.mjs';
import {equal} from './equal.mjs';
import {assert} from './assert.mjs';
export function list_single(list) {
    let length = list_length(list);
    assert(equal, [length, 1])
}