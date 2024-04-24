import {list_length} from './list_length.mjs';
import {equal} from './equal.mjs';
import {assert} from './assert.mjs';
import {list_first} from './list_first.mjs';
export function list_single(list) {
    let length = list_length(list);
    assert(equal, [length, 1]);
    return list_first(list);
}
