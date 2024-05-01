import { import_multi } from "./import_multi.mjs";

let runes = await import_multi('runes', 'runes')
export function string_split(input, delimeter) {
    return runes.split(input, delimeter);
}
