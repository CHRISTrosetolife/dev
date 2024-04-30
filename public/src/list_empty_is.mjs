import {list_length} from "./list_length.mjs";
import {equal} from "./equal.mjs";
export function list_empty_is(filtered) {
    return equal(list_length(filtered), 0);
}
