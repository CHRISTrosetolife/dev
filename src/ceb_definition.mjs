import {string_combine_multiple} from './string_combine_multiple.mjs';
import {http_cache} from './http_cache.mjs';
import {html_parse} from './html_parse.mjs';
export async function ceb_definition(word) {
    let url = string_combine_multiple([
        'https://www.binisaya.com/node/21?search=binisaya&word=',
        word,
        '&Search=Search'
    ]);
    let html = await http_cache(url);
    let parsed = html_parse(html)
}