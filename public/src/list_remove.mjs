import { assert_not } from "./assert_not.mjs";
import {list_index} from "./list_index.mjs";
import { number_less_than } from "./number_less_than.mjs";
export function list_remove(list, element) {
    let index = list_index(list, element);
    assert_not(number_less_than, [0, index])
    list.splice(index, 1);
}
