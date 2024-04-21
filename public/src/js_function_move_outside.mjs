import {object_copy} from "./object_copy.mjs";
import {object_merge} from "./object_merge.mjs";
import {equal} from "./equal.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
export function js_function_move_outside(ast, function_name) {
    js_visit_node(ast, 'FunctionExpression', v => {
        let {node} = v;
        let {id} = node;
        if (equal(id, null)) {
            return;
        }
        let {name} = id;
        if (!equal(name, function_name)) {
            return;
        }
        let outside = object_copy(node);
        object_properties_delete(node);
    });
}
function object_properties_delete(object) {
    for (let property of object_properties(object)) {
        object_property_delete(object, property);
    }
}

function object_property_delete(object, property) {
    delete object[property];
}

