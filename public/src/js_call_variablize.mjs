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
                let ancestor = list_get_end(stack, 2);
                let {type:ancestor_type} =ancestor;
                if (equal(ancestor_type, 'BlockStatement')) {
                    let body = list_get_end(stack, 1)
                    assert(list_is, [body])
                    let es = list_get_end(stack, 0)
                    let {type:es_type} = es;
                    assert(equal, [es_type, 'ExpressionStatement'])
                    let index = list_index(body, es)
                    let variable_name = js_name_unique_v(ast);
                    let parsed2 = js_variablize(ast, body, node, init);
                }
                console.log({stack})
            }
        }
    }
}
