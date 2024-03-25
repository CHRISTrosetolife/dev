import {folder_read} from './folder_read.mjs'
export async function ceb_translations_learnentry_generate() {
    let folder = `./translations/ceb/learnentry/letters/`;
    let extension = `.txt`;
    let files = await folder_read(folder, extension)
    return files;
}