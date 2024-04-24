import {list_get} from "./list_get.mjs";
import {list_index_last} from "./list_index_last.mjs";
export function list_get_end(list, index) {
    let index_end = list_index_last(list);
    let index_actual = index_end - index;
    return list_get(list, index_actual);
}
