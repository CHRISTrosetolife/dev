import {list_join} from "./list_join.mjs";
import {js_code_assign} from "./js_code_assign.mjs";
import {list_join_comma} from "./list_join_comma.mjs";
import {js_code_statement_let} from "./js_code_statement_let.mjs";
import { list_length } from "./list_length.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { range } from "./range.mjs";
export function js_code_statement_let_assign_multiple(names, values) {
    let length_n = list_length(names);
    let length_v = list_length(values);
    assert(equal, [length_n, length_v])
    let list = [js_code_assign(name_a, a), js_code_assign(name_b, b)];
    for (let i of range(length_n)) {
        
    }
    return js_code_statement_let(list_join(list, ', '));
}
