import { equal } from "./equal.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
export function js_function_move_outside(ast, function_name) {
    js_visit_node(ast, 'FunctionExpression', v => {
        let {node} = v;
        let {id} = node;
        if (equal(id, null)) {
            return;
        }
        let {name} = id;
        if (!equal(name, function_name)) {
            return;
        }
        let {stack} = v;
        console.log({
            stack
        });
    });
}
