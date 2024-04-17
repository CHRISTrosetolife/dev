import {list_adder} from "./list_adder.mjs";
import {js_visit} from "./js_visit.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
export async function js_imports_add(ast) {
    let existing = list_adder(la => {
        js_visit_node(ast, 'ImportSpecifier', v => {
            let {node} = v;
            let {imported} = node;
            if (imported.type === 'Identifier') {
                la(imported.name)
            }
        });
    })
    let names = await function_names();
    js_visit(ast, v => {
        let {node} = v;
    });
}
