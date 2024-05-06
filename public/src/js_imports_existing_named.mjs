import {list_adder} from "./list_adder.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import { equal } from "./equal.mjs";
export function js_imports_existing_named(ast, name) {
    let existing = list_adder(la => {
        js_visit_node(ast, 'ImportSpecifier', v => {
            let {node} = v;
            let {imported} = node;
            if (imported.type === 'Identifier') {
                if (equal(imported.name, name))
                la(v);
            }
        });
    });
    return existing;
}
