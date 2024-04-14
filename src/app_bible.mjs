import { assert } from './assert.mjs';
import { bible_data_jas01 } from './bible_data_jas01.mjs';
import { equal_by } from './equal_by.mjs';
import { list_length } from './list_length.mjs';
import { range } from './range.mjs';
export function app_bible() {
    let data = bible_data_jas01();
    let {eng} = data;
    let {ceb} = data;
    assert(equal_by, [eng, ceb, list_length])
    let length = list_length(eng);
    for (let i of range(length)) {
        
    }
}