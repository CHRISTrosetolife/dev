import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_outside_move} from "./js_outside_move.mjs";
import {object_replace} from "./object_replace.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {object_copy} from "./object_copy.mjs";
import {object_merge} from "./object_merge.mjs";
import {equal} from "./equal.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_add} from "./list_add.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function js_function_move_outside(ast, function_name) {
    let vs = js_node_type_visitor(ast, 'FunctionExpression');
    for (let v of vs) {
        let {node} = v;
        let {id} = node;
        if (equal(id, null)) {
            continue;
        }
        let {name} = id;
        if (!equal(name, function_name)) {
            continue;
        }
        let outside = object_copy(node);
        object_property_set(outside, 'type', 'FunctionDeclaration');
        let parsed = js_parse_expression(function_name);
        object_replace(node, parsed);
        let {body} = ast;
        list_add(body, outside);
    }
    await js_outside_move(ast);
}
