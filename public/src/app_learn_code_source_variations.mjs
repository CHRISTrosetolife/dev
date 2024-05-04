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
export function app_learn_code_source_variations(source) {
    let ast = js_parse(source);
    let bes = js_node_type(ast, 'BinaryExpression');
    let operators = ['+','*','===','!=='];
    let filtered = list_filter(bes, be => {
        let {operator} = be;
        return list_includes(operators, operator);
    });
    let length = list_length(filtered);
    let s = js_unparse(ast);
    if (equal(length, 0)) {
        return [s];
    }
    let count = Math.pow(2, length)
    assert(less_than_equal, [length, 1]);
    let first = list_first(filtered);
    object_property_swap(first, 'left', 'right');
    let alternative = js_unparse(ast);
    return [s, alternative];
}
