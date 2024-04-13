import {string_combine_multiple} from './string_combine_multiple.mjs';
import {http_cache} from './http_cache.mjs';
import {html_parse} from './html_parse.mjs';
import { list_map } from './list_map.mjs';
import { object_property_get } from './object_property_get.mjs';
export async function ceb_definition(word) {
    let url = string_combine_multiple([
        'https://www.binisaya.com/node/21?search=binisaya&word=',
        word,
        '&Search=Search'
    ]);
    let html = await http_cache(url);
    let parsed = html_parse(html)
    let q = parsed.querySelectorAll('td[halign="left"]');
    let mapped = list_map(q, i => object_property_get(i, 'text'));
    return mapped
}