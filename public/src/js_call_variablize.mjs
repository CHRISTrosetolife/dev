import {js_node_type} from "./js_node_type.mjs";
import {js_node_types} from "./js_node_types.mjs";
export function js_call_variablize(ast) {
    return js_node_type(ast, 'CallExpression', v => {
        let {node} = v;
        let {arguments:args} = node;
        return;
        console.log({
            args
        });
    });
}
