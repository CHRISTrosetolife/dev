import {file_read} from './file_read.mjs';
import {path_join} from './path_join.mjs';
import {string_combine} from './string_combine.mjs';
import {html_parse} from './html_parse.mjs';
import {folder_gitignore} from './folder_gitignore.mjs';
export async function bible_chapter_parsed(bible_folder, chapter_name) {
    let folder_gitignore_result = folder_gitignore();
    let folder = path_join([folder_gitignore_result, bible_folder]);
    let chapter_path = string_combine(chapter_name, '.htm');
    let joined = path_join([folder, chapter_path]);
    let read = await file_read(joined);
    let parsed = html_parse(read);
    let notemarks = parsed.querySelectorAll('.notemark');
    for (let n of notemarks) {
        n.remove();
    }
    return parsed;
}