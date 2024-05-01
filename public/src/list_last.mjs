import {list_index_last} from "./list_index_last.mjs";
import {list_get} from "./list_get.mjs";
export function list_last(split2) {
    return list_get(split2, list_index_last(split2));
}
