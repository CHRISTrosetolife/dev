import {less_than} from "./less_than.mjs";
import {string_split_empty} from "./string_split_empty.mjs";
import {number_string_to} from "./number_string_to.mjs";
import {less_than_equal} from "./less_than_equal.mjs";
import {list_filter} from "./list_filter.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {object_property_swap} from "./object_property_swap.mjs";
import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {js_parse} from "./js_parse.mjs";
import {lesson_less_than_equal} from "./lesson_less_than_equal.mjs";
import {list_first} from "./list_first.mjs";
import {list_includes} from "./list_includes.mjs";
import {list_length} from "./list_length.mjs";
import {list_map} from "./list_map.mjs";
import {range} from "./range.mjs";
import {string_split} from "./string_split.mjs";
import {list_get} from "./list_get.mjs";
export function app_learn_code_source_variations(source) {
    let ast = js_parse(source);
    let bes = js_node_type(ast, 'BinaryExpression');
    let operators = ['+', '*', '===', '!=='];
    let filtered = list_filter(bes, be => {
        let {operator} = be;
        return list_includes(operators, operator);
    });
    let length = list_length(filtered);
    let s = js_unparse(ast);
    if (equal(length, 0)) {
        return [s];
    }
    let count = Math.pow(2, length);
    for (let i of range(count)) {
        let base2 = number_string_to(i, 2);
        let b_split = string_split_empty(base2);
        let b_split_length = list_length(b_split);
        for (let n of range(length)) {
            if (less_than(less_than(n, b_split_length))) {
                console.log(list_get(b_split, n));
            } else {
                console.log('here');
            }
        }
    }
    assert(less_than_equal, [length, 1]);
    let first = list_first(filtered);
    object_property_swap(first, 'left', 'right');
    let alternative = js_unparse(ast);
    return [s, alternative];
}
