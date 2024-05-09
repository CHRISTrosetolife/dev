import {list_includes} from "./list_includes.mjs";
import {list_get} from "./list_get.mjs";
import {number_less_than} from "./number_less_than.mjs";
import {assert_not} from "./assert_not.mjs";
export function list_remove_at(list, index) {
    assert_not(number_less_than, [index, 0]);
    let element = list_get(list, index);
    list.splice(index, 1);
    assert_not(list_includes, [list, element]);
}
