import { file_read } from './file_read.mjs';
import {path_join} from './path_join.mjs'
import {string_combine} from './string_combine.mjs'
import {html_parse} from './html_parse.mjs'
import {string_split} from './string_split.mjs'
import {list_map} from './list_map.mjs'
import {string_trim} from './string_trim.mjs'
export async function bible_ceb_chapter(chapter_name) {
    let folder = '.\\gitignore\\cebulb_html';
    let chapter_path = string_combine(chapter_name, '.htm')
    let joined = path_join([folder, chapter_path]);
    let read = await file_read(joined)
    let parsed = html_parse(read)
    let verses = parsed.querySelector('.p');
    let rawText = verses.rawText;
    let split = string_split(rawText, '  ');
    let mapped = list_map(split, string_trim)
    return split;
}