import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
import {returns} from "./returns.mjs";
import {js_node_types} from "./js_node_types.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_adder} from "./list_adder.mjs";
import { list_index } from "./list_index.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_return_variablize(ast) {
    let return_statements = js_node_type_visitor(ast, 'ReturnStatement');
    for (let r of return_statements) {
        let {parent} = r;
        assert(list_is, [parent]);
        let index = list_index(parent, r);
        js_code_statement(`let ${variable_name} = 0;`)
        parent.splice(index, 0, s);
        console.log({
            r
        });
    }
}
