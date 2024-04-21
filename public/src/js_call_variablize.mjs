import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {js_node_types} from "./js_node_types.mjs";
export function js_call_variablize(ast) {
    let vs = js_node_type_visitor(ast, 'CallExpression');
    for (let v of vs) {
        let {node} = v;
        let {arguments: args} = node;
        console.log({
            args
        });
    }
}
