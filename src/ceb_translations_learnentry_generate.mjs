import {folder_read} from './folder_read.mjs'
import {file_read} from './file_read.mjs'
import {newline} from './newline.mjs'
import {string_split} from './string_split.mjs'
import {string_get} from './string_get.mjs'
import {function_new_generic} from './function_new_generic.mjs'
import {list_join} from './list_join.mjs'
import {object_property_get} from './object_property_get.mjs'
import {string_combine_multiple} from './string_combine_multiple.mjs'
import {list_adder} from './list_adder.mjs'
export async function ceb_translations_learnentry_generate() {
    let folder = `./translations/ceb/learnentry/letters/`;
    let extension = `.txt`;
    let words = {};
    let files = await folder_read(folder, extension);
    for (let file of files) {
        let contents = await file_read(file)
        let lines = string_split(contents, newline());
        for (let line of lines) {
            let split = string_split(line, '\t');
            let first = string_get(split, 0)
            let second = string_get(split, 1)
            words[first] = second
        }
    }
    let pairs = list_adder(la => {
        for (let word in words) {
            let value = object_property_get(words, word)
            la(string_combine_multiple([word, ',', value]))
        }
    })
    let entries_string = list_join(pairs, ', ')
    let body_string = `return { ${entries_string} };`;
    await function_new_generic(`ceb_translations_learnentry`, ``, body_string, false, '');
}