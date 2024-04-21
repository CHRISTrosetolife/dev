import { list_index_last } from "./list_index_last.mjs";

export function each_reverse(list) {
    let index_last = list_index_last(list);
    for (let i = index_last ; i >= list_index_first() ; i--) {

    }
}
function list_index_first() {
    return 0;
}

