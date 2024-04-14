import { assert } from './assert.mjs';
import { bible_data_jas01 } from './bible_data_jas01.mjs';
import { equal_by } from './equal_by.mjs';
import { html_element } from './html_element.mjs';
import { list_length } from './list_length.mjs';
import { range } from './range.mjs';
import { html_inner_set } from './html_inner_set.mjs';
export function app_bible() {
    let root = document.body;
    let data = bible_data_jas01();
    let {eng} = data;
    let {ceb} = data;
    assert(equal_by, [eng, ceb, list_length])
    let length = list_length(eng);
    for (let i of range(length)) {
        let verse = html_element(root, 'div');
        let first = html_element(verse, 'div');
        html_inner_set(button_previous, 'previous');
        let second = html_element(verse, 'div');
    }
}