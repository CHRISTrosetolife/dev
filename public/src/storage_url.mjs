import {string_replace} from "./string_replace.mjs";
export function storage_url(file_path) {
    let replaced = string_replace(file_path, '/', '%2F');
    return `https://firebasestorage.googleapis.com/v0/b/letjesusbeexalted.appspot.com/o/${replaced}?alt=media`;
}
