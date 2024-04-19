import {js_visit_node} from "./js_visit_node.mjs";
export function js_object_init_functionize(ast) {
    js_visit_node(ast, 'VariableDeclaration', v => {
        let {node} = v;
        console.log({
            node
        });
    });
}
