import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {js_node_types} from "./js_node_types.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_call_variablize(ast) {
    let move_types = ['ArrayExpression']
    let vs = js_node_type_visitor(ast, 'CallExpression');
    for (let v of vs) {
        let {node} = v;
        let {stack} = v;
        let {arguments: args} = node;
        for (let arg of args) {
            let {type} = arg;
            if (list_includes(move_types, type)) {
                console.log({stack})
            }
        }
    }
}
