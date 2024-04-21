import {object_copy} from "./object_copy.mjs";
import {object_merge} from "./object_merge.mjs";
import {equal} from "./equal.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import { list_add } from "./list_add.mjs";
export async function js_function_move_outside(ast, function_name) {
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
        let parsed = js_parse_expression(function_name)
        object_replace(node, parsed);
        let {body} = ast;
        list_add(body, outside);
    });
}
function object_replace(original, replacement) {
    object_properties_delete(original);
    object_merge(original, replacement);
}

function object_properties_delete(object) {
    for (let property of object_properties(object)) {
        object_property_delete(object, property);
    }
}

function object_property_delete(object, property) {
    delete object[property];
}

