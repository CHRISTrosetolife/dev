import {list_remove_multiple_at} from "./list_remove_multiple_at.mjs";
export function list_remove_at(list, index) {
    list_remove_multiple_at(list, index, 1);
}
