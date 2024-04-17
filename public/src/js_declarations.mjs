import {js_visit_node} from './js_visit_node.mjs';
import {list_adder_unique} from './list_adder_unique.mjs';
export function js_declarations(ast) {
    return list_adder_unique(la => {
        js_visit_node(ast, 'ExportNamedDeclaration', v => {
            let {node} = v;
            la(node.name);
        });
    });
}
