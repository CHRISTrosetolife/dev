import {string_length} from "./string_length.mjs";
export function list_index_last(input) {
    let length = string_length(input);
    let index_last = length - 1;
    return index_last;
}
