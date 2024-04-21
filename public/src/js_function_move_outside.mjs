import {js_visit_node} from "./js_visit_node.mjs";
export function js_function_move_outside(ast, function_name) {
    js_visit_node(ast, 'FunctionExpression', v => {
        let {stack} = v;
        console.log({
            stack
        });
    });
}
