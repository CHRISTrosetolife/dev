import {list_adder_unique} from "./list_adder_unique.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
export function js_object_init_functionize(ast) {
    let vs = list_adder_unique(la => {
        js_visit_node(ast, 'VariableDeclarator', v => {
            let {node} = v;
            let {init} = node;
            if (init.type === 'ObjectExpression') {
                la(v);
            }
        });
    });
    for (let v of vs) {
        let {node} = v;
        let {init} = node;
        let {properties} = init;
        console.log({init})
    }
}
