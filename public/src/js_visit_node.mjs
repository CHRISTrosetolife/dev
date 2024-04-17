import {visit} from "./visit.mjs";
import {object_values} from "./object_values.mjs";
import {js_node_is} from "./js_node_is.mjs";
import {list_is} from "./list_is.mjs";
import {null_is} from "./null_is.mjs";
import {undefined_is} from "./undefined_is.mjs";
export function js_visit_node(ast, type, lambda) {
    visit(ast, n => {
        if (js_node_is(n)) {
            return object_values(n);
        }
        if (list_is(n)) {
            return n;
        }
        return [];
    }, n => !null_is(n) && !undefined_is(n), v => {
        let {node} = v;
        if (node.type !== type) {
            return;
        }
        lambda(v);
    });
}
