import {equal} from "./equal.mjs";
import {list_length} from "./list_length.mjs";
import { range } from "./range.mjs";
export function list_equal(a, b) {
    let a_length = list_length(a);
    let b_length = list_length(b);
    if (!equal(a_length, b_length)) {
        return false;
    }
    for (let i of range(a_length)) {
        
    }
}
