export function js_node_types(ast) {
    list_adder()
    js_visit(ast, lambda_outer);
    function lambda_outer(v) {
        let {node} = v;
        if (node.type !== type) {
            return;
        }
        lambda(v);
    }
}