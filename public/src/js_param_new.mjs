import { js_node_type } from "./js_node_type.mjs";
import { list_filter } from "./list_filter.mjs";

export function js_param_new(ast, param_name, default_value) {
    let nodes = js_node_type(ast, 'CallExpression');
    let filtered = list_filter(nodes, )
}
