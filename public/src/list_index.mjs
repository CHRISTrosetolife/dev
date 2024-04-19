import {assert_not} from "./assert_not.mjs";
export function list_index(list, element) {
    let index = list.indexOf(element);
    assert_not(number_less_than, [index, 0]);
    return index;
}
