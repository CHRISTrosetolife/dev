import {list_adder_unique} from "./list_adder_unique.mjs";
import {returns} from "./returns.mjs";
import {js_node_types} from "./js_node_types.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_adder} from "./list_adder.mjs";
export function js_return_variablize(ast) {
    const node_type = 'ReturnStatement';
    let return_statements = list_adder_unique(la => {
        js_visit_node(ast, node_type, v => {
            let {node} = v;
            la(node);
        });
    });
    return_statements;
    return js_node_types(ast);
}
