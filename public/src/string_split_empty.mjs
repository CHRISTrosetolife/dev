import {import_multi} from "./import_multi.mjs";
let runes = await import_multi('runes', 'runes');
export function string_split_empty(input) {
    return runes(input);
}
