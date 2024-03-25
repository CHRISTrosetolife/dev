import {folder_read} from './folder_read.mjs'
import {file_read} from './file_read.mjs'
export async function ceb_translations_learnentry_generate() {
    let folder = `./translations/ceb/learnentry/letters/`;
    let extension = `.txt`;
    let files = await folder_read(folder, extension);
    for (let file of files) {
        let contents = await file_read(file)
        console.log({contents})
    }
    return files;
}