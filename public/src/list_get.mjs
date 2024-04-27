import {assert} from "./assert.mjs";
import {list_index_last} from "./list_index_last.mjs";
import { list_length } from "./list_length.mjs";
import {number_less_than} from "./number_less_than.mjs";
export function list_get(list, index) {
    assert(number_less_than, [index, list_length(list)]);
    return list[index];
}
