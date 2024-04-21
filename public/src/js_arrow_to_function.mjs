import {js_node_types} from "./js_node_types.mjs";
export function js_arrow_to_function(ast) {
    js_visit_node(ast, 'ArrowFunctionExpression', v => {
        let {node} = v;
        console.log({node})
    })
}
