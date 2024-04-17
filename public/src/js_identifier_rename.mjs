import {equal} from "./equal.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_visit_identifiers} from "./js_visit_identifiers.mjs";
export function js_identifier_rename(ast, identifier_from, identifier_to) {
    js_visit_identifiers(ast, v => {
        let {node} = v;
        let name = object_property_get(node, 'name');
        if (equal(name, identifier_from)) {
            object_property_set(node, 'name', identifier_to);
        }
    });
}
