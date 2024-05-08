import {app_code_back} from "./app_code_back.mjs";
import {range} from "./range.mjs";
import {list_length} from "./list_length.mjs";
import {greater_than_equal} from "./greater_than_equal.mjs";
import {assert} from "./assert.mjs";
import {global_get} from "./global_get.mjs";
export function app_code_back_multiple(count) {
    let {back_stack} = global_get();
    assert(greater_than_equal, [list_length(back_stack), count]);
    for (let i of range(count)) {
        app_code_back();
    }
}
