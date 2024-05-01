import { add_1 } from "./add_1.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { range } from "./range.mjs";

export function each_pairs(list, lambda) {
    let last_index = list_index_last(list);
    for (let i of range(last_index)) {
        let i_next = add_1(i);
    }
}
