import {string_combine_multiple} from './string_combine_multiple.mjs';
import {http_cache} from './http_cache.mjs';
export async function ceb_definition(word) {
    let url = string_combine_multiple([
        'https://www.binisaya.com/node/21?search=binisaya&word=',
        word,
        '&Search=Search'
    ]);
    await http_cache(url);
}