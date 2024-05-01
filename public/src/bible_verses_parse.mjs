import {list_last} from "./list_last.mjs";
import {each_pairs} from "./each_pairs.mjs";
import {string_split_space} from "./string_split_space.mjs";
import {list_get} from "./list_get.mjs";
import {string_trim} from "./string_trim.mjs";
import {list_map} from "./list_map.mjs";
import {string_split} from "./string_split.mjs";
import {list_index_last} from "./list_index_last.mjs";
export function bible_verses_parse(rawText) {
    let split = string_split(rawText, '&#160;');
    each_pairs(split, (previous, current) => {
        let split2 = string_split(previous, ' ');
        let last = list_last(split2);
        let verse_number = last;
    });
    let mapped2 = list_map(split, m => {
        console.log({
            m
        });
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
