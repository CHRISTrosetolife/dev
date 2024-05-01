import {string_empty_not_is} from "./string_empty_not_is.mjs";
import {number_is} from "./number_is.mjs";
import {integer_parse} from "./integer_parse.mjs";
import {list_last} from "./list_last.mjs";
import {each_pairs} from "./each_pairs.mjs";
import {string_split_space} from "./string_split_space.mjs";
import {list_get} from "./list_get.mjs";
import {string_trim} from "./string_trim.mjs";
import {list_map} from "./list_map.mjs";
import {string_split} from "./string_split.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {assert} from "./assert.mjs";
import {list_adder} from "./list_adder.mjs";
import {list_take} from "./list_take.mjs";
import {list_filter} from "./list_filter.mjs";
export function bible_verses_parse(rawText) {
    let split = string_split(rawText, '&#160;');
    list_map(split, s => {
        let s2 = string_split_space(s);
        list_filter(s2, s3 => string_empty_not_is(s3));
    });
    return list_adder(la => {
        each_pairs(split, (previous, current) => {
            let {verse_number} = verse_get(previous);
            let {tokens} = verse_get(current);
            la({
                verse_number,
                tokens
            });
        });
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
    function verse_get(verse_string) {
        let split = string_split_space(verse_string);
        let verse_number = list_last(split);
        let parsed = integer_parse(verse_number);
        assert(number_is, [parsed]);
        let less_1 = list_index_last(split);
        let tokens = list_take(split, less_1);
        return {
            verse_number,
            tokens
        };
    }
}
