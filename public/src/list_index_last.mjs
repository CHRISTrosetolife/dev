import {list_length} from "./list_length.mjs";
export function list_index_last(input) {
    let length = list_length(input);
    let index_last = length - 1;
    return index_last;
}
