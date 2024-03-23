import {path_join} from './path_join.mjs'
import {string_combine} from './string_combine.mjs'
export function bible_ceb_chapter(chapter_name) {
    let folder = '.\\gitignore\\cebulb_html';
    let chapter_path = string_combine(chapter_name, '.html')
    let joined = path_join([folder, chapter_name]);
    return joined;
}