import { list_adder_unique } from './list_adder_unique.mjs';
export function js_node_types(ast) {
    list_adder_unique(la => {
        js_visit(ast, lambda);
        function lambda(v) {
            let {node} = v;
            la (node.type);
        }
    })
}