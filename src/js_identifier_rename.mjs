import {visit} from "./visit.mjs";
import {object_values} from "./object_values.mjs";
import {js_node_is} from "./js_node_is.mjs";
import {list_is} from "./list_is.mjs";
import {null_is} from "./null_is.mjs";
import {equal} from "./equal.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {undefined_is} from "./undefined_is.mjs";
export function js_identifier_rename(ast, identifier_from, identifier_to) {
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
        if (node.type !== 'Identifier') {
            return;
        }
        let name = object_property_get(node, 'name');
        if (equal(name, identifier_from)) {
            object_property_set(node, 'name', identifier_to);
        }
    });
}
