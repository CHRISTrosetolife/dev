import {greater_than_equal} from "./greater_than_equal.mjs";
import {list_add} from "./list_add.mjs";
import {app_learn_code_unique} from "./app_learn_code_unique.mjs";
import {range} from "./range.mjs";
import {array_new} from "./array_new.mjs";
import {assert} from "./assert.mjs";
export function app_learn_code_unique_multiple(value_get, count) {
    assert(greater_than_equal, [count, 2]);
    let names = array_new();
    for (let i of range(count)) {
        let name = app_learn_code_unique(value_get, names);
        list_add(names, name);
    }
    return names;
}
