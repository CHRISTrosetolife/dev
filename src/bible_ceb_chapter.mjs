import {path_join} from './path_join.mjs'
export function bible_ceb_chapter(chapter_name) {
    let folder = '.\\gitignore\\cebulb_html';
    let joined = path_join([folder, chapter_name]);
    return joined;
}