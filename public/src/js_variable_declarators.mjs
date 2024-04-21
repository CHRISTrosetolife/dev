import {js_visit_node} from "./js_visit_node.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
export function js_variable_declarators(ast, type) {
    return list_adder_unique(la => {
        js_visit_node(ast, 'VariableDeclarator', v => {
            let {node} = v;
            let {init} = node;
            if (init.type === type) {
                la(v);
            }
        });
    });
}
