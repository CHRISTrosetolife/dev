import {js_visit} from './js_visit.mjs';
import {list_adder_unique} from './list_adder_unique.mjs';
export function js_declarations(ast) {
    return list_adder_unique(la => {
        js_visit(ast, 'ExportNamedDeclaration', v => {
            let {node} = v;
            la(node.name);
        });
    });
}
