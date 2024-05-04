import {js_node_types} from "./js_node_types.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
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
import {string_combine} from "./string_combine.mjs";
import {string_length} from "./string_length.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
export function app_learn_code_source_variations(source) {
    let operators = ['+', '*', '===', '!=='];
    let {filtered, ast} = ast_filtered();
    let filtered_length = list_length(filtered);
    let s = js_unparse(ast);
    if (equal(filtered_length, 0)) {
        return [s];
    }
    let result = array_new();
    let count = Math.pow(2, filtered_length);
    for (let i of range(count)) {
        let {filtered, ast} = ast_filtered();
        let base2 = number_string_to(i, 2);
        while (less_than(string_length(base2), filtered_length)) {
            base2 = string_combine("0", base2);
        }
        let b_split = string_split_empty(base2);
        let b_split_length = list_length(b_split);
        for (let n of range(filtered_length)) {
            let swap = false;
            if (less_than(n, b_split_length)) {
                let b_split_n = list_get(b_split, n);
                swap = equal(b_split_n, '0');
            }
            if (swap) {
                let filtered_n = list_get(filtered, n);
                object_property_swap(filtered_n, 'left', 'right');
            }
        }
        js_visit_node(ast, 'BinaryExpression', v => {
            let {node} = v;
            let {right} = node;
            let {type} = right;
            if (equal(type, 'BinaryExpression')) {
                let {operator} = node;
                let {operator: operator_r} = right;
                if (equal(operator_r, operator)) {
                    
                }
            }
            let nt = js_node_types(node);
            console.log({
                nt
            });
        });
        let alternative = js_unparse(ast);
        list_add(result, alternative);
    }
    return result;
    function ast_filtered() {
        let ast = js_parse(source);
        let bes = js_node_type(ast, 'BinaryExpression');
        let filtered = list_filter(bes, be => {
            let {operator} = be;
            return list_includes(operators, operator);
        });
        return {
            filtered,
            ast
        };
    }
}
