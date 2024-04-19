import {js_node_type} from "./js_node_type.mjs";
import {js_visit_node} from './js_visit_node.mjs';
import {list_adder_unique} from './list_adder_unique.mjs';
export function js_exports(ast) {
    return list_adder_unique(la => {
        js_visit_node(ast, 'ExportNamedDeclaration', v => {
            let {node} = v;
            la(node);
        });
    });
    return js_node_type(ast, 'ExportNamedDeclaration');
}
