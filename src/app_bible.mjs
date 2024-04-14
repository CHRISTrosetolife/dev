import { assert } from './assert.mjs';
import { bible_data_jas01 } from './bible_data_jas01.mjs';
import { equal_by } from './equal_by.mjs';
import { html_element } from './html_element.mjs';
import { list_length } from './list_length.mjs';
import { range } from './range.mjs';
import { html_inner_set } from './html_inner_set.mjs';
import { list_get } from './list_get.mjs';
import { object_property_get } from './object_property_get.mjs';
import { list_join } from './list_join.mjs';
import { html_style } from './html_style.mjs';
export function app_bible() {
    let root = document.body;
    html_style({element:root}, { 
        'font-family': 'Sans-Serif',
        'font-size': '5vh',
    });
    let data = bible_data_jas01();
    let {eng} = data;
    let {ceb} = data;
    assert(equal_by, [eng, ceb, list_length])
    let length = list_length(eng);
    for (let i of range(length)) {
        let verse = html_element(root, 'div');
        let first = html_element(verse.element, 'div');
        let eng_i = list_get(eng, i);
        let eng_tokens = object_property_get(eng_i, 'tokens');
        let first_text = list_join(eng_tokens, ' ')
        html_inner_set(first, first_text);
        let second = html_element(verse.element, 'div');
    }
}