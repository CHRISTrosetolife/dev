import { list_adder } from './list_adder.mjs';
export function js_node_types(ast) {
    list_adder(la => {
        js_visit(ast, lambda);
        function lambda(v) {
            let {node} = v;
            la (node.type);
        }
    })
}