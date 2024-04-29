import {list_set} from "./list_set.mjs";
import {list_get} from "./list_get.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_length} from "./list_length.mjs";
import {range} from "./range.mjs";
import {list_index_last} from "./list_index_last.mjs";
export function list_scramble(scrambled) {
    let mapped_index_last = list_index_last(scrambled);
    for (let i of range(list_length(scrambled))) {
        let j = integer_random(i, mapped_index_last);
        let temp = list_get(scrambled, j);
        list_set(scrambled, j, list_get(scrambled, i));
        list_set(scrambled, i, temp);
    }
}
