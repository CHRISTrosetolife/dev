import {string_split_space} from "./string_split_space.mjs";
import {list_get} from "./list_get.mjs";
import {string_trim} from "./string_trim.mjs";
import {list_map} from "./list_map.mjs";
import {string_split} from "./string_split.mjs";
export function bible_verses_parse(rawText) {
    let split = string_split(rawText, '  ');
    let mapped = list_map(split, string_trim);
    let mapped2 = list_map(mapped, m => {
        let split = string_split(m, '&#160;');
        let verse_number = list_get(split, 0);
        let text = list_get(split, 1);
        let tokens = string_split_space(text);
        return {
            verse_number,
            tokens
        };
    });
    return mapped2;
}
