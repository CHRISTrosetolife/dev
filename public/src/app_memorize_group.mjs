import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_length } from "./list_length.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_take } from "./list_take.mjs";
import { mod } from "./mod.mjs";
import {range} from "./range.mjs";
export function app_memorize_group(count) {
    let indices = range(count);
    let sub = 2
    let result =[];
    recursive(result, indices)
    return result;
    function recursive(result, list) {
        list_add(result, list);
        let length = list_length(list);
        if (less_than_equal(length, 1)) {
            return;
        }
        let half = divide(length, sub);
        let half_floor = floor(half);
        let remainder = mod(length, sub);
        let first_count = add(half_floor, remainder);
        let first = list_take(list, first_count)
        let second = list_skip(list, first_count)
        let both = [first, second];
        for (let b of both) {
            recursive(result, b)
        }
    }
}
function floor(value) {
    return Math.floor(value);
}

