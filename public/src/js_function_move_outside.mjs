import {js_outside_move} from "./js_outside_move.mjs";
import {object_replace} from "./object_replace.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {object_copy} from "./object_copy.mjs";
import {object_merge} from "./object_merge.mjs";
import {equal} from "./equal.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_add} from "./list_add.mjs";
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
        let parsed = js_parse_expression(function_name);
        object_replace(node, parsed);
        let {body} = ast;
        list_add(body, outside);
    });
    await js_outside_move(ast);
}
