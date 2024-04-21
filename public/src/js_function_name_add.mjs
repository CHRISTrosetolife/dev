import {js_visit_node} from "./js_visit_node.mjs";
export function js_function_name_add(ast) {
    js_visit_node(ast, 'FunctionExpression', v => {
        let {node} = v;
    });
}
