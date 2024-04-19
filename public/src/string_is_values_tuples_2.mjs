import {list_join_comma} from "./list_join_comma.mjs";
import {tuples_2} from "./tuples_2.mjs";
import {string_is_values} from "./string_is_values.mjs";
import {list_join} from "./list_join.mjs";
export function string_is_values_tuples_2() {
    let s = string_is_values.name;
    return tuples_2(list_join_comma([s, s]));
}
