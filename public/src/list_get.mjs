import { list_index_last } from "./list_index_last.mjs";
import { number_less_than } from "./number_less_than.mjs";

export function list_get(list, index) {
    assert(number_less_than, [index, list_index_last(list)])
    return list[index];
}
