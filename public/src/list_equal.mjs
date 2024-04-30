import {equal} from "./equal.mjs";
import {list_length} from "./list_length.mjs";
export function list_equal(a, b) {
    let a_length = list_length(a);
    let b_length = list_length(b);
    if (!equal(a_length, b_length)) {
        return false;
    }
}
