import {string_combine_multiple} from './string_combine_multiple.mjs';
import {http_cache} from './http_cache.mjs';
import {html_parse} from './html_parse.mjs';
import { list_map } from './list_map.mjs';
import { object_property_get } from './object_property_get.mjs';
import { string_ends_with } from './string_ends_with.mjs';
import { string_suffix_without } from './string_suffix_without.mjs';
import { string_trim } from './string_trim.mjs';
import { list_unique } from './list_unique.mjs';
export async function ceb_definition(word) {
    let url = string_combine_multiple([
        'https://www.binisaya.com/node/21?search=binisaya&word=',
        word,
        '&Search=Search'
    ]);
    let html = await http_cache(url);
    let parsed = html_parse(html)
    let q = parsed.querySelectorAll('a[href^="https:\/\/www.binisaya.com\/english\/"]');
    let mapped = list_map(q, i => object_property_get(i, 'text'));
    let mapped3 = list_map(mapped, i => string_trim(i));
    let u = list_unique(mapped3);
    return u
}


