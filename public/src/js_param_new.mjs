import { equal } from "./equal.mjs";
import { js_export_single } from "./js_export_single.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";

export function js_param_new(ast, function_name, param_name, default_value_string) {
    let nodes = js_node_type(ast, 'CallExpression');
    for (let node of nodes) {
        let{callee} = node;
        let {type} = callee;
        if (!equal(type, 'Identifier')) {
            continue;
        }
        let {name} = callee;
        if (!equal(name, function_name)) {
            continue;
        }
        let {arguments:args} = node;
        let default_value = js_parse_expression(default_value_string);
        list_add(args, default_value);
    }
    let e = js_export_single(ast);
}
